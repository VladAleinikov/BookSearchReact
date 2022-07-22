import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/UI/header/Header";
import { BooksContext, FilterContext } from "./context";
import './style/main.css';

import request from "superagent";
function App() {

  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState("all");
  useEffect(() => {
    request.get('https://www.googleapis.com/books/v1/volumes')
      .query({
        q: "React",
        maxResults: 40,
      })
      .then((data) => {
        setBooks([...data.body.items])
        console.log(books);
      })
  }, [])
  return (
    <BooksContext.Provider value={{
      books, setBooks
    }}>
      <FilterContext.Provider value={{
        filters, setFilters
      }}>

        <BrowserRouter>
          <Header />
          <AppRouter />
        </BrowserRouter>
      </FilterContext.Provider>
    </BooksContext.Provider >
  );
}

export default App;
