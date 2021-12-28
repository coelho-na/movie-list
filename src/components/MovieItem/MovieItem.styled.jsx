import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;
  height: 50vh;
  background-color: #ebebeb;
  margin: 10px 0;
  list-style: none;
  display: flex;
  overflow: hidden;
`;

export const MoviePoster = styled.div`
  //imagem 992px 40% mobile
  width: 25%;
`;

export const MovieImage = styled.img`
  width: 100%;
`;

export const MovieContent = styled.div`
  position: relative;
  width: 75%;
`;

export const MovieHeader = styled.div`
  padding: 8px 0;
  background-color: #116193;
  text-align: center;
  display: block;
`

export const MovieTitle = styled.h3`
  color: #00e8e4;
  font-size: 1.2rem;
  font-family: "Abel", sans-serif;
`

export const VoteAverageContainer  = styled.span`
  width: 40px;
  height: 40px;
  background-color:#116193;
  border: 2px solid #00e8e4;
  color: rgb(0, 232, 228);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15px;
  left: -15px;
`


export const VoteAverageValue  = styled.span`
 font-size: .7rem;
 text-align: center;
`

export const DateRelease = styled.span`
  font-size: .8rem;
  position: absolute;
  right: 50px;

`

export const MovieOverview = styled.p`
    margin: 1.5rem;
    padding-right: 5px;
    font-size: .8rem;
    text-align: justify;
    max-height: 50%;
    overflow: auto;
`