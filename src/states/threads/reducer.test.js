/**
 * test scenario for threadReducer
 *
 * - threadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with the new thread when given by ADD_THREAD action
 */

import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            ownerId: 'user-1',
            title: 'Thread Test 1',
            category: 'Category Test 1',
            body: 'Ini adalah thread pertama',
            createdAt: '2022-09-22T10:06:55.588Z',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
          {
            id: 'thread-2',
            ownerId: 'user-2',
            title: 'Thread Test 2',
            category: 'Category Test 2',
            body: 'Ini adalah thread kedua',
            createdAt: '2022-09-22T10:06:55.588Z',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        ownerId: 'user-1',
        title: 'Thread Test 1',
        category: 'Category Test 1',
        body: 'Ini adalah thread pertama',
        createdAt: '2022-09-22T10:06:55.588Z',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          ownerId: 'user-2',
          title: 'Thread Test 2',
          category: 'Category Test 2',
          body: 'Ini adalah thread kedua',
          createdAt: '2023-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });
});
