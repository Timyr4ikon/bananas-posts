import styled from "styled-components";
import Link from "next/link";
import { Section, Logo, UnderLogo, AddPost } from "../utils/styled-components";

export function Header() {
  return (
    <Section>
      <Logo>Bananas</Logo>
      <UnderLogo>...real bananas posts</UnderLogo>
      <Link href="/posts/new">
        <AddPost>Add new post</AddPost>
      </Link>
    </Section>
  );
}
