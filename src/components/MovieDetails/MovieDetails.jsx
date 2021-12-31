import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../../services/api";
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
} from "./MovieDetails.styled";
import numeral from "numeral";

const MovieDetails = (props) => {
  const [movieDetail, setMovieDetail] = useState({});
  const {
    title,
    release_date: date,
    overview,
    status,
    original_language: language,
    runtime,
    budget,
    revenue,
    genres,
  } = movieDetail;
  console.log(genres);

  useEffect(() => {
    getDetails();
  }, [props]);

  const getDetails = async (e) => {
    const response = await fetch(
      `${BASE_URL}/movie/${props.match.params.id}?${API_KEY}&language=pt-BR&region=BR`
    );
    const data = await response.json();
    setMovieDetail(data);
    console.log(data);
  };

  return (
    <Container>
      <MovieDetailsHeader>
        <MovieDetailsTitle>{title}</MovieDetailsTitle>
        <MovieDetailsDate>{date}</MovieDetailsDate>
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
        </MovieDetailsInfos>
      </MovieDetailsContent>
    </Container>
  );
};

export default MovieDetails;
