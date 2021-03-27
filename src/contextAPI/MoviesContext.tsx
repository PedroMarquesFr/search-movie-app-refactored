import React, { useState } from "react";
import Context from "./setup";
import { searchByQuery } from "../services/api";
import { DataResponse, Movie } from "../interfaces";

const MoviesContext: React.FC = ({ children }) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [movieArray, setMovieArray] = useState<Movie[]>([]);
  const [doesDataExists, setdoesDataExists] = useState<boolean>(false);
  const [term, setTerm] = useState<string>("");

  const handleFetchByQuery = async (term: string) => {
    setTerm(term);
    setIsFetching(true);
    const resp: DataResponse = await searchByQuery(term);
    setIsFetching(false);
    
    if (!resp.Search) {
      return setdoesDataExists(false);
    }
    setMovieArray(resp.Search);
    setdoesDataExists(true);
  };

  const contextData = {
    handleFetchByQuery,
    movieArray,
    isFetching,
    doesDataExists,
    term,
  };
  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};

export default MoviesContext;
