import { combineReducers } from "redux";
import * as types from "../types";
import { State, TodoActionsInterfaces } from '../../utils/interfaces'

const initialState: State = {
  postInputValueTitle: "",
  postInputValueBody: "",
  userComment: "",
  comments: [],
};

const postReducer = (state = initialState, action: TodoActionsInterfaces) => {
  switch (action.type) {
    case types.NEW_POST_TITLE_CHANGE_VALUE:
      return {
        ...state,
        postInputValueTitle: action.payload,
      };
    case types.NEW_POST_BODY_CHANGE_VALUE:
      return {
        ...state,
        postInputValueBody: action.payload,
      };
    case types.POST_USER_COMMENT:
      return {
        ...state,
        userComment: action.payload,
      };
    case types.GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  state: postReducer,
});
