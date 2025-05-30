/**
 * skenario test
 *
 * - asyncAddThread thunk
 *  - should dispatch action correctly when create thread data success
 *  - should dispatch action and call alert correctly when create thread data failed
 */

import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncAddThread, addThreadActionCreator } from './action';

const fakeCreatedThreadResponse = [
  {
    id: 'thread-1',
    ownerId: 'user-1',
    title: 'Thread Test 1',
    category: 'Category Test 1',
    body: 'Ini adalah thread Test 1',
    createdAt: '2022-09-22T10:06:55.588Z',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];

const fakeCreateThreadInput = {
  title: 'Thread Test 1',
  body: 'Ini adalah thread Test 1',
  category: 'Category Test 1',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

// ... kode fake data

describe('asyncAddThread thunk', () => {
  beforeEach(() => {
    api._createThread = api.createThread;
  });

  afterEach(() => {
    api.createThread = api._createThread;

    delete api._createThread;
  });

  // ... backup and restore

  it('should dispatch action correctly when create thread data success', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.resolve(fakeCreatedThreadResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncAddThread(fakeCreateThreadInput)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator(fakeCreatedThreadResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when create thread data failed', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncAddThread(fakeCreateThreadInput)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
