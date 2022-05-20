import React from 'react';
import './SignIn.css'
import { Link } from 'react-router-dom'

class SignIn extends React.Component {
    render() {
        return (
            <div className="main-container">
            <img className="bk-img" src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"/>
                <div className="header">
                </div>
                <div>
                    <div className="input-container">
                        <h3>Sign In</h3>
                            <div className="centered-input">
                            <input 
                                type="text"
                                placeholder="Enter email"
                                // value={props.value}
                                // onChange={event => console.log("value changed!")}
                            />
                            <div>
                            <input
                                type="password"
                                placeholder="Password"
                                // value={props.value}
                                // onChange={event => console.log("value changed!")}
                            />
                            </div>
                            <div className="centered-btn">
                            <button className="btn">
                                Sign in
                            </button>
                            <button className="btn"><Link to='/signup'>
                                Sign up
                                </Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn; 