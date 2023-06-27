export default function bonusReducer(state={points :1 }, action) {
    switch(action.type){
        case incBonus: return {points : state.points +1}
        case incByAmt : 
//if ssome one deposit money more than 100 he will get a point
        if(action.payload >=100){
            return {points : state.points +1}
        }
        // case inc: return {points : state.points +1}
        // case dec: return {points : state.points -1}
        default : return state
    }
}