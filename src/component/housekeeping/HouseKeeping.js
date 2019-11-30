import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';
import ServiceItem from "../serviceItem/ServiceItem";
import Sidebar from '../sidebar/Sidebar';

class HouseKeeping extends Component {
    constructor(props){
       super(props);
       this.state = {
           services: []
       }
    }

    async componentDidMount() {
        try {
            const response = await fetch("http://localhost:3001/services?type=House%20Keeping", {method: 'GET'});
            const data = await response.json();
            console.log(data);
            this.setState({ services: data });
        }
        catch(error) {
            console.log("ERROR: " + error);
        }
    }

    render() {
        return (
            <MainContainer highlight="House Keeping" >
                <Sidebar />
                <div className="row container-fluid">
                {
                    this.state.services.map((element, index) => {
                        return (

                            <div key={index} className="col-md-8 col-md-offset-1">
                                <ServiceItem service={element}/>
                            </div>

                        );
                    })
                }
                </div>
            </MainContainer>
        )
    }
}

export default HouseKeeping;
