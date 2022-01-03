import React, { useState, useEffect } from "react";
import numeral from "numeral";
import { BASE_URL, API_KEY, IMG_URL } from "../../services/api";
import { Container } from "./../../styles/Global";
import {
  MovieDetailsHeader,
  MovieDetailsTitle,
  MovieDetailsDate,
  MovieDetailsContent,
  MovieDetailsInfos,
  MovieDetailsSubtitle,
  MovieDetailsOverview,
  MovieDetailsInfoDiv,
  MovieDetailsInfoBox,
  MovieDetailsInfoTitle,
  MovieDetailsInfoText,
  MovieDetailsGenres,
  MovieDetailsGenresItem,
  MovieDetailsAverageBox,
  MovieDetailsAverage,
  MovieDetailsPoster,
  MovieDetailsImgPoster,
  MovieTrailerBox,
  MovieTrailer,
} from "./MovieDetails.styled";

const MovieDetailsItem = ({ movieDetail }) => {
  const [trailer, setTrailer] = useState([]);

  const {
    title,
    release_date,
    overview,
    status,
    language,
    runtime,
    budget,
    revenue,
    genres,
    vote_average,
    poster_path,
    id,
  } = movieDetail;

  useEffect(() => {
    getTrailer();
  }, []);

  const getTrailer = async () => {
    const response = await fetch(`${BASE_URL}/movie/${id}/videos?${API_KEY}`);
    const { results } = await response.json();
    results.map((item) => setTrailer(item));
  };

  return (
    <Container>
      <MovieDetailsHeader>
        <MovieDetailsTitle>{title}</MovieDetailsTitle>
        <MovieDetailsDate>{release_date}</MovieDetailsDate>
      </MovieDetailsHeader>
      <MovieDetailsContent>
        <MovieDetailsInfos>
          <MovieDetailsSubtitle>Sinopse</MovieDetailsSubtitle>
          <MovieDetailsOverview>{overview}</MovieDetailsOverview>
          <MovieDetailsSubtitle>Informações</MovieDetailsSubtitle>
          {/* Informações Division Start */}
          <MovieDetailsInfoDiv>
            {/* Info Box */}
            <MovieDetailsInfoBox>
              <MovieDetailsInfoTitle>Situação</MovieDetailsInfoTitle>
              <MovieDetailsInfoText>{status}</MovieDetailsInfoText>
            </MovieDetailsInfoBox>
            {/* Info Box */}
            <MovieDetailsInfoBox>
              <MovieDetailsInfoTitle>Idioma</MovieDetailsInfoTitle>
              <MovieDetailsInfoText>{language}</MovieDetailsInfoText>
            </MovieDetailsInfoBox>
            {/* Info Box */}
            <MovieDetailsInfoBox>
              <MovieDetailsInfoTitle>Duração</MovieDetailsInfoTitle>
              <MovieDetailsInfoText>
                {numeral(runtime).format("00:00:00") + " hr"}
              </MovieDetailsInfoText>
            </MovieDetailsInfoBox>
            {/* Info Box */}
            <MovieDetailsInfoBox>
              <MovieDetailsInfoTitle>Orçamento</MovieDetailsInfoTitle>
              <MovieDetailsInfoText>
                {numeral(budget).format("$0,0.00")}
              </MovieDetailsInfoText>
            </MovieDetailsInfoBox>
            {/* Info Box */}
            <MovieDetailsInfoBox>
              <MovieDetailsInfoTitle>Receita</MovieDetailsInfoTitle>
              <MovieDetailsInfoText>
                {numeral(revenue).format("$0,0.00")}
              </MovieDetailsInfoText>
            </MovieDetailsInfoBox>
            {/* Info Box */}
            <MovieDetailsInfoBox>
              <MovieDetailsInfoTitle>Lucro</MovieDetailsInfoTitle>
              <MovieDetailsInfoText>
                {numeral(revenue - budget).format("$0,0.00")}
              </MovieDetailsInfoText>
            </MovieDetailsInfoBox>
          </MovieDetailsInfoDiv>
          {/* Informações Division Finish */}
          <MovieDetailsGenres>
            {genres
              ? genres.map((genreItem) => (
                  <MovieDetailsGenresItem key={genreItem.id}>
                    {genreItem.name}
                  </MovieDetailsGenresItem>
                ))
              : ""}
          </MovieDetailsGenres>

          <MovieDetailsAverageBox>
            <MovieDetailsAverage>
              {numeral(vote_average / 10).format("0%")}
            </MovieDetailsAverage>
          </MovieDetailsAverageBox>
        </MovieDetailsInfos>
        <MovieDetailsPoster>
          <MovieDetailsImgPoster src={`${IMG_URL}${poster_path}`} />
        </MovieDetailsPoster>
      </MovieDetailsContent>
      <MovieTrailerBox>
        <MovieTrailer
          title={trailer.name}
          src={`https://www.youtube.com/embed/${trailer.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></MovieTrailer>
      </MovieTrailerBox>
    </Container>
  );
};

export default MovieDetailsItem;
