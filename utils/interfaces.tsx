import * as types from "../redux/types";

export interface PostsForPage {
  posts: SomePost[];
};

export interface SomePost {
  id: number | string;
  body: string;
  title: string;
};

export interface Comment {
  id: number | string;
  postId: number;
  body: string;
};

export interface State {
  postInputValueTitle: string;
  postInputValueBody: string;
  userComment: string;
  comments: Comment[];
};

export interface Title {
  type: typeof types.NEW_POST_TITLE_CHANGE_VALUE;
  payload: string;
};

export interface Body {
  type: typeof types.NEW_POST_BODY_CHANGE_VALUE;
  payload: string;
};
export interface Com {
  type: typeof types.POST_USER_COMMENT;
  payload: string;
};

export interface Comments {
  type: typeof types.GET_COMMENTS;
  payload: Comment[];
};

export type TodoActionsInterfaces = Comments | Title | Body | Com;
