import React from 'react';
import Header from "./components/layout/Header";
import SearchResult from "./components/SearchResult";
import Main from "./pages/Main"

function App(props) {
  return (
    <div className="App">
      <Header/>
      <SearchResult/>
      <Main/>
    </div>
  );
}

export default App;
