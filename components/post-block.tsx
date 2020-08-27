import Link from "next/link";
import { SomePost } from "../utils/interfaces";
import { Li, H3, Content } from "../utils/styled-components";

export default function Post({ title, id, body }: SomePost) {
  return (
    <Li>
      <Link href={`/posts/[id]`} as={`/posts/${id}`}>
        <a>
          <img alt="banan" src="/banana_18039.png" />
          <H3>{title}</H3>
          <Content>{body}</Content>
        </a>
      </Link>
    </Li>
  );
}
