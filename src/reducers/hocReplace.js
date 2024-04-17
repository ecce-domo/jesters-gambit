const hocReplaceReducer = (reducerName, defaultState = '') => (state = defaultState, {type, data}) => {
    switch(type) {
        case `SET_${reducerName}`:
            return [null, undefined].includes(data) ? state : data;
        case `TOGGLE_SET_${reducerName}`:
            return data === state ? defaultState : data;
        case `RESET_${reducerName}`:
            return defaultState;
        default:
            return state;
    }
};

export default hocReplaceReducer;
