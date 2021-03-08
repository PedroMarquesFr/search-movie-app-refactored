import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 3.4rem;
`;

export const Decorator = styled.span`
  position: absolute;
  top: .2rem;
  left: .2rem;

  font-size: 30rem;
  font-weight:800;

  z-index:-10;
  opacity:.1;
`;
