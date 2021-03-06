import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import PhotoList from './components/Photos/PhotoList';
import Button from './components/Button/Button';
import SearchForm from './components/SearchForm/SearchForm';

import './App.css';

  // TODO try no react-create-app
  // TODO try typescript
  // TODO look into applications of useMemo, useCallback, useReducer in this app
  // TODO fix photos rerender
  // TODO better styling

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedPhotos, setLoadedPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [showRecent, setShowRecent] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);
      const fetchEndPoint = showRecent ? `http://localhost:5000/flickr/recent?page=${page}&perPage=10`
          : `http://localhost:5000/flickr/search?page=${page}&perPage=10&search=${search}`;
      const response = await fetch(fetchEndPoint);
      const responseData = await response.json();
      setLoadedPhotos( prevPhotos => {
        return prevPhotos.concat(responseData.photo);
      });
      setIsLoading(false);
    };
    fetchPhotos();
  }, [page, showRecent, search]);

  const handleRecentClick = () => {
    if(page!==1 || !showRecent){
      setLoadedPhotos([]);
      setShowRecent(true);
      setPage(1);
    }
  }

  const handleSearchClick = (e, value) => {
    e.preventDefault();
    if(value && (page!==1 || showRecent || value!==search)){
      setLoadedPhotos([]);
      setSearch(value);
      setShowRecent(false);
      setPage(1);
    }
  }

  window.onscroll = () => {
    if ((window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) && !isLoading) {
      setPage(page + 1);
    }
  }

  let content;
  if ((!loadedPhotos || loadedPhotos.length === 0) && !isLoading) {
    content = <p className="nothing-found">Could not find any Photos.</p>;
  }else{
    content = <PhotoList items={loadedPhotos} />;
  }

  return (
    <React.Fragment>
      <Header>
        <Button handler={handleRecentClick} className="recent" text="Recent"/>
        <SearchForm handler={handleSearchClick} buttonText="Search"/>
      </Header> 
      <main>
        {content}
        {isLoading && <p className="my-loader">Loading...</p>}
      </main>
    </React.Fragment>
  );
}

export default App;
