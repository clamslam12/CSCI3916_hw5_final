import React from 'react';
import './App.css';
import MovieHeader from './components/movieheader';
import Authentication from './components/authentication';
import MovieList from './components/movieList'
import {BrowserRouter as Router,Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './stores/store'
import Movie from "./components/movie";

function App() {
  return (
          <div className="App">
            <Provider store={store}>
              <Router>
                <div>
                  <MovieHeader />
                  <Route exact path="/" render={()=><div />}/>
                  <Route path="/signin" component={Authentication} />
                  <Route path="/movielist" component={MovieList} />
                  <Route path="/movie" component={Movie} />
                </div>
              </Router>
            </Provider>
          </div>
  );
}

export default App;
