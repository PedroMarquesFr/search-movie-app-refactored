import { createContext } from "react";
import { Movie } from "../interfaces";

const Context = createContext<{
  movieArray: Movie[];
  doesDataExists: boolean;
  isFetching: boolean;
  handleFetchByQuery: (term: string) => Promise<void> | any;
  term:string;
}>({
  movieArray: [],
  doesDataExists: false,
  isFetching: false,
  handleFetchByQuery() {},
  term:""
});

export default Context;
