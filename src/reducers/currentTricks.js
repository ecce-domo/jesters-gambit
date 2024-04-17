const currentTricks = (
    state = [0, 0, 0, 0, 0, 0],
    { type, data }
) => {
    switch(type) {
        case 'SET_NUMBER_OF_PLAYERS':
            return state.slice(0, data);
        case 'INCREMENT_TRICK_AT_INDEX':
            return state.map(
                (trick, index, tricks) =>
                    index === data.index && tricks.reduce((a, b) => a+b) < data.cap
                        ? trick + 1
                        : trick);
        case 'DECREMENT_TRICK_AT_INDEX':
            return state.map((trick, index) => index === data.index ? Math.max(trick - 1, 0) : trick);
        default:
            return state;
    }
}

export default currentTricks;
