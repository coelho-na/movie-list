import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled, HeaderTitle } from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <HeaderTitle>Movies</HeaderTitle>
      </Link>
    </HeaderStyled>
  );
};
export default Header;
