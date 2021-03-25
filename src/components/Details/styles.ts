import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  margin: 0 20vw;
  height: auto;
`;

export const LeftSide = styled.aside`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  width: 15vw;
  margin-right: 2rem;

  padding: 1.3rem;

  border-radius: 20px;
  & > img {
    border-radius: 20px;
  }
  & > span {
    font-size: 2rem;
  }
`;

export const RightSide = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20rem;
  border-radius:2rem;
`;

export const Info = styled.article`
  display: flex;
  justify-content: space-between;
  padding:1.4rem;
  border-bottom:1px solid grey;

`;
