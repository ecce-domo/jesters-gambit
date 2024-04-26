export const commitRound = ({ bids, tricks, trump }) => ({
    type: 'COMMIT_ROUND_DATA',
    data: { bids, tricks, trump },
});

/*
    data shape:
    {
        bids: [0, 2, 0, 0],
        tricks: [0, 1, 1, 0],
        trump: 'hearts',
    }
*/
