import { Criteria, CriteriaRepository } from '../domain'

interface MeetCreteria<T> {
  (repository: CriteriaRepository<T>, criteria: Criteria<T>): Promise<T[]>
}

export const meetCriteria: MeetCreteria<any> = async (repository, criteria) => await repository.meetCriteria(criteria)
