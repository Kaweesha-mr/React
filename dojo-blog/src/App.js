import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFOund from './notFound';

function App() {
  return (
    <Router>    <div className="App">
      <Navbar />

      <div className="content">
        <Switch>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          {/* catch any other routes */}
          <Route path="*">
            <NotFOund/>
          </Route>

        </Switch>
      </div>

    </div>
    </Router>
  );
}

export default App;
