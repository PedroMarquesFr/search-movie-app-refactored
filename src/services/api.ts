import axios from "axios";
import { MovieDetails } from "../interfaces";
import key from "./key";

export async function searchByQuery(movie: string) {
  return axios
    .get(`http://www.omdbapi.com/?s=${movie}&apikey=${key}`)
    .then((r) => {
      console.log(r);
      return r.data;
    });
}

export async function filmDetails(
  id: string | string[]
): Promise<MovieDetails> {
  return axios
    .get(`https://www.omdbapi.com/?i=${id}&apikey=${key}`)
    .then((r) => r.data)
    .catch((deupau) => deupau);
}

export async function searchRandom() {
  return axios.get(``).then((r) => {
    console.log(r.status);
    return r.request.response;
  });
}

async function getActorImageByName(ActorName: string): Promise<string> {
  return axios
    .get(`https://images-web-scrapper-1212.herokuapp.com/${ActorName}`)
    .then((r) => r.data.resp)
    .catch((deupau) => deupau);
}

export async function getActorsLinks(ActorsName: string[]): Promise<string[]> {
  const allLinks = [];
  for (let i = 0; i < ActorsName.length; i++) {
    const links = await getActorImageByName(ActorsName[i]);
    allLinks.push(links[1]);
  }

  return allLinks;
}
