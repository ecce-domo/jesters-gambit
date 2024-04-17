export const TRUMP_PHASE = 'trump';
export const BID_PHASE = 'bid';
export const SCORE_PHASE = 'score';

export const DEBUG = true;

export const suits = ['spades', 'hearts', 'clubs', 'diamonds'];

export const mapSuitToSymbol = suit => ({
	[suit]: '‽',
	'spades': '♠️',
	'hearts': '♥️',
	'clubs': '♣️',
	'diamonds': '♦️',
}[suit]);
