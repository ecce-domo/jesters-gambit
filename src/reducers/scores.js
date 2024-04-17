const scores = (state = [], {type, data}) => {
    switch (type) {
        case 'COMMIT_ROUND_DATA':
            return [...state, data];
        default:
            return state;
    }
}

export default scores;

/*
    data shape:
    {
        bids: [0, 2, 0, 0],
        tricks: [0, 1, 1, 0],
        trump: 'hearts',
    }
*/
