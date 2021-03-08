import Home from "../components/Home";
import GlobalStyle from "../styles/global";
import MoviesContext from "../contextAPI/MoviesContext";
import Header from "../components/Header";

export default function WTF() {
  return (
    <MoviesContext>
      <GlobalStyle />
      <Header />
      <div>
        <Home />
      </div>
    </MoviesContext>
  );
}
