import React from "react";
import {
  ListItem,
  MoviePoster,
  MovieImage,
  MovieContent,
  MovieHeader,
} from "./MovieItem.styled";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../services/api";

const MovieItem = ({
  id,
  title,
  poster_path,
  overview,
  release_date,
  vote_average,
}) => {
  console.log(title);
  return (
    <ListItem>
      <MoviePoster>
        <Link to={`/movie/${id}`}>
          <MovieImage src={`${IMG_URL}${poster_path}`} />
        </Link>
      </MoviePoster>
      <MovieContent>
        <MovieHeader>{title}</MovieHeader>
      </MovieContent>
    </ListItem>
  );
};

export default MovieItem;
