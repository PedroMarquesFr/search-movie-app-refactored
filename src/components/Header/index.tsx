import React, { useState, useContext, useEffect } from "react";
import Context from "../../contextAPI/setup";

import { Head, Sec } from "./styles";
let timer: any = null;
const Header: React.FC = () => {
  const { handleFetchByQuery } = useContext(Context);

  const [movie, setMovie] = useState("");

  useEffect(() => {
    timer = setTimeout(() => {
      handleFetchByQuery(movie);
    }, 500);
  }, [movie]);

  const stopTimer = () => {
    if (timer !== null) {
      console.log("cancelou");
      clearTimeout(timer);
    }
  };
  const handleDelay = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("entrou");
    stopTimer();
    setMovie(e.target.value);
  };
  return (
    <Head>
      <Sec>
        <input placeholder="Busque por um filme" onChange={handleDelay} />
      </Sec>
    </Head>
  );
};

export default Header;
