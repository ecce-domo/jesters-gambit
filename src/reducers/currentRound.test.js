import test from 'ava';
import currentRound from './currentRound.js';

test('increment current round', t => t.deepEqual(currentRound(1, {type: 'INCREMENT_ROUND'}), 2));
test('set round to current round', t => t.deepEqual(currentRound(1, {type: 'SET_ROUND', data: 1}), 1));
test('currentRound default reducer', t => t.deepEqual(currentRound(1, {type: 'DEFAULT', data: 2}), 1));
