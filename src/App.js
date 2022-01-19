import './App.css';
import Home from './Components/Home';
import Display from './Components/Display';
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          {/* PathVariable should match up in child component useParam */}
          <Route exact path="/:PathVariable">
            <Display />
          </Route>
          <Route exact path="/:PathVariable/:wordColor">
            <Display />
          </Route>
          <Route exact path="/:PathVariable/:wordColor/:bgColor">
            <Display />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
