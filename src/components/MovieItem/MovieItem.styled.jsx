import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;
  height: 25vh;
  background-color: #ebebeb;
  margin: 10px 0;
  list-style: none;
  display: flex;
  overflow: hidden;

  @media screen and (min-width: 992px) {
    height: 50vh;
  }
`;

export const MoviePoster = styled.div`
  //imagem 992px 40% mobile
  width: 40%;
  @media screen and (min-width: 992px) {
    width: 25%;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
`;

export const MovieContent = styled.div`
  position: relative;
  width: 60%;
  @media screen and (min-width: 992px) {
    width: 75%;
  }
`;

export const MovieHeader = styled.div`
  padding: 8px 0;
  background-color: #116193;

  display: block;
`;

export const MovieTitle = styled.h3`
  color: #00e8e4;
  font-size: 1rem;
  font-family: "Abel", sans-serif;
  text-align: center;
  @media screen and (min-width: 992px) {
    font-size: 2rem;
    text-align: left;
    padding-left: 17%;
  }
`;

export const VoteAverageContainer = styled.span`
  background-color: #116193;
  color: rgb(0, 232, 228);
  border-radius: 50%;
  padding: 3px;
  position: absolute;
  top: 15px;
  left: -15px;
  font-weight: bold;
  @media screen and (min-width: 992px) {
    left: 25px;
  }
`;

export const VoteAverageValue = styled.span`
  width: 40px;
  height: 40px;
  font-size: 0.7rem;
  text-align: center;
  border: 2px solid #00e8e4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 992px) {
    width: 60px;
    height: 60px;
    font-size: 0.9rem;
    border-width: 3px;
  }
`;

export const DateRelease = styled.span`
  font-size: 0.8rem;
  position: absolute;
  right: 50px;
  @media screen and (min-width: 992px) {
    left: 90px;
    font-size: 0.9rem;
  }
`;

export const MovieOverview = styled.p`
  margin: 1.5rem;
  padding-right: 5px;
  font-size: 0.8rem;
  text-align: justify;
  max-height: 50%;
  overflow: auto;
  @media screen and (min-width: 992px) {
    margin-top: 3rem;
    font-size: 0.9rem;
  }
`;
