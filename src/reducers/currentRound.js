const currentRound = (state = 0, { type, data }) => {
    switch(type) {
        case 'INCREMENT_ROUND':
            return state + 1;
        case 'SET_ROUND': // probably delete this later
            return data;
        default:
            return state;
    }
};

export default currentRound;
