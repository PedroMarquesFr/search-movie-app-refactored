import React, { useState, useEffect } from "react";
import { MovieDetails } from "../../interfaces";
import { getActorsLinks } from "../../services/api";
import Header from "../Header";
import Load from "../Load";
import styles from "./details.module.css";

import { Container, LeftSide, RightSide, Info } from "./styles";

const Details: React.FC<{ movie: MovieDetails }> = ({ movie }) => {
  const resp = movie.Ratings.find(({ Source }) => Source === "Metacritic");
  let rate = "0";
  if (resp) {
    rate = resp.Value.split("/")[0];
  }
  const [images, setImages] = useState([]);
  const handleImagesRequest = async () => {
    const resp = await getActorsLinks(movie.Actors.split(","));
    setImages(resp);
  };
  useEffect(() => {
    handleImagesRequest();
  }, []);
  return (
    <div>
      <Header />
      <div className={styles.Container}>
        <div className={styles.LeftSide}>
          <img src={movie.Poster}></img>
          <h1>{movie.Title}</h1>
          <section>
            <span>Director: </span>
            <span style={{ color: "#7FA6C2" }}>{movie.Director}</span>
          </section>
          <span>{movie.Genre}</span>
        </div>
        <div className={styles.RightSide}>
          <h1 className={styles.Title}>Sinopse</h1>
          <span>{movie.Plot}</span>
          <article className={styles.Info}>
            <h3>Rated</h3>
            <span>{movie.Rated}</span>
          </article>
          <article className={styles.Info}>
            <h3>Website</h3>
            <span>{movie.Website}</span>
          </article>
          <article className={styles.Info}>
            <h3>Genre</h3>
            <span>{movie.Genre}</span>
          </article>
          <article className={styles.Info}>
            <h3>Language</h3>
            <span>{movie.Language}</span>
          </article>
          <article className={styles.Info}>
            <h3>Year</h3>
            <span>{movie.Year}</span>
          </article>
          <section className={styles.GridActorsRate}>
            <aside className={styles.Aside}>
              <h1 className={styles.Title}>Actors</h1>
              <div className={styles.ActorSection}>
                {images.length === 0 ? (
                  <Load />
                ) : (
                  images.map((link, index) => (
                    <div className={styles.ActorWrapper} key={index}>
                      <img className={styles.ActorImg} src={link} alt="actor" />
                      <span>{movie.Actors.split(",")[index]}</span>
                    </div>
                  ))
                )}
              </div>
            </aside>
            <aside>
              <h1 className={styles.Title}>Metacritics</h1>
              <div>
                <div className={styles.RateBar}>
                  {console.log(rate)}
                  {resp ? (
                    <div>
                      <div
                        className={styles.Rate}
                        style={{
                          width: `${parseInt(rate) * 2}px`,
                        }}
                      />
                      <span className={styles.RateInfo}>{rate}%</span>
                    </div>
                  ) : (
                    <span className={styles.RateInfo}>No Rate</span>
                  )}
                </div>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Details;
