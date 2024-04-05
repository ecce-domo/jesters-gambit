import { combineReducers } from 'redux';
import players from './players';
import numberOfPlayers from './numberOfPlayers';

export default combineReducers({
    players,
    numberOfPlayers,
});
