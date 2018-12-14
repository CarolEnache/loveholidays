export const initialState = {
    currrentStep: 1,
    number: 0
}

export const reducer = (state, action) => {
    switch( action.type ){
        case 'SET_SLIDE':
            return {
                ...state, 
                currrentStep: action.payload
            };
        case 'INCREMENT_NUMBER':
            return {
                ...state,
                number: state.number +1
            }
        case 'DECREMENT_NUMBER':
            return {
                ...state,
                number: state.number -1
            }
        default:
            return state
    }
}
