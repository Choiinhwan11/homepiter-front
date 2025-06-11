import logo from './logo.svg';
import './App.css';
import {Route, Router} from "react-router-dom";

function App() {
  return (
      <div>

          <h1>this page index page </h1>

          <Router>
              <Route exact path="/" component={App} />
          </Router>

      </div>
  );
}

export default App;
