import styled from "styled-components";

export const Head = styled.header`
  display: flex;
  align-items:center;
  justify-content:center;
  color:white;
  background-color: #2b2b40;

  padding:3rem 2rem;

  position:relative;
`;

export const Sec = styled.section`
  position:absolute;
  top:4.8rem;

  border-radius:30px;

  display:flex;
  justify-content:space-between;

  > input{
    width:30rem;
    padding:.7rem 1rem;
    border:1px solid #d8d8d8;
    font-size:1.3rem;
  }
`;
