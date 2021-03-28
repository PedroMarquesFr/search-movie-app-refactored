import React, { useState, useContext, useEffect } from "react";
import Context from "../../contextAPI/setup";
import Logo from "./PopSearch.svg";
import styles from "./header.module.css";
import { useRouter } from "next/router";

// import { Head, Sec } from "./styles";
let timer: any = null;
const Header: React.FC = () => {
  const { handleFetchByQuery } = useContext(Context);
  const router = useRouter();

  const [movie, setMovie] = useState("");

  useEffect(() => {
    console.log("fui chamado")
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
    <header className={styles.Head}>
      <Logo/>
      <section className={styles.Sec}>
        <input onClick={()=>router.push("/")} placeholder="Busque por um filmes, jogos e series" onChange={handleDelay} />
      </section>
    </header>
  );  
};

export default Header;
