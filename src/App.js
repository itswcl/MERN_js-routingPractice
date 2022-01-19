import './App.css';

import {BrowserRouter, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/home">Home</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
