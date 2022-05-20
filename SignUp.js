import React from 'react';
import axios from 'axios'; //another way
import './SignUp.css';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: props.initialText || ``,
            last_name: props.initialText || ``,
            email: props.initialText || ``,
            password: props.initialText || ``
        }
    }

    _handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.01:5000/signup', this.state)
            .then(response => {
                console.log(response)
            })
    }
    render() {
        const {first_name, last_name, email, password} = this.state;
        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <div className="main-container">
                    <img className="bk-img" src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"/>
                        <div className="header">
                            <img className="logo" src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress"/>
                        </div>
                        <div>
                            <div className="input-container">
                                <h3>Sign Up</h3>
                                    <div className="centered-input">
                                    <input 
                                        type="text"
                                        placeholder="First Name"
                                        name="first_name"
                                        value={first_name}
                                        onChange={this.handleChange}
                                    />

                                    <input 
                                        type="text"
                                        placeholder="Last Name"
                                        name="last_name"
                                        value={last_name}
                                        onChange={this._handleChange}
                                    />

                                    <input 
                                        type="text"
                                        placeholder="Enter email"
                                        name="email"
                                        value={email}
                                        onChange={this._handleChange}
                                    />

                                    <div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={this.handleChange}
                                    />

                                    </div>
                                    <div className="centered-btn">

                                    <button className="btn" type="submit">
                                        Sign up
                                    </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp; 

