import './App.css';
import Contact from './pages/contact';
import About from './pages/about';
import Home from './pages/home';
import Locations from './pages/locations';
import Upcoming from './pages/upcoming';
import Booking from './pages/book';
import Request from './pages/request';
import Login from './pages/login';
import Signup from './pages/signup';
import { BrowserRouter , Route, Switch } from 'react-router-dom';

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
