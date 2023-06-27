const init = 'account/init'
const inc = 'account/increment'
const dec = 'account/decrement'
const incByAmt = 'account/incrementByAmount'
const getAccUserPending = 'account/getUser/pending'
const getAccUserFulfilled = 'account/getUser/fulfilled'
const getAccUserRejected = 'account/getUser/rejected'
const incBonus = 'bouns/increment'



function getUserAccount(id) {
    return async (dispatch, getState) =>{
        try{
            dispatch(getAccountUserPending())
            const {data} = await axios.get(`http://localhost:3000/account/${id}`)
            dispatch(getAccountUserFulfilled(data.amount))
    }   catch(error){
            dispatch(getAccountUserRejected(error.message))
    }   }  
}
function getAccountUserFulfilled(value) {
return {type : getAccUserFulfilled, payload: value} 
}
function getAccountUserPending() {
return {type : getAccUserPending} 
}
function getAccountUserRejected(error) {
return {type : getAccUserRejected, error: error} 
}
function increment() {
return {type : inc} 
}
function decrement() {
return {type : dec} 
}
function incrementByAmount(value) {
return {type : incByAmt, payload : value} 
}
function incrementBouns(value) {
return {type : incBonus, payload : value} 
}