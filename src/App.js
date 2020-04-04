import React from 'react';
import './App.css';
import MovieHeader from './components/movieheader';
import Authentication from './components/authentication';
import {HashRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './stores/store'
import HttpsRedirect from 'react-https-redirect'

function App() {
  return (
      <HttpsRedirect>
          <div className="App">
            <Provider store={store}>
              <HashRouter>
                <div>
                  <MovieHeader />
                  <Route exact path="/" render={()=><div />}/>
                  <Route path="/signin" render={()=><Authentication />}/>
                </div>
              </HashRouter>
            </Provider>
          </div>
      </HttpsRedirect>
  );
}

export default App;
