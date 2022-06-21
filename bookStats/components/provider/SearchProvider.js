import React, {useState} from 'react';

const SearchContext = React.createContext();

const SearchProvider = props => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelected] = useState(null);

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
        selectedResult,
        setSelected,
      }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default {SearchProvider, SearchContext};
