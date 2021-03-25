import React from "react";
import { MovieDetails } from "../../interfaces";

import { Container, LeftSide, RightSide, Info } from "./styles";

const Details: React.FC<{ movie: MovieDetails }> = ({ movie }) => {
  return (
    <Container>
      <LeftSide>
        <img src={movie.Poster}></img>
        <span>{movie.Title}</span>
        <span>{movie.Director}</span>
        <span>{movie.Genre}</span>
      </LeftSide>
      <RightSide>
        <span>{movie.Plot}</span>
        <Info>
          <h3>Rated</h3>
          <span>{movie.Rated}</span>
        </Info>
        <Info>
          <h3>Website</h3>
          <span>{movie.Website}</span>
        </Info>
        <Info>
          <h3>Genre</h3>
          <span>{movie.Genre}</span>
        </Info>
        <Info>
          <h3>Language</h3>
          <span>{movie.Language}</span>
        </Info>
        <Info>
          <h3>Year</h3>
          <span>{movie.Year}</span>
        </Info>
      </RightSide>
    </Container>
  );
};

export default Details;
