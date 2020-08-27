import styled from "styled-components";
export const E404: any = styled.a`
  cursor: pointer;
  display: block;
  margin: 0 auto;
  margin-top: 30vh;
  width: fit-content;
  color: yellow;
  font-size: 12em;
  font-weight: bold;
  font-family: Helvetica;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
`;
export const Title: any = styled.h2`
  font-size: 40px;
  display: block;
  font-weight: 500;
  padding-bottom: 5px;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(to right, orange, fuchsia);
  text-align: center;
  padding-top: 10px;
  padding-bottom: 30px;
`;

export const Input: any = styled.input`
  display: block;
  width: 100%;
  min-height: 50px;
  padding: 0 5px;
  border-radius: 5px;
  border: 3px solid purple;
  color: blue;
  margin-bottom: 20px;
`;

export const Label: any = styled.label`
  display: block;
  width: 70%;
  margin: 0 auto;
`;

export const SubmitBtn: any = styled.button`
  font-weight: 700;
  color: white;
  cursor: pointer;
  text-decoration: none;
  padding: 0.8em 1em calc(0.8em + 3px);
  border-radius: 3px;
  background: rgb(64, 199, 129);
  box-shadow: 0 -3px rgb(53, 167, 110) inset;
  transition: 0.2s;
  text-transform: uppercase;
  border: none;
  display: block;
  margin: 0 auto;
  &:hover {
    background: rgb(53, 167, 110);
  }
`;

export const GoBack: any = styled.a`
  width: 30px;
  height: 30px;
  display: block;
  background: url("/arrow-left.svg");
  background-position: center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: rgb(231, 231, 231);
  }
`;

export const Block: any = styled.div`
  padding: 20px;
`;

export const IdTitle: any = styled.h3`
  font-size: 40px;
  display: block;
  font-weight: 500;
  padding-bottom: 5px;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(to right, orange, fuchsia);
  text-align: center;
  padding-top: 10px;
  padding-bottom: 30px;
`;

export const IdContent: any = styled.p`
  font-size: 20px;
  display: block;
  text-align: center;
`;

export const IdBlock: any = styled.div`
  padding: 20px;
`;

export const IdCommentsTitle: any = styled.span`
  display: block;
  font-weight: 500;
  color: purple;
  text-transform: uppercase;
  margin: 15px 0;
`;

export const IdCommentsList: any = styled.ul`
  padding: 10px;
`;

export const IdItem: any = styled.li`
  background-color: #f8f8f8;
  padding: 10px 5px;
  margin: 10px 0;
`;

export const IdInput: any = styled.input`
  display: block;
  width: 60%;
  margin: 10px auto;
  min-height: 50px;
  padding: 0 5px;
  border-radius: 5px;
  border: 3px solid purple;
  color: blue;
`;

export const IdSubmitBtn: any = styled.button`
  font-weight: 700;
  color: white;
  cursor: pointer;
  text-decoration: none;
  padding: 0.8em 1em calc(0.8em + 3px);
  border-radius: 3px;
  background: rgb(64, 199, 129);
  box-shadow: 0 -3px rgb(53, 167, 110) inset;
  transition: 0.2s;
  text-transform: uppercase;
  border: none;
  display: block;
  margin: 0 auto;
  &:hover {
    background: rgb(53, 167, 110);
  }
`;

export const IdGoBack: any = styled.a`
  width: 30px;
  height: 30px;
  display: block;
  background: url("/arrow-left.svg");
  background-position: center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: rgb(231, 231, 231);
  }
`;

export const IdCommentBody: any = styled.p`
  word-break: break-word;
`;

export const Ul: any = styled.ul`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  justify-content: space-around;
`;

export const Li: any = styled.li`
  width: 256px;
  padding: 20px;
  cursor: pointer;
  &:hover {
    background-color: yellow;
    transform: translate(-3%, 3%);
  }
`;

export const H3: any = styled.h3`
  font-weight: 500;
  padding-bottom: 5px;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(to right, orange, fuchsia);
`;

export const Content: any = styled.p`
  color: #333333;
`;
export const Section: any = styled.header`
  height: 280px;
  width: 100%;
  background: linear-gradient(
      45deg,
      #292929 25%,
      transparent 25%,
      transparent 75%,
      #292929 75%
    ),
    linear-gradient(
        45deg,
        #292929 25%,
        transparent 25%,
        transparent 75%,
        #292929 75%
      )
      0.1875em 0.1875em,
    radial-gradient(at 50% 0, #484847, #090909);
  background-size: 0.375em 0.375em, 0.375em 0.375em, 100% 100%;
`;

export const Logo: any = styled.h1`
  font-size: 50px;
  cursor: pointer;
  text-transform: uppercase;
  background: repeating-linear-gradient(
    white,
    white 2px,
    yellow 2px,
    yellow 3px
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: table;
  margin: auto;
  font-weight: 700;
  padding-bottom: 10px;
  padding-top: 95px;
  &:before {
    content: " 🍌";
    height: 50px;
  }
`;

export const UnderLogo: any = styled.p`
  color: rgb(251, 255, 0);
  text-align: center;
  padding-left: 140px;
`;

export const AddPost: any = styled.a`
  display: block;
  background: none;
  width: 100px;
  border: 3px solid;
  font: inherit;
  line-height: 1;
  margin: 20px auto;
  text-align: center;
  cursor: pointer;
  padding: 1em 2em;
  color: #ffa260;
  border-radius: 10px;
  transition: 0.25s;
  &:hover,
  &:focus {
    border-color: #ffa260;
    color: #fff;
    box-shadow: 0 1em 1em -0em #ffa260;
    transform: translateY(-0.25em);
  }
`;
