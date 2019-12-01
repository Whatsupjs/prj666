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
            <MainContainer highlight="House Keeping" hasSidebar={true}>
                <div className="row container-fluid" style={{width: '100%'}}>
                {
                    this.state.services.map((element, index) => {
                        return (

                            <div key={index} className="col-md-6">
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
