import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../../services/api";
import MovieDetailsItem from "./MovieDetailsItem";

const MovieDetails = (props) => {
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    getDetails();
  }, [props]);

  const getDetails = async (e) => {
    const response = await fetch(
      `${BASE_URL}/movie/${props.match.params.id}?${API_KEY}&language=pt-BR&region=BR`
    );
    const data = await response.json();

    setMovieDetail(data);
  };

  return (
    <>
      <MovieDetailsItem movieDetail={movieDetail} />
    </>
  );
};

export default MovieDetails;
