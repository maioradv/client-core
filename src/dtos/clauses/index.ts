export type NumberClause = number | number[] | undefined
export type StringClause = string | undefined
export type DateClause = string | Date | undefined
export type BooleanClause = boolean | undefined
export type EnumClause<T> = T | T[] | undefined
export type ObjectClause<T> = T | T[] | undefined

export type ClausesDto = Record<string,NumberClause|StringClause|DateClause|BooleanClause|EnumClause<unknown>|ObjectClause<unknown>>

export type DefaultClausesDto = {
  id?:NumberClause,
  createdAt?:DateClause,
  updateAt?:DateClause,
  minCreatedAt?:DateClause,
  maxCreatedAt?:DateClause,
  minUpdatedAt?:DateClause,
  maxUpdatedAt?:DateClause,
}

export function where(args:ClausesDto): Record<string,any> {
  const res = {}
  Object.keys(args).forEach(function(key) {
    if(key === 'metafields') {
      res[key] = args[key] instanceof Array ? (args[key] as Array<any>).map(MetafieldStringify).join() : MetafieldStringify(args[key] as any)
    }
    else if(key === 'translations') {
      res[key] = args[key] instanceof Array ? (args[key] as Array<any>).map(TranslationStringify).join() : TranslationStringify(args[key] as any)
    }
    else {
      res[key] = args[key] instanceof Array ? (args[key] as Array<any>).join() : args[key]
    }
  });
  return res;
}

export function MetafieldStringify(object:Record<string,string>) : string {
  return `${object.key || ''}:${object.value || ''}`
}

export function TranslationStringify(object:Record<string,string>) : string {
  return `${object.key || ''}:${object.locale || ''}:${object.value || ''}`
}

export type WhereClausesDto<T extends ClausesDto> = T & DefaultClausesDto