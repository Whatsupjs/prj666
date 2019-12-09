import React, { Component } from 'react';
import MainContainer from "../maincontainer/MainContainer";

class NotFound extends Component {

    render() {
        return (
            <MainContainer>
                <div className="row" style={{height: '100vh', width: 'auto'}}>
                    <div className="col-md-12">
                        <br/><br/><br/>
                        <h1 className="page-header">Not Found</h1>
                        <strong><span>404</span></strong>
                        <br/>
                        <span>Page Not Found</span>
                    </div>
                </div>
            </MainContainer>
        );
    }
}

export default NotFound;
