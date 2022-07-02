import {  useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/UI/header/Header";
import { BooksContext } from "./context";
import './style/main.css';

function App() {

  const [books, setBooks] = useState([]);

  return (
    <BooksContext.Provider value={{
      books, setBooks
    }}>
      
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </BooksContext.Provider>
  );
}

export default App;
