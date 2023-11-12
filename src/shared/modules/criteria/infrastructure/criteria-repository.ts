import { Criteria, CriteriaRepository } from '../domain'

const meetCriteria = async <T extends string>(criteria: Criteria<T>) => {
  const filters = criteria.filters
  const items = criteria.items

  const filteredItems = items.filter(item => {
    return filters.some(filter => item.includes(filter))
  })

  return filteredItems
}

export const criteriaRepository = <T extends string>(): CriteriaRepository<T> => {
  return {
    meetCriteria
  }
}
