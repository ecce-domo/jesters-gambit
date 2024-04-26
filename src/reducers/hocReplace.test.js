import test from 'ava';
import hocReplaceReducer from './hocReplace.js';

const testReducer = hocReplaceReducer('TEST', { initialState: 'test' });
const limitedTestReducer = hocReplaceReducer('LIMITED_TEST', {
    initialState: 'test',
    acceptableValues: [1, 2, 3],
});

test('hocReplace SET', t => t.deepEqual(
    testReducer('test', { type: 'SET_TEST', data: 1 }),
    1
));
test('hocReplace SET null', t => t.deepEqual(
    testReducer('test', { type: 'SET_TEST', data: null }),
    'test'
));
test('hocReplace SET undefined', t => t.deepEqual(
    testReducer('test', { type: 'SET_TEST', data: undefined }),
    'test'
));
test('hocReplace TOGGLE_SET set', t => t.deepEqual(
    testReducer('test', { type: 'TOGGLE_SET_TEST', data: 1 }),
    1
));
test('hocReplace TOGGLE_SET toggle', t => t.deepEqual(
    testReducer(1, { type: 'TOGGLE_SET_TEST', data: 1 }),
    'test'
));
test('hocReplace RESET', t => t.deepEqual(
    testReducer(1, { type: 'RESET_TEST' }),
    'test'
));
test('hocReplace default reducer', t => t.deepEqual(
    testReducer(1, { type: 'DEFAULT', data: 2 }),
    1
));

test('hocReplace SET acceptable value', t => t.deepEqual(
    limitedTestReducer('', { type: 'SET_LIMITED_TEST', data: 1 }),
    1
));
test('hocReplace SET unacceptable value', t => t.deepEqual(
    limitedTestReducer('', { type: 'SET_LIMITED_TEST', data: 4 }),
    ''
));
test('hocReplace TOGGLE_SET acceptable value', t => t.deepEqual(
    limitedTestReducer(2, { type: 'TOGGLE_SET_LIMITED_TEST', data: 2 }),
    'test'
));
test('hocReplace TOGGLE_SET unacceptable value', t => t.deepEqual(
    limitedTestReducer(1, { type: 'TOGGLE_SET_LIMITED_TEST', data: 4 }),
    1
));
test('hocReplace RESET unacceptable value', t => t.deepEqual(
    limitedTestReducer('', { type: 'RESET_LIMITED_TEST', data: 4 }),
    'test'
));
