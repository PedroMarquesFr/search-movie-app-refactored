import Link from "next/link";
import React from "react";
import { Movie } from "../../../interfaces";

import {
  Container,
  Banner,
  Info,
  Title as TitleInfo,
  OtherInfos,
} from "./styles";

const MovieContainer: React.FC<{ movie: Movie }> = ({
  movie: { Poster, Title, Type, Year, imdbID },
}) => {
  return (
    <Link href="/movies/[id]" as={`/movies/${imdbID}`}>
      <Container>
        <Banner src={Poster} alt="Poster" />
        <Info>
          <OtherInfos>{Type.toUpperCase()}</OtherInfos>
          <TitleInfo>{Title}</TitleInfo>
          <OtherInfos>{Year}</OtherInfos>
        </Info>
      </Container>
    </Link>
  );
};

export default MovieContainer;
