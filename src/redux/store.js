import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './playerSlice';
import numberOfPlayersReducer from './numberOfPlayersSlice';

export default configureStore({
    reducer: {
        players: playerReducer,
        numberOfPlayers: numberOfPlayersReducer,
    }
});
