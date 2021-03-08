import React,{useContext} from "react";
import Context from "../../contextAPI/setup";
import MoviesWrap from "../MoviesWrap";

// import { Container } from './styles';

const Home: React.FC = () => {
  const {
    doesDataExists,
    isFetching,
  } = useContext(Context);
  console.log(isFetching)
  return (
    <div>
      {isFetching && <span>Loading...</span>}
      {doesDataExists && <MoviesWrap />}
    </div>
  );
};

export default Home;
