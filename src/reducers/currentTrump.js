const currentTrump = (state = '', {type, data}) => {
    switch(type) {
        case 'SET_CURRENT_TRUMP':
            return data;
        default:
            return state;
    }
};

export default currentTrump;
