const defaultState = [0, 0, 0, 0, 0, 0];

const currentBids = (
    state = defaultState,
    { type, data }
) => {
    switch(type) {
        case 'SET_NUMBER_OF_PLAYERS':
            return defaultState.slice(0, data);
        case 'INCREMENT_BID_AT_INDEX':
            return state.map((bid, i) => i === data.index ? Math.min(bid + 1, data.cap) : bid);
        case 'DECREMENT_BID_AT_INDEX':
            return state.map((bid, i) => i === data.index ? Math.max(bid - 1, 0) : bid);
        default:
            return state;
    }
}

export default currentBids;
