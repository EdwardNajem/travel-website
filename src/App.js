import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import About from './pages/about';
import Booking from './pages/book';
import Contact from './pages/contact';
import Home from './pages/home';
import Locations from './pages/locations';
import Login from './pages/login';
import Request from './pages/request';
import Upcoming from './pages/upcoming';
import Signup from './pages/signup';

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
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
