import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';
import ServiceItem from "../serviceItem/ServiceItem";

class HouseKeeping extends Component {
    constructor(props){
       super(props);
       this.state = {
           services: []
       }
    }

    componentDidMount() {
        fetch('http://localhost:8080/services?type=housekeeping')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    services: data
                });
            })
            .catch(error => {
                console.log("ERROR: " + error);
            });
    }

    render() {
        return (
            <MainContainer highlight="House Keeping" hasSidebar={true}>
                {
                    this.state.services.map((element, index) => {
                        return (
                            <div key={index} className="col-md-4 col-md-offset-1">
                                <ServiceItem service={element}/>
                            </div>
                        );
                    })
                }
            </MainContainer>
        );
    }
}

export default HouseKeeping;
