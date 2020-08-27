import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import Error from "../404";
import Link from "next/link";
import { NextPageContext } from "next";
import { changeUserComment, getComments } from "../../redux/actions/postAction";
import { useDispatch, useSelector } from "react-redux";
import {
  IdBlock,
  IdGoBack,
  IdTitle,
  IdContent,
  IdCommentsTitle,
  IdCommentsList,
  IdItem,
  IdCommentBody,
  IdInput,
  IdSubmitBtn,
} from "../../utils/styled-components";
import { SomePost, Comment } from "../../utils/interfaces";

export default function Blog({ post }) {
  const dispatch = useDispatch();
  const { userComment, comments } = useSelector((state) => state.state);

  useEffect(() => {
    if (post) {
      dispatch(getComments(post.comments));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userComment.trim().length !== 0) {
      axios.post("https://simple-blog-api.crew.red/comments", {
        id: Date.now(),
        postId: post.id,
        body: userComment.trim(),
      });
      dispatch(
        getComments([
          ...comments,
          {
            id: Date.now(),
            body: userComment,
          },
        ])
      );

      dispatch(changeUserComment(""));
    } else {
      alert("Пустой коммент никто не увидит)))");
    }
  };

  const handleChange = (e) => {
    dispatch(changeUserComment(e.target.value));
  };
  return (
    <>
      <Head>
        <title>Bananas | Post</title>
      </Head>
      {post === null ? (
        <Error />
      ) : (
        <IdBlock>
          <Link href="/">
            <IdGoBack />
          </Link>
          <IdTitle>{post.title}</IdTitle>
          <IdContent>{post.body}</IdContent>

          <IdCommentsTitle>Comments : </IdCommentsTitle>
          <IdCommentsList>
            {comments.length > 0 ? (
              comments.map((el: Comment) => {
                return (
                  <IdItem key={el.id}>
                    <IdCommentBody>{el.body}</IdCommentBody>
                  </IdItem>
                );
              })
            ) : (
              <IdItem key={Date.now()}>
                Wow! You can write first comment!!!
              </IdItem>
            )}
          </IdCommentsList>

          <form onSubmit={handleSubmit}>
            <IdInput type="text" value={userComment} onChange={handleChange} />
            <IdSubmitBtn type="submit">Submit</IdSubmitBtn>
          </form>
        </IdBlock>
      )}
    </>
  );
}

Blog.getInitialProps = async ({ query }: NextPageContext) => {
  try {
    const response = await axios.get(
      `https://simple-blog-api.crew.red/posts/${query.id}?_embed=comments`
    );
    const post: SomePost = response.data;
    return {
      post,
    };
  } catch (err) {
    return {
      post: null,
    };
  }
};
