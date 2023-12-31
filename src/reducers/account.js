import { dec, getAccUserFulfilled, getAccUserPending, getAccUserRejected, inc, incByAmt } from "../actions"


export default function accountReducer(state={amount :1}, action) {

    switch(action.type){
        case getAccUserFulfilled: return {amount : action.payload +1, pending: false}
        case getAccUserRejected: return {...state, error: action.error, pending: false}
        case getAccUserPending: return {...state, pending: true}
        case dec: return {amount : state.amount -1}
        case inc: return {amount : state.amount +1}
        case incByAmt: return {amount :action.payload}
        default : return state
    }  }