import Home from "../components/Home";
import MoviesContext from "../contextAPI/MoviesContext";
import Header from "../components/Header";
import Head from "../components/Head";

export default function WTF() {
  return (
    <MoviesContext>
      <Head title="Home - PopSearch"/>
      <Header />
      <div>
        <Home />
      </div>
    </MoviesContext>
  );
}
