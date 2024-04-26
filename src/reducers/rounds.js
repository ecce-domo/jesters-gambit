const rounds = (state = [], {type, data}) => {
    switch (type) {
        case 'COMMIT_ROUND_DATA':
            return [...state, data];
        default:
            return state;
    }
}

export default rounds;
