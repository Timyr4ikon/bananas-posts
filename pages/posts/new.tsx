import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  changeNewPostTitleValue,
  changeNewPostBodyValue,
} from "../../redux/actions/postAction";
import {
  Block,
  Title,
  GoBack,
  Input,
  Label,
  SubmitBtn,
} from "../../utils/styled-components";

export default function New() {
  const dispatch = useDispatch();

  const { postInputValueTitle } = useSelector((state) => state.state);
  const { postInputValueBody } = useSelector((state) => state.state);

  const handleChange = (e): void => {
    if (e.target.name === "title") {
      dispatch(changeNewPostTitleValue(e.target.value));
    } else {
      dispatch(changeNewPostBodyValue(e.target.value));
    }
  };

  const handleSubmit = (e): void => {
    e.preventDefault();
    if (
      postInputValueTitle.trim().length > 0 &&
      postInputValueBody.trim().length > 0
    ) {
      axios.post("https://simple-blog-api.crew.red/posts", {
        title: postInputValueTitle,
        body: postInputValueBody,
      });
      dispatch(changeNewPostTitleValue(""));
      dispatch(changeNewPostBodyValue(""));
      alert("Пост успешно добавлен!!!");
    } else {
      dispatch(changeNewPostTitleValue(""));
      dispatch(changeNewPostBodyValue(""));
      alert("Юный хацкер)");
    }
  };

  return (
    <>
      <Head>
        <title>Bananas | NewPost</title>
      </Head>
      <Block>
        <Link href="/">
          <GoBack />
        </Link>
        <Title>WOW, you can add new BANANAS post</Title>
        <form onSubmit={handleSubmit}>
          <Label>
            Title
            <Input
              type="text"
              name="title"
              value={postInputValueTitle}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            Body
            <Input
              type="text"
              name="body"
              value={postInputValueBody}
              onChange={handleChange}
              required
            />
          </Label>
          <SubmitBtn type="submit">Add Post</SubmitBtn>
        </form>
      </Block>
    </>
  );
}
