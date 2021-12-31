import React from "react";
import {
  ListItem,
  MoviePoster,
  MovieImage,
  MovieContent,
  MovieHeader,
  MovieTitle,
  VoteAverageContainer,
  VoteAverageValue,
  DateRelease,
  MovieOverview,
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
  return (
    <ListItem>
      <MoviePoster>
        <Link to={`/movie/${id}`}>
          <MovieImage src={`${IMG_URL}${poster_path}`} />
        </Link>
      </MoviePoster>
      <MovieContent>
        <Link to={`/movie/${id}`}>
          <MovieHeader>
            <MovieTitle>{title}</MovieTitle>
          </MovieHeader>
        </Link>
        <VoteAverageContainer>
          <VoteAverageValue>{vote_average} %</VoteAverageValue>
        </VoteAverageContainer>
        <DateRelease>{release_date}</DateRelease>
        <MovieOverview>{overview}</MovieOverview>
      </MovieContent>
    </ListItem>
  );
};

export default MovieItem;
