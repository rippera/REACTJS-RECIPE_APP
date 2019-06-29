import React from 'react';
import './css/reset.css';
import './css/grid.css';
import './css/style.css';
import SearchBar from './components/searchBar/searchBar';

const App = () => {
  return (
    <div className="container">
        <h1 className='app_title'>recipe app</h1>
        <SearchBar />
    </div>
  );
}

export default App;
