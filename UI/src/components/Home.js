import React from 'react'; 
import Carousel from '../Carousel';
import HeroSection from '../Hero';
import SignIn from './SignIn'
import './App.css'

class Home extends React.Component {
    render() {
        return (
            <div className='App'>
                <HeroSection/>
                <Carousel/>
            </div>
        )
    }
} 

export default Home;