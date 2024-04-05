import { createSlice } from "@reduxjs/toolkit";

export const PlayerSlice = createSlice({
    name: 'players',
    initialState: [],
    reducers: {
        setPlayerNames: (state, action) => action.data,
    },
});

export const { setPlayerNames } = PlayerSlice.actions;
export default PlayerSlice.reducer;