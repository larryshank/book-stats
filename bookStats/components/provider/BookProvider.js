import React, {useState} from 'react';

const BookContext = React.createContext();

const BookProvider = props => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelected] = useState(null);
  const [userBooks, setUserBooks] = useState([]);
  const [selectedBook, setBook] = useState(null);

  return (
    <BookContext.Provider
      value={{
        searchResults,
        setSearchResults,
        selectedResult,
        setSelected,
        userBooks,
        setUserBooks,
        selectedBook,
        setBook,
      }}>
      {props.children}
    </BookContext.Provider>
  );
};

export {BookProvider, BookContext};
