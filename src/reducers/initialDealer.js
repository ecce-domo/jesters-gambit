const initialDealer = (state = null, {type, data}) => {
    switch(type) {
        case 'SET_INITIAL_DEALER':
            return data;
        default:
            return state;
    }
};

export default initialDealer;
