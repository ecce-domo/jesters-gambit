import test from 'ava';
import currentTricks, { defaultState } from './currentTricks.js';

test('adjust tricks to more players', t => t.deepEqual(
    currentTricks([0, 0, 0], { type: 'SET_NUMBER_OF_PLAYERS', data: 6 }),
    [0, 0, 0, 0, 0, 0]
))
test('incrementing round resets tricks', t => t.deepEqual(
    currentTricks([0, 0, 0, 1], { type: 'INCREMENT_ROUND' }),
    [0, 0, 0, 0]
))
test('increment trick', t => t.deepEqual(
    currentTricks([0, 0, 0, 0], { type: 'INCREMENT_TRICK_AT_INDEX', data: { index: 1, cap: 1 }}),
    [0, 1, 0, 0]
));
test('increment trick with cap', t => t.deepEqual(
    currentTricks([0, 1, 0, 0], { type: 'INCREMENT_TRICK_AT_INDEX', data: { index: 2, cap: 1 }}),
    [0, 1, 0, 0]
));
test('decrement trick', t => t.deepEqual(
    currentTricks([0, 0, 1, 0], { type: 'DECREMENT_TRICK_AT_INDEX', data: { index: 2 }}),
    [0, 0, 0, 0]
));
test('decrement trick with cap', t => t.deepEqual(
    currentTricks([0, 0, 0, 0], { type: 'DECREMENT_TRICK_AT_INDEX', data: { index: 2 }}),
    [0, 0, 0, 0]
));
test('currentTricks default reducer', t => t.deepEqual(
    currentTricks(defaultState, { action: 'DEFAULT', data: { index: 2 }}),
    defaultState
));
