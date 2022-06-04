import SignUp from './components/SignUp'
import SignIn from './components/SignIn';
import Content from './components/Content'; 
import Favorites from './components/Favorites';
import NavBar from './components/Navbar';
import Navbar from './components/navbar.jsx';
import HeroSection from './components/Hero';
import Carousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react'; 
import {BrowserRouter as Router, 
  Routes,
  Route,
  Link,
  } from 'react-router-dom';


  class App extends React.Component  {

    render() {
      return (
      <div>
        <Router>

          <div className='upper-header'>
           <Navbar/>
          </div>

          <Routes>

            <Route path='/' element={<Home/>}>
            </Route>
            <Route path='/signUp' element={<SignUp/>}>   
            </Route>
            <Route path='/content' element={<Content/>}>
            </Route>
            <Route path='/favorites' element={ <Favorites/>}>     
            </Route>
            <Route path="*" element={<SignIn/>}>
              {/* Make a 404 page ?*/}
            </Route>

          </Routes>
        </Router>
      </div>
      )
    }
  }

  export default App;


