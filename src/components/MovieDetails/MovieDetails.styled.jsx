import styled from "styled-components";

export const MovieDetailsHeader = styled.header`
  background-color: #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  @media screen and (min-width: 992px) {
    padding: 16px 24px;
  }
`;

export const MovieDetailsTitle = styled.h1`
  color: #116193;
  font-family: "Abel", sans-serif;
  font-weight: 400;
  @media screen and (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

export const MovieDetailsDate = styled.span`
  font-size: 0.7rem;
  @media screen and (min-width: 992px) {
    font-size: 0.9rem;
  }
`;

export const MovieDetailsContent = styled.section`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const MovieDetailsInfos = styled.main`
  background-color: #f6f6f6;
  padding: 40px;

  @media screen and (min-width: 992px) {
    padding: 24px;
    width: 65%;
  }
`;

export const MovieDetailsSubtitle = styled.h3`
  font-size: 1.5rem;
  color: #116193;
  font-weight: 400;
  border-bottom: 1px solid #00e8e4;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const MovieDetailsOverview = styled.p`
  text-align: justify;
  font-size: 0.8rem;
  padding-bottom: 25px;
`;

export const MovieDetailsInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 992px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const MovieDetailsInfoBox = styled.div`
  text-align: center;
`;

export const MovieDetailsInfoTitle = styled.h3`
  font-size: 0.9rem;
  color: #116193;
  padding-bottom: 5px;
  font-weight: 400;
`;

export const MovieDetailsInfoText = styled.span`
  font-size: 0.8rem;
  margin-bottom: 15px;
`;

export const MovieDetailsGenres = styled.ul`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 992px) {
    position: absolute;
    width: 65%;
    bottom: -15px;
  }
`;

export const MovieDetailsGenresItem = styled.li`
  background-color: #fff;
  color: #116193;
  border: 1px solid #116193;
  font-size: 0.6rem;
  border-radius: 12px;

  @media screen and (min-width: 992px) {
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.7rem;
  }
`;

export const MovieDetailsPoster = styled.aside`
  @media screen and (min-width: 992px) {
    width: 35%;
  }
`;

export const MovieDetailsImgPoster = styled.img`
  width: 100%;
`;
