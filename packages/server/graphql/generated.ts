import type { GraphQLResolveInfo } from "graphql";
import type { MercuriusContext } from "mercurius";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) =>
	| Promise<import("mercurius-codegen").DeepPartial<TResult>>
	| import("mercurius-codegen").DeepPartial<TResult>;
export type RequireFields<T, K extends keyof T> = {
	[X in Exclude<keyof T, K>]?: T[X];
} &
	{ [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	_FieldSet: any;
};

export type Human = {
	__typename?: "Human";
	name: Scalars["String"];
};

export type Foo = {
	__typename?: "Foo";
	bars?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars["Int"]>>>>>>>;
};

export type Dog = {
	__typename?: "Dog";
	name: Scalars["String"];
	owner?: Maybe<Human>;
};

export type Query = {
	__typename?: "Query";
	Hello: Scalars["String"];
	dogs: Array<Dog>;
	getFoo?: Maybe<Foo>;
};

export type Mutation = {
	__typename?: "Mutation";
	add: Scalars["Int"];
	createNotification: Scalars["Boolean"];
};

export type MutationaddArgs = {
	x: Scalars["Int"];
	y: Scalars["Int"];
};

export type MutationcreateNotificationArgs = {
	message: Scalars["String"];
};

export type Subscription = {
	__typename?: "Subscription";
	newNotification: Scalars["String"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
	fragment: string;
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
	selectionSet: string;
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
	| LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
	| NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {}
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {}
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Human: ResolverTypeWrapper<Human>;
	String: ResolverTypeWrapper<Scalars["String"]>;
	Foo: ResolverTypeWrapper<Foo>;
	Int: ResolverTypeWrapper<Scalars["Int"]>;
	Dog: ResolverTypeWrapper<Dog>;
	Query: ResolverTypeWrapper<{}>;
	Mutation: ResolverTypeWrapper<{}>;
	Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
	Subscription: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Human: Human;
	String: Scalars["String"];
	Foo: Foo;
	Int: Scalars["Int"];
	Dog: Dog;
	Query: {};
	Mutation: {};
	Boolean: Scalars["Boolean"];
	Subscription: {};
};

export type HumanResolvers<
	ContextType = MercuriusContext,
	ParentType extends ResolversParentTypes["Human"] = ResolversParentTypes["Human"]
> = {
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooResolvers<
	ContextType = MercuriusContext,
	ParentType extends ResolversParentTypes["Foo"] = ResolversParentTypes["Foo"]
> = {
	bars?: Resolver<
		Maybe<Array<Maybe<Array<Maybe<Array<Maybe<ResolversTypes["Int"]>>>>>>>,
		ParentType,
		ContextType
	>;
	isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DogResolvers<
	ContextType = MercuriusContext,
	ParentType extends ResolversParentTypes["Dog"] = ResolversParentTypes["Dog"]
> = {
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	owner?: Resolver<Maybe<ResolversTypes["Human"]>, ParentType, ContextType>;
	isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = MercuriusContext,
	ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
	Hello?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	dogs?: Resolver<Array<ResolversTypes["Dog"]>, ParentType, ContextType>;
	getFoo?: Resolver<Maybe<ResolversTypes["Foo"]>, ParentType, ContextType>;
};

export type MutationResolvers<
	ContextType = MercuriusContext,
	ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
	add?: Resolver<
		ResolversTypes["Int"],
		ParentType,
		ContextType,
		RequireFields<MutationaddArgs, "x" | "y">
	>;
	createNotification?: Resolver<
		ResolversTypes["Boolean"],
		ParentType,
		ContextType,
		RequireFields<MutationcreateNotificationArgs, "message">
	>;
};

export type SubscriptionResolvers<
	ContextType = MercuriusContext,
	ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = {
	newNotification?: SubscriptionResolver<
		ResolversTypes["String"],
		"newNotification",
		ParentType,
		ContextType
	>;
};

export type Resolvers<ContextType = MercuriusContext> = {
	Human?: HumanResolvers<ContextType>;
	Foo?: FooResolvers<ContextType>;
	Dog?: DogResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	Subscription?: SubscriptionResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MercuriusContext> = Resolvers<ContextType>;

type Loader<TReturn, TObj, TParams, TContext> = (
	queries: Array<{
		obj: TObj;
		params: TParams;
	}>,
	context: TContext & {
		reply: import("fastify").FastifyReply;
	}
) => Promise<Array<import("mercurius-codegen").DeepPartial<TReturn>>>;
type LoaderResolver<TReturn, TObj, TParams, TContext> =
	| Loader<TReturn, TObj, TParams, TContext>
	| {
			loader: Loader<TReturn, TObj, TParams, TContext>;
			opts?: {
				cache?: boolean;
			};
	  };
export interface Loaders<
	TContext = import("mercurius").MercuriusContext & {
		reply: import("fastify").FastifyReply;
	}
> {
	Human?: {
		name?: LoaderResolver<Scalars["String"], Human, {}, TContext>;
	};

	Foo?: {
		bars?: LoaderResolver<
			Maybe<Array<Maybe<Array<Maybe<Scalars["Int"]>>>>>,
			Foo,
			{},
			TContext
		>;
	};

	Dog?: {
		name?: LoaderResolver<Scalars["String"], Dog, {}, TContext>;
		owner?: LoaderResolver<Maybe<Human>, Dog, {}, TContext>;
	};
}
declare module "mercurius" {
	interface IResolvers
		extends Resolvers<import("mercurius").MercuriusContext> {}
	interface MercuriusLoaders extends Loaders {}
}
