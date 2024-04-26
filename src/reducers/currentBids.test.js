import test from 'ava';
import currentBids, { defaultState } from './currentBids.js';

test('adjust bids to more players', t => t.deepEqual(
    currentBids([0, 0, 0], { type: 'SET_NUMBER_OF_PLAYERS', data: 6 }),
    [0, 0, 0, 0, 0, 0]
))
test('increment bid', t => t.deepEqual(
    currentBids([0, 0, 0, 0], { type: 'INCREMENT_BID_AT_INDEX', data: { index: 1, cap: 1 }}),
    [0, 1, 0, 0]
));
test('increment bid with cap', t => t.deepEqual(
    currentBids([0, 1, 0, 0], { type: 'INCREMENT_BID_AT_INDEX', data: { index: 1, cap: 1 }}),
    [0, 1, 0, 0]
));
test('decrement bid', t => t.deepEqual(
    currentBids([0, 0, 1, 0], { type: 'DECREMENT_BID_AT_INDEX', data: { index: 2 }}),
    [0, 0, 0, 0]
));
test('decrement bid with cap', t => t.deepEqual(
    currentBids([0, 0, 0, 0], { type: 'DECREMENT_BID_AT_INDEX', data: { index: 2 }}),
    [0, 0, 0, 0]
));
test('currentBids default reducer', t => t.deepEqual(
    currentBids(defaultState, { action: 'DEFAULT', data: { index: 2 }}),
    defaultState
));
