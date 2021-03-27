import React, { useState } from "react";
import Context from "./setup";
import { searchByQuery } from "../services/api";
import { DataResponse, Movie } from "../interfaces";
import { useRouter } from "next/router";

const MoviesContext: React.FC = ({ children }) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [movieArray, setMovieArray] = useState<Movie[]>([]);
  const [doesDataExists, setdoesDataExists] = useState<boolean>(false);
  const [term, setTerm] = useState<string>("");

  const router = useRouter();

  const handleFetchByQuery = async (term: string) => {
    setTerm(term);router.push("/");
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
