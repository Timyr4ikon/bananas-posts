import axios from "axios";
import Head from "next/head";
import { Header } from "../components/header";
import Post from "../components/post-block";
import { List } from "../components/list";
import {PostsForPage,SomePost} from '../utils/interfaces'

export default function Home({ posts }: PostsForPage) {
  return (
    <>
      <Head>
        <title>Bananas</title>
      </Head>
      <Header />
      <List>
        {posts.map((post: SomePost) => (
          <Post key={post.id} {...post} />
        ))}
      </List>
    </>
  );
}

Home.getInitialProps = async () => {
  const response = await axios.get("https://simple-blog-api.crew.red/posts");
  const posts: PostsForPage = response.data;

  return {
    posts,
  };
};
