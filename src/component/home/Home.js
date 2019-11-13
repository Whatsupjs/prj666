import React, { Component } from 'react';
import MainContainer from '../../MainContainer';

class Home extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         highlight: props.highlight,
    //         sideBar: props.sideBar,
    //         hasSidebar: props.hasSidebar
    //     }
    // }

    render() {
        return (
            <MainContainer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Welcome to QuickService</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </div>
                        <div className="col-sm-6">
                            <h1>INSERT IMAGE HERE</h1>
                        </div>
                    </div>
                </div>
                
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Already Have An Account?</h3> 
                            <h3>Login Now!</h3>
                        </div>
                        <div className="col-sm-6">
                            <h3>Don't Have An Account Yet?</h3> 
                            <h3>Sign Up With Us Today!</h3>
                        </div>
                    </div>
                </div>
            </MainContainer>
        )
    }
}


export default Home; 