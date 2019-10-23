import { 
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM  } from '../actions/types'

import _ from 'lodash'

export default (state = {}, action) => {
    switch(action.type) {
        case CREATE_STREAM:
            // const newState = {...state}
            // newState[action.payload.id] = action.payload
            // return {newState}

            //OR

            return {...state, [action.payload.id]: action.payload}
        
        
        case EDIT_STREAM:
                return {...state, [action.payload.id]: action.payload}

        case FETCH_STREAM:
                return {...state, [action.payload.id]: action.payload}
        
        /* mapKeys converts array to object taking second argument as a key*/ 
        case FETCH_STREAMS:
                return {...state, ..._.mapKeys(action.payload, 'id')}

        case DELETE_STREAM:
                return _.omit(state, action.payload)

        default:
            return state
    }
}