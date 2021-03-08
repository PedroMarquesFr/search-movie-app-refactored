import Link from "next/link";
import React from "react";
import { Movie } from "../../../interfaces";

import { Container,Banner, Info } from './styles';

const MovieContainer: React.FC<{ movie: Movie }> = ({
  movie: { Poster, Title, Type, Year, imdbID },
}) => {
  return (
    <Link href="/movies/[id]" as={`/movies/${imdbID}`}>
      <Container>
        <Banner src={Poster} alt="Poster" />
        <Info>{Title}</Info>
        <Info>{Type}</Info>
        <Info>{Year}</Info>
      </Container>
    </Link>
  );
};

export default MovieContainer;
