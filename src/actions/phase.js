import { TRUMP_PHASE, BID_PHASE, SCORE_PHASE } from "../constants";

export const setPhase = data => ({
    type: 'SET_CURRENT_PHASE',
    data,
});

export const setPhaseToBid = () => setPhase(BID_PHASE);
export const setPhaseToTrump = () => setPhase(TRUMP_PHASE);
export const setPhaseToScore = () => setPhase(SCORE_PHASE);
