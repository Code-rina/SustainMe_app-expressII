import { csrfFetch } from "./csrf";

//action
const ADD_COMMENT = "comments/ADD_COMMENT";

//action creator
const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment,
  };
};

//thunk
export const createComment = (payload) => async (dispatch) => {
  const { userId, content } = payload;
  console.log("userId and content for comments", userId, content);
  const response = await csrfFetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, content }),
  });

  if (!response.ok) throw response;

  const { comment } = await response.json();
  dispatch(addComment(comment));
  return comment;
};

const commentsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case ADD_COMMENT:
      newState = { ...state };
      newState[action.comment.id] = action.comment;
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
