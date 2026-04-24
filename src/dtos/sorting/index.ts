export type Sorting = 'asc' | 'desc'

export type SortingDto = Record<string,Sorting>

export type DefaultSortingDto = {
  id?:Sorting,
  updatedAt?:Sorting,
  createdAt?:Sorting
}

export function sorting(args:SortingDto): Record<string,any> {
  if(!args) return {}
  return {
    sorting: JSON.stringify(args)
  }
}

export type SortingParamsDto<T extends SortingDto> = T & DefaultSortingDto