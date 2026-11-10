import { ClausesDto, ClausesOptions, where } from "../dtos/clauses"
import { PaginatedQueryDto, pagination } from "../dtos/pagination"
import { SortingDto, sorting } from "../dtos/sorting"

export type QueryParamsDto<T extends SortingDto,H extends ClausesDto> = {
  pagination?:PaginatedQueryDto,
  sorting?:T,
  where?:H
}

export type QueryParamsOptions = {
  where?:ClausesOptions
}

export function queryParams<T extends SortingDto,H extends ClausesDto>(args:QueryParamsDto<T,H>,opts:QueryParamsOptions = {}): Record<string,any> {
  return {
    ...pagination(args.pagination ?? {}),
    ...sorting(args.sorting),
    ...where(args.where ?? {},opts.where)
  }
}