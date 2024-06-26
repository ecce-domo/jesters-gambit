export const defaultState = [0, 0, 0, 0, 0, 0];

const currentTricks = (
    state = defaultState,
    { type, data }
) => {
    switch(type) {
        case 'SET_NUMBER_OF_PLAYERS':
            return defaultState.slice(0, data);
        case 'INCREMENT_TRICK_AT_INDEX':
            return state.map(
                (trick, index, tricks) =>
                    index === data.index && tricks.reduce((a, b) => a+b) < data.cap
                        ? trick + 1
                        : trick
            );
        case 'DECREMENT_TRICK_AT_INDEX':
            return state.map((trick, index) => index === data.index ? Math.max(trick - 1, 0) : trick);
        case 'INCREMENT_ROUND':
            return state.map(() => 0);
        default:
            return state;
    }
}

export default currentTricks;
