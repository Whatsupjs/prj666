import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';
import ServiceItem from "../serviceItem/ServiceItem";

class Category extends Component {
    constructor(props){
       super(props);
       this.state = {
           title: this.props.title,
           services: []
       }
    }

    async componentDidMount() {
        try {
            let title_ = encodeURI(this.state.title);
            let url = title_ === "All" ? "http://localhost:3001/services" : `http://localhost:3001/services?type=${title_}`;
            const response = await fetch(url, {method: 'GET'});
            const data = await response.json();
            this.setState({ services: data });

            sessionStorage.setItem("page", title_);
        }
        catch(error) {
            console.log("ERROR: " + error);
        }
    }

    render() {
        if (this.state.services.length === 0) {
            return (
                <MainContainer highlight={this.state.title} hasSidebar={true}>
                    <br/><br/>
                    <div className="w-auto h-100">
                        <br/><br/><br/>
                        <h3>No Provider Available Yet!</h3>
                        <br/>
                        <br/>
                        <h4>Please check back for updates.</h4>
                    </div>
                    <br/><br/>
                </MainContainer>
            )
        }
        return (
            <MainContainer highlight={this.state.title} hasSidebar={true}>
                <div className="row w-auto h-100">
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

export default Category;
