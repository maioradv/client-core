export type PaginatedQueryDto = {
  page?:number,
  limit?:number
}

export type PaginatedMetaDto = {
  page:number,
  take:number,
  itemCount:number,
  pageCount:number,
  hasPreviousPage:boolean,
  hasNextPage:boolean
}

export type PaginatedDto<T> = {
  data: T[],
  meta: PaginatedMetaDto
}

export function pagination(args:PaginatedQueryDto): Record<string,any> {
  return args
}

export type PaginatedGQLQueryDto = {
  after?:number,
  before?:number,
  limit?:number,
  sorting?:'asc'|'desc'
}

export type PaginatedGQLMetaDto = {
  startCursor:number|null,
  endCursor:number|null,
  hasPreviousPage:boolean,
  hasNextPage:boolean
}

export type Edge<T> = {
  cursor:string,
  node:T
}

export type PaginatedGQL<T> = {
  edges: Edge<T>[],
  nodes: T[]
  meta: PaginatedGQLMetaDto
}