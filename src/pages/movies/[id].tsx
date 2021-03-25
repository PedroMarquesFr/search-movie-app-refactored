import React from "react";
import { GetServerSideProps } from "next";
import { MovieDetails } from "../../interfaces";
import { filmDetails } from "../../services/api";
import Details from "../../components/Details";

// import { Container } from './styles';

const Detailss: React.FC<{ movie: MovieDetails }> = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <Details movie={movie} />
    </div>
  );
};

export default Detailss;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  const { id } = context.query;
  const obj = await filmDetails(id);
  console.log(obj);
  console.log(id);
  return {
    props: { movie: obj },
  };
};
