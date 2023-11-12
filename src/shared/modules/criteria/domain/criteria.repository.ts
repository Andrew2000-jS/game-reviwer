import { Criteria } from './criteria.entity'

export interface CriteriaRepository<T> {
  meetCriteria: (criteria: Criteria<T>) => Promise<T[]>
}
