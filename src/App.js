import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import About from './pages/about';
import Booking from './pages/book';
import Contact from './pages/contact';
import Home from './pages/home';
import Locations from './pages/locations';
import Request from './pages/request';
import Upcoming from './pages/upcoming';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/book" component={Booking} />
          <Route path="/request" component={Request} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/locations" component={Locations} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
