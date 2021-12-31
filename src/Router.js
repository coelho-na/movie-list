import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieDetails from "./components/MovieDetails/MovieDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route path="/movie/:id" component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
