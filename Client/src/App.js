import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Book from './pages/book';
import Contact from './pages/contact';
import Home from './pages/home';
import Locations from './pages/locations';
import Login from './pages/login';
import Request from './pages/request';
import Signup from './pages/signup';
import Upcoming from './pages/upcoming';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [Email, setEmail] = useState('');
  const [Password, setPass] = useState('');
  const [CPassword, setCPass] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/getUsers').then((response) => {
      setUsersData(response.data);
    });
  }, []);
  return (
    <div>
      <Router basename="/">
        <div className="App">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
              }
            />
            <Route
              path="/book/"
              element={
                <Book isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
              }
            />
            <Route
              path="/request"
              element={
                <Request
                  Email={Email}
                  isLoggedin={isLoggedin}
                  setIsLoggedin={setIsLoggedin}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact
                  isLoggedin={isLoggedin}
                  setIsLoggedin={setIsLoggedin}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
              }
            />
            <Route
              path="/locations"
              element={
                <Locations
                  isLoggedin={isLoggedin}
                  setIsLoggedin={setIsLoggedin}
                />
              }
            />
            <Route
              path="/upcoming"
              element={
                <Upcoming
                  isLoggedin={isLoggedin}
                  setIsLoggedin={setIsLoggedin}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  usersData={usersData}
                  Email={Email}
                  Password={Password}
                  setEmail={setEmail}
                  setPass={setPass}
                  setIsLoggedin={setIsLoggedin}
                  isLoggedin={isLoggedin}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Signup
                  Email={Email}
                  Password={Password}
                  CPassword={CPassword}
                  setEmail={setEmail}
                  setPass={setPass}
                  setCPass={setCPass}
                  isLoggedin={isLoggedin}
                  setIsLoggedin={setIsLoggedin}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
