import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        
        <div className="content">
          <Switch>
            <Route exact path="/">
            </Route>
          </Switch>
        </div>
        <Footer />
        <Menu />
      </div>
    </Router>
  );
}

export default App;
