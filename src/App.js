import React from 'react';
import Header from "./components/layout/Header";
import SearchResult from "./components/SearchResult";

function App(props) {
  return (
    <div className="App">
      <Header/>
      <SearchResult/>
    </div>
  );
}

export default App;
