import React, { useState, useReducer } from "react";
import Header from "./components/header";
import NoResults from "./components/NoResults";
import Search from "./components/Search";
import SecondaryFilters from "./components/SecondaryFilters";
import MediaCard from "./components/MediaCard";
import reducer from "./utils/reducer";
import useDebounceSearch from "./hooks/useDebounceSearch";
import useFetchData from "./hooks/useFetchData";

const telegram = window.Telegram.WebApp;

function App() {
  const [query, updateQuery] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    filteredData: [],
    loading: false,
    dataIndex: 20,
  });

  useFetchData(dispatch, telegram);
  useDebounceSearch(query, state, dispatch);

  return (
    <div className="container">
      <Header />
      <Search query={query} updateQuery={updateQuery} />
      <SecondaryFilters query={query} updateQuery={updateQuery} />
      <MediaCard state={state} dispatch={dispatch} />
      <NoResults state={state} />
    </div>
  );
}

export default App;
