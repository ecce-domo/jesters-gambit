import { combineReducers } from 'redux';
import hocReplaceReducer from './hocReplace';
import players from './players';
import numberOfPlayers from './numberOfPlayers';
import currentBids from './currentBids';
import initialDealer from './initialDealer';
import currentRound from './currentRound';
import scores from './scores';
import currentTrump from './currentTrump';
import currentTricks from './currentTricks';

export default combineReducers({
    players, // TODO: hoc - maybe?
    numberOfPlayers, // TODO: hoc
    currentBids,
    initialDealer, // TODO: hoc
    currentRound,
    scores,
    currentTrump, // TODO: hoc
    currentPhase: hocReplaceReducer('CURRENT_PHASE'), // trump - bid - score
    currentTricks,
});
