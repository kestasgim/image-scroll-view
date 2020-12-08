import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import PhotoList from './components/Photos/PhotoList';
import Button from './components/Button/Button';
import SearchForm from './components/SearchForm/SearchForm'

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedRecentPhotos, setLoadedRecentPhotos] = useState([]);
  // const [loadedSearchPhotos, setLoadedPhotos] = useState([]);
  const [recentPage, setRecentPage] = useState(1);
  // const [searchPage, setSearchPage] = useState(1);
  // const [showRecent, setShowRecent] = useState(true);


  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);
      const response = await fetch(`http://localhost:5000/flickr/recent?page=${recentPage}&perPage=10`);

      const responseData = await response.json();
      setLoadedRecentPhotos( prevPhotos => {
        return prevPhotos.concat(responseData.photo);
      });
      setIsLoading(false);
    };

    fetchPhotos();
  }, [recentPage]);

  const handleRecentClick = () => {
    console.log('Recent clicked');
    //TODO add state logic
    return;
  }

  const handleSearchClick = (e, value) => {
    e.preventDefault();
    // TODO add state logic
    console.log('Search clicked', value);
    return;
  }

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setRecentPage(recentPage + 1);
    }
  }

  return (
    <React.Fragment>
      <Header>
        <Button handler={handleRecentClick} className="recent">Recent</Button>
        <SearchForm handler={handleSearchClick}/>
      </Header> 
      <main>
        <PhotoList items={loadedRecentPhotos} />
        {isLoading && <p className="my-loader">Loading...</p>}
      </main>
    </React.Fragment>
  );
}

export default App;
