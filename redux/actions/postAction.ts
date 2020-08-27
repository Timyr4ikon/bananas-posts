import * as types from "../types";
import axios from "axios";
import { Comment, Title, Body, Com, Comments } from '../../utils/interfaces'


export const getComments = (arr: Comment[]): Comments => ({
    type: types.GET_COMMENTS,
    payload: arr
})

export const changeNewPostTitleValue = (string: string): Title => ({
    type: types.NEW_POST_TITLE_CHANGE_VALUE,
    payload: string
})

export const changeNewPostBodyValue = (string: string): Body => ({
    type: types.NEW_POST_BODY_CHANGE_VALUE,
    payload: string
})

export const changeUserComment = (string: string): Com => ({
    type: types.POST_USER_COMMENT,
    payload: string
})


