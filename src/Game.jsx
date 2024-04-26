import React from 'react';
import { connect } from 'react-redux';
import { incrementBidAtIndex, decrementBidAtIndex } from './actions/bids';
import { incrementRound, setRound } from './actions/currentRound';
import { setTrump } from './actions/trump';
import { setPhaseToBid, setPhaseToScore, setPhaseToTrump } from './actions/phase';
import { incrementTrickAtIndex, decrementTrickAtIndex } from './actions/tricks';
import { commitRound } from './actions/rounds';
import { setPlayerQty } from './actions/numberOfPlayers';
// scaffold
import { setPlayerNames } from './actions/players';
import { setInitialDealer } from './actions/initialDealer';

import { suits, mapSuitToSymbol, TRUMP_PHASE, BID_PHASE, SCORE_PHASE, DEBUG } from './constants';

const Game = connect(
	({
		currentBids,
		currentPhase,
		currentRound,
		currentTrump,
		initialDealer,
		numberOfPlayers,
		players,
		rounds,
		currentTricks,
	}) => ({
		currentBids,
		currentPhase,
		currentRound,
		currentTrump,
		initialDealer,
		numberOfPlayers,
		players,
		rounds,
		currentTricks,
	}), ({
		// just for scaffold
		setPlayerNames,
		setInitialDealer,
		setRound,
		// end scaffold
		setPlayerQty,
		incrementBidAtIndex,
		decrementBidAtIndex,
		incrementRound,
		setTrump,
		setPhaseToBid,
		setPhaseToScore,
		setPhaseToTrump,
		incrementTrickAtIndex,
		decrementTrickAtIndex,
		commitRound,
	})
)(({
	currentBids,
	currentPhase,
	currentRound,
	currentTrump,
	initialDealer,
	numberOfPlayers,
	players,
	rounds,
	currentTricks,
	incrementBidAtIndex,
	decrementBidAtIndex,
	incrementRound,
	setTrump,
	setPhaseToBid,
	setPhaseToScore,
	setPhaseToTrump,
	// just for scaffold
	setPlayerNames,
	setInitialDealer,
	setRound,
	// end scaffold
	setPlayerQty,
	incrementTrickAtIndex,
	decrementTrickAtIndex,
	commitRound,
}) => {
	document.documentElement.style.setProperty(
		'--cell-width',
		`${Math.floor(1000/(2 + numberOfPlayers))/10}%`
	);

	const scaffold = () => {
		setPlayerQty(6);
		setPlayerNames(['first', 'second', 'third', 'fourth', 'fifth', 'last']);
		setInitialDealer(Math.floor(6 * Math.random()));
		setRound(1);
		setPhaseToTrump();
		setTrump(suits[Math.floor(4 * Math.random())]);
		setPhaseToBid();
		incrementBidAtIndex(0, 1);
		setPhaseToScore();
		incrementTrickAtIndex(1, 1);
	};

	const endRound = () => {
		// make sure the game isn't over
		if (currentRound === 60 / numberOfPlayers) {
			// TODO: handle game end
			return;
		}
		// commit round data
		// increment round
		// reset phase and trump
		// reset bids and tricks
		commitRound({ bids: currentBids, tricks: currentTricks, trump: currentTrump });
		incrementRound();
		setPhaseToTrump();
		setTrump('');
		setPlayerQty(numberOfPlayers);
	}

	return (
		<>
			<h1 className='wizard-blue'>Game</h1>
			<main>
				<div className='table'>
					{/* header row */}
					<div className='table-row'>
						<div>Round</div>
						{
							players.map((player, index) => (
								<div key={index}>{player}</div>
							))
						}
						<div>Trump</div>
					</div>
					{/* previous rounds */}
					{
						rounds.map((round, index) => (
							<div className='table-row' key={index}>
								<div>{index+1}</div>
								{
									round.bids.map((bid, index) => (
										<div key={index}>{bid} // {round.tricks[index]}</div>
									))
								}
								<div>{mapSuitToSymbol(round.trump)}</div>
							</div>
						))
					}
					{/* current round */}
					<div className='current-round table-row'>
						{/* round cell */}
						<div>
							{{
								[currentPhase]: () => '',
								[TRUMP_PHASE]: () => 'Set trump',
								[BID_PHASE]: () => (
									<>
										<span>Set bids</span>
										<br />
										<button onClick={() => {
											setPhaseToScore();
										}}>Done</button>
									</>
								),
								[SCORE_PHASE]: () => (
									<>
										Set scored tricks
										<button
											disabled={currentTricks.reduce((a, b) => a+b) !== currentRound}
											onClick={endRound}
										>Done</button>
									</>
								),
							}[currentPhase]()}
						</div>
						{/* current round player cells */}
						{{
							[currentPhase]: () => currentBids.map((_, index) => (<div key={index}>⏳</div>)),
							[BID_PHASE]: () => currentBids.map((bid, index) => (
								<div className='current-cell' key={index}>
									<span className='nudge pointer' onClick={() => decrementBidAtIndex(index)}>➖</span>
									<span>{bid}</span>
									<span className='nudge pointer' onClick={() => incrementBidAtIndex(index, currentRound)}>➕</span>
								</div>
							)),
							[SCORE_PHASE]: () => currentTricks.map((trick, index) => (
								<div className='current-cell' key={index}>
									<div>
										Bid: {currentBids[index]}
									</div>
									<div>
										<span className='nudge pointer' onClick={() => decrementTrickAtIndex(index)}>➖</span>
										<span>{trick}</span>
										<span className='nudge pointer' onClick={() => incrementTrickAtIndex(index, currentRound)}>➕</span>
									</div>
								</div>
							)),
						}[currentPhase]()}
						{/* trump cell */}
						<div>
							{{
								[currentPhase]: () => '',
								[TRUMP_PHASE]: () => suits.map((suit) => (
									<span key={suit} className='pointer trump' onClick={() => {
										setTrump(suit);
										setPhaseToBid();
									}}>{mapSuitToSymbol(suit)}</span>
								)),
								[BID_PHASE]: () => (<span className='pointer trump' onClick={() => setPhaseToTrump()}>{mapSuitToSymbol(currentTrump)}</span>),
								[SCORE_PHASE]: () => (<span className='trump'>{mapSuitToSymbol(currentTrump)}</span>),
							}[currentPhase]()}
						</div>
					</div>
					{/* scores */}
					<div className='table-row'>
						<div>Scores</div>
						{
							players.map((player, index) => (
								<div key={index}>0</div>
							))
						}
						<div></div>
					</div>
				</div>
			</main>
			{ DEBUG ? (<button className='top-right' onClick={scaffold}>Scaffold</button>) : '' }
		</>
	);
});

export default Game;
