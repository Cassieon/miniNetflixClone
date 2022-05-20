import SignIn from './components/SignIn';
import NavBar from './components/Navbar';
import HeroSection from './components/Hero';
import Carousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <SignIn />
      <NavBar/>
      <HeroSection />
      <div>
        <h1>Anime</h1>
      </div>
      <Carousel />
    </div>
  );
}

export default App;
