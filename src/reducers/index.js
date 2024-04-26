import { combineReducers } from 'redux';
import { suits, TRUMP_PHASE, BID_PHASE, SCORE_PHASE } from "../constants";
import currentBids from './currentBids';
import currentRound from './currentRound';
import currentTricks from './currentTricks';
import hocReplaceReducer from './hocReplace';
import scores from './scores';

export default combineReducers({
    numberOfPlayers: hocReplaceReducer('NUMBER_OF_PLAYERS', {
        initialState: 0,
        acceptableValues: [3, 4, 5, 6],
    }),
    players: hocReplaceReducer('PLAYER_NAMES', {
        initialState: ['', '', '', '', '', ''],
    }),
    initialDealer: hocReplaceReducer('INITIAL_DEALER', {
        initialState: null
    }),
    currentRound,
    currentPhase: hocReplaceReducer('CURRENT_PHASE', {
        acceptableValues: [TRUMP_PHASE, BID_PHASE, SCORE_PHASE],
    }),
    currentTrump: hocReplaceReducer('CURRENT_TRUMP', {
        acceptableValues: suits.concat(''),
    }),
    currentBids,
    currentTricks,
    scores,
});
