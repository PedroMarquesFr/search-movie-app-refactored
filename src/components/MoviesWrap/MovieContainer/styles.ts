import styled from "styled-components";

export const Container = styled.div`
  transition: 0.4s;
  :hover {
  }
  height: 13rem;
  width: 28rem;

  display: flex;
  align-items: center;

  overflow: hidden;
  border-radius: 0.8rem;

  margin: 1.7rem;

  -webkit-box-shadow: 0px 0px 30px 0px rgba(50, 50, 50, 0.18);
  -moz-box-shadow: 0px 0px 30px 0px rgba(50, 50, 50, 0.18);
  box-shadow: 0px 0px 30px 0px rgba(50, 50, 50, 0.18);
`;

export const Info = styled.section`
  display: flex;
  flex-direction:column;
  align-items:space-between;
  padding-left: 1rem;
`;

export const Banner = styled.img`
  float: left;
  width: 11rem;
  height: 18rem;
  object-fit: cover;
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 2.1rem;
  color:#3a3a3a;
`;

export const OtherInfos = styled(Title)`
  font-weight: 600;
  font-size: 1.3rem;
  color:#999999;
`;
