import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {
  switch (action.types) {
    case READ_EVENTS:
      console.log(action)
      console.log(_.mapKeys(action.response.data, 'id'))
      return events
    default:
      return events
  }
}