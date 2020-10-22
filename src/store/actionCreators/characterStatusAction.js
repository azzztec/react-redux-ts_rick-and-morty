export const SELECT_BY_STATUS = 'SELECT_BY_STATUS'

export function selectByStatus(characterStatus) {
  return {
    type: SELECT_BY_STATUS,
    payload: characterStatus
  }
}