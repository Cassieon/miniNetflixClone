import React from 'react'; 
import Carousel from '../Carousel';
import HeroSection from '../Hero';
import SignIn from './SignIn'

class Home extends React.Component {
    render() {
        return (
            <div className='App2'>
                <SignIn/>
                <HeroSection/>
                <h1>
                    Anime
                </h1>
                <Carousel/>
            </div>
        )
    }
} 

export default Home;