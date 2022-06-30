import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import { BooksContext } from "./context";

import './style/main.css';

function App() {

  const [books, setBooks] = useState([]);

  return (
    <BooksContext.Provider value={{
      books, setBooks
    }}>
      <Header />
    </BooksContext.Provider>
  );
}

export default App;
