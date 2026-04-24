export type ResolverDef<T extends string> = {
  name:T,
  query:string,
}
export type Resolvers<Queries extends ReadonlyArray<string>,Mutations extends ReadonlyArray<string>> = {
  query:{
    [K in (Queries extends ReadonlyArray<infer U> ? U : never)]:ResolverDef<K>
  },
  mutation:{
    [L in (Mutations extends ReadonlyArray<infer U> ? U : never)]:ResolverDef<L>
  }
}