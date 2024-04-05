import { createSlice } from '@reduxjs/toolkit';

export const NumberOfPlayersSlice = createSlice({
    name: 'numberOfPlayers',
    initialState: 0,
    reducers: {
        setNumberOfPlayers: (state, action) => action.payload,
    },
});

export const { setNumberOfPlayers } = NumberOfPlayersSlice.actions;
export default NumberOfPlayersSlice.reducer;
