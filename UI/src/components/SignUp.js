class SignIn extends React.Component {
    render() {
        return (
            <div className="main-container">
            <img className="bk-img" src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"/>
                <div className="header">
                    <img className="logo" src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress"/>
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
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default SignIn; 