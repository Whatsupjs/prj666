import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';

class Home extends Component {


    render() {
        return (
            <MainContainer highlight="Home">
                <br/>
                <div className="row" style={{height: '50vh'}}>
                    <div className="col-sm-6">
                        <h3>Welcome to QuickService</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </div>
                    <div className="col-sm-6">
                        <h1>INSERT IMAGE HERE</h1>
                    </div>
                </div>

                <div className="row" style={{height: '50vh'}}>
                    <div className="col-sm-6">
                        <h3>Already Have An Account?</h3>
                        <h3>Login Now!</h3>
                    </div>
                    <div className="col-sm-6">
                        <h3>Don't Have An Account Yet?</h3>
                        <h3>Sign Up With Us Today!</h3>
                    </div>
                </div>
            </MainContainer>
        )
    }
}


export default Home;
