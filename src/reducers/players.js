const players = (state = ['', '', '', '', '', ''], {type, names}) => {
    switch(type) {
        case 'SET_PLAYER_NAMES':
            return names;
        default:
            return state;
    }
};

export default players;
