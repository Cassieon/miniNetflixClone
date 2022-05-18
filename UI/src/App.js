
import './App.css';
import React from 'react'; 
import {BrowserRouter as Router, 
  Routes,
  Route,
  Link,
  } from 'react-router-dom';

import SignIn from './components/SignIn';
import Content from './components/Content'; 
import Favorites from './components/Favorites';
import SignUp from './components/SignUp'; 



  class App extends React.Component  {

    render() {
      return (
      <div>
        <Router>

          <div>
            <nav>
              <Link to='/'>SignIn</Link>
              <Link to='/signup'>SignUp</Link>
              <Link to='/content'>Content</Link>
              <Link to='/favorites'>Favorites</Link>
            </nav>
          </div>

          <Routes>

            <Route path='/' element={<SignIn/>}>
            </Route>
            <Route path='/signup' element={<SignUp/>}>   
            </Route>
            <Route path='/content' element={<Content/>}>
            </Route>
            <Route path='/favorites' element={<Favorites/>}>     
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
