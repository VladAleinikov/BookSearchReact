import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/UI/header/Header";
import { BooksContext, FilterContext } from "./context";
import './style/main.css';

function App() {

  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState("all");
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
