import React, { useState } from "react";
import { Container, List } from "../../styles/Global.js";
import { SearchInput, FormStyled } from "./SearchBar.styled.jsx";
import { searchURL } from "./../../services/api";
import MovieItem from "../MovieItem/MovieItem.jsx";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = async (e) => {
    e.preventDefault();

    const response = await fetch(searchURL + searchValue);
    const data = await response.json();
    setMovies(data.results);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Container>
      <FormStyled onSubmit={getMovies}>
        <SearchInput
          type="search"
          placeholder="Digite o nome do filme ou gênero"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </FormStyled>

      <List>
        {movies.map((movie) => (
          <MovieItem {...movie} key={movie.id} />
        ))}
      </List>
    </Container>
  );
};

export default SearchBar;
