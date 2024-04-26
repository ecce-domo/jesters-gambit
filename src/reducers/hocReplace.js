const hocReplaceReducer = (reducerName, {
    initialState = '',
    acceptableValues = [],
}) => (state = initialState, {type, data}) => {
    if(
        acceptableValues.length &&
        !acceptableValues.includes(data) &&
        type !== `RESET_${reducerName}`
    ) {
        return state;
    }
    switch(type) {
        case `SET_${reducerName}`:
            return [null, undefined].includes(data) ? state : data;
        case `TOGGLE_SET_${reducerName}`:
            return data === state ? initialState : data;
        case `RESET_${reducerName}`:
            return initialState;
        default:
            return state;
    }
};

export default hocReplaceReducer;
