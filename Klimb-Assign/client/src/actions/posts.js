import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
  } catch (error) {
    console.log(error.message);
  }
};
