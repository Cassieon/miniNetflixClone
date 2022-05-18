import SignIn from './components/SignIn';
import NavBar from './components/Navbar';
import HeroSection from './Hero';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <SignIn />
      <NavBar/>
      <HeroSection />
    </div>
  );
}

export default App;
