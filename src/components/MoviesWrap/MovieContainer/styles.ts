import styled from "styled-components";
import { MdMovie } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import {IoLogoGameControllerB} from "react-icons/io"

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

  background-color: white;

  position:relative;
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  align-items: space-between;
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
  font-size: 1.9rem;
  color: #3a3a3a;
`;

export const OtherInfos = styled(Title)`
  font-weight: 600;
  font-size: 1.3rem;
  color: #999999;
`;

export const MovieIcon = styled(MdMovie)`
  position: absolute;
  width: 26px;
  height: 26px;
  color: #3a3a3a;

  top:.5rem;
  left:11.84rem;
`;

export const SerieIcon = styled(RiMovie2Fill)`
  position: absolute;
  width: 26px;
  height: 26px;
  color: #3a3a3a;

  top:.5rem;
  left:11.84rem;
`;

export const GameIcon = styled(IoLogoGameControllerB)`
  position: absolute;
  width: 26px;
  height: 26px;
  color: #3a3a3a;

  top:.5rem;
  left:11.84rem;
`;