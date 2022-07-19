import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import Playlists from './components/Playlists';
import Searchpage from './components/Searchpage';
import BackArrow from './components/BackArrow';

import { SpotifyApiContext } from "react-spotify-api";
import Cookies from "js-cookie";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import { axios } from "./hooks/Axios.ts";

function App() {

  const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"));

  useEffect(() => {

    if (token && token.length >= 30) {
      axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
    }


  }, [token])

  return (
    <Router>

      {token ? (
        <SpotifyApiContext.Provider value={token}>
          {/* Your Spotify Code here */}
          {/* <p>You are authorized with token: {token}</p> */}

          <div className="App">
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route path="/search">
                  <Searchpage />
                </Route>
                <Route path="/playlists">
                  <Playlists />
                </Route>
                <Route path="*">
                  <Homepage />
                </Route>
              </Switch>
            </div>
            <BackArrow />
            <Footer />
            <Menu />
          </div>

        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <SpotifyAuth
          redirectUri='http://localhost:3000/callback'
          clientID='1a70ba777fec4ffd9633c0c418bdcf39'
          scopes={[Scopes.userReadPrivate, 'user-read-email']} // either style will work
          onAccessToken={(token) => setToken(token)}
        />
      )}
    </Router>
  );
}

export default App;
