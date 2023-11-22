import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Create from './create';

function App() {
  return (
    <Router>    <div className="App">
      <Navbar />
      
      <div className="content">
          
          <Switch>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
      </div>
    
    </div>
    </Router>
  );
}

export default App;
