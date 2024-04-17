export const incrementTrickAtIndex = (index, cap) => ({
    type: 'INCREMENT_TRICK_AT_INDEX',
    data: { index, cap },
});

export const decrementTrickAtIndex = index => ({
    type: 'DECREMENT_TRICK_AT_INDEX',
    data: { index },
});
