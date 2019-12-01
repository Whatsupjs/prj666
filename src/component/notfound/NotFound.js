import React, { Component } from 'react';
import MainContainer from "../maincontainer/MainContainer";

class NotFound extends Component {

    render() {
        return (
            <div>
                <MainContainer>
                    <div className="row" style={{height: '100vh'}}>
                        <div className="col-md-12">
                            <h1 className="page-header">Not Found</h1>
                            <strong><span>404</span></strong>
                            <br/>
                            <span>Page Not Found</span>
                        </div>
                    </div>
                </MainContainer>
            </div>
        );
    }
}

export default NotFound;
