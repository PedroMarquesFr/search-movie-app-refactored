import React from "react";
import NextHead from "next/head";

// import { Container } from './styles';

const Head: React.FC<{ title: string }> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
};

export default Head;
