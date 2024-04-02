const numberOfPlayers = (state = 0, {type, data}) => {
    switch (type) {
        case 'SET_NUMBER_OF_PLAYERS':
            if (data >= 3 && data <= 6) return data;
            return state;
        default:
            return state;
    }
};

export default numberOfPlayers;
