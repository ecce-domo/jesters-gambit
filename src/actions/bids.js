export const incrementBidAtIndex = ( index, cap ) => ({
    type: 'INCREMENT_BID_AT_INDEX',
    data: { index, cap },
});

export const decrementBidAtIndex = index => ({
    type: 'DECREMENT_BID_AT_INDEX',
    data: { index },
});
