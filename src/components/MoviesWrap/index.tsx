import React, { useContext } from "react";
import Context from "../../contextAPI/setup";
import Movie from "./MovieContainer";


import { Container, Decorator } from "./styles";

const MoviesWrap: React.FC = () => {
  const { movieArray, term } = useContext(Context);

  return (
    <Container>
      <Decorator>{term}</Decorator>
      {movieArray.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </Container>
  );
};

export default MoviesWrap;
