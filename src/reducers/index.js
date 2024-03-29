const initialState = {
    counter:0
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case 'INCREASE':
            return {counter:state.counter+1}
        case 'DECREASE':
            return {counter:state.counter-1}
        default:
    }
    return state;
}

export default reducer;