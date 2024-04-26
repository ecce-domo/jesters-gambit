import test from 'ava';
import { suits } from '../constants.js';
import rounds from './rounds.js';

const tests = [
    {
        description: 'store first round',
        initialState: [],
        action: {
            type: 'COMMIT_ROUND_DATA',
            data: {
                trump: suits[1],
                bids: [0, 1, 0, 0],
                tricks: [0, 1, 0, 0],
            },
        },
        expectedState: [{
            trump: suits[1],
            bids: [0, 1, 0, 0],
            tricks: [0, 1, 0, 0],
        }],
    }, {
        description: 'store third round',
        initialState: [
            {
                trump: suits[1],
                bids: [0, 1, 0, 0],
                tricks: [0, 1, 0, 0],
            }, {
                trump: suits[0],
                bids: [0, 1, 1, 0],
                tricks: [0, 2, 0, 0],
            },
        ],
        action: {
            type: 'COMMIT_ROUND_DATA',
            data: {
                trump: suits[1],
                bids: [0, 2, 1, 0],
                tricks: [0, 1, 1, 1],
            },
        },
        expectedState: [
            {
                trump: suits[1],
                bids: [0, 1, 0, 0],
                tricks: [0, 1, 0, 0],
            }, {
                trump: suits[0],
                bids: [0, 1, 1, 0],
                tricks: [0, 2, 0, 0],
            }, {
                trump: suits[1],
                bids: [0, 2, 1, 0],
                tricks: [0, 1, 1, 1],
            },
        ],
    },
];

tests.map(({ description, initialState, action, expectedState }) => {
    test(description, t => t.deepEqual(rounds(initialState, action), expectedState));
});
