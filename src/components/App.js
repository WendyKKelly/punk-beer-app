import React, { useReducer, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import BeerTable from "./components/beer_table";
import SearchBar from "./components/search_bar";
import Timezone from "./components/timezone";
//import Practice from './components/practice';
import Test from "./components/test";
import TestForm from "./components/test_form";
import Tock from "./components/tock";
import Name from './components/name';
const MOVIE_API_URL = "https://api.punkapi.com/v2/beers";

const initialState = {
  loading: true,
  beers: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {


  fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search
        });
      });
  }, []);

  // you can add this to the onClick listener of the Header component


  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    fetch('https://api.punkapi.com/v2/beers/')
    .then(response => response.json())
        .then(jsonResponse => {
          if (jsonResponse.Response === "True") {
            dispatch({
              type: "SEARCH_MOVIES_SUCCESS",
              payload: jsonResponse.Search
            });
          } else {
            dispatch({
              type: "SEARCH_MOVIES_FAILURE",
              error: jsonResponse.Error
            });
          }
        });
    };

  const { beers, errorMessage, loading } = state;

  return (
    <div className="App">
      <Header text="Is It Time for Beer?" />
      <Name />

      <p className="App-intro">First, is it 5:00?</p>
      <Timezone />
      <p>so, that means it's around...</p>
      
      <p>Next, let's try a little test:</p>
      <Test />
      <TestForm />
      <p>Great Work!</p>
      <Tock />
        <SearchBar search={search} />
      <div className="movies">
        {loading && !errorMessage ? (
          <div className="spinner">loading...</div>
        ) : errorMessage ? (
          <div className="errorMessage">error</div>
        ) : (
          beers.map((beer, index) => (
            <BeerTable key={`${index}-${beer.name}`} beer={beer} />
          ))
        )}
      </div>
    </div>
  );
};
export default App;

function Drink(props) {


let sum = new Date().getHours() - 17;
if (sum < 0) {
  sum = -sum;
}
const time = new Date().getHours() + sum;

return <h2>{time}</h2>
}
