import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import Playlists from './components/Playlists';
import Searchpage from './components/Searchpage';
import BackArrow from './components/BackArrow';

function App() {
  return (
    <Router>
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
              NotFound
            </Route>
          </Switch>
        </div>
        <BackArrow />
        <Footer />
        <Menu />
      </div>
    </Router>
  );
}

export default App;
