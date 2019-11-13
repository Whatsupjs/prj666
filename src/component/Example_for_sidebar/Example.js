import React, { Component } from 'react';
import MainContainer from '../../MainContainer';
import Sidebar from "../sidebar/Sidebar";


class Example extends Component {
    render() {
        return (
            <MainContainer highlight="House Keeping" hasSidebar={true}>    {/* we click on "House Keeping" to get to this page */}
                <div>
                    {/* sidebar is included already in the maincontainer because we passed true to it */}
                    <h1>Some other components goes here!</h1>
                </div>
            </MainContainer>
        );
    }
}

export default Example;
