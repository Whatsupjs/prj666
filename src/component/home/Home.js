import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';

import Logo from './Logo.jpg';

class Home extends Component {


    render() {
        return (
            <MainContainer highlight="Home">
                <br/>
                <div className="row" style={{height: '50vh'}}>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Welcome to QuickService</h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <img src={Logo} style={{height: '40vh'}} alt="Logo" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{height: '20vh'}}>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Already Have An Account?</h3>
                                <h3><b><a href="/login">Login Now!</a></b></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Don't Have An Account Yet?</h3>
                                <h3><b><a href="/signup">Sign Up With Us Today!</a></b></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </MainContainer>
        )
    }
}


export default Home;
