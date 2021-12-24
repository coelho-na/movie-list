export const API_KEY = "api_key=a456eb0f95001dc855302b8e1759277e";
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_URL =
  BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

export const IMG_URL = "https://image.tmdb.org/t/p/w200";
export const searchURL = `${BASE_URL}/search/movie?${API_KEY}&query=`;
