import Home from "../components/Home";
import MoviesContext from "../contextAPI/MoviesContext";
import Header from "../components/Header";

export default function WTF() {
  return (
    <MoviesContext>
      <Header />
      <div>
        <Home />
      </div>
    </MoviesContext>
  );
}
