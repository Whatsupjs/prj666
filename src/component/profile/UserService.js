import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';
import SidebarPrf from '../sidebar/SidebarPrf';


class UserService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: []
        }
    }

    async componentDidMount() {
        try {
            console.log("component has mounted");
            const response = await fetch("http://localhost:3001/services?id=5dd739faa4691080aea88fde", {method: 'GET'});
            const data = await response.json();
            console.log(data);
            this.setState({ services: data });
        }
        catch(error) {
            console.log("ERROR: " + error);
        }
    }

    onSubmit = (e) => {
        e.preventDefault();   //prevents actual submission.
        console.log(this.state); // just checking values; remove once done.
        /* later on implement database entry */
        //figure out how to update to database
    }

    render() {
        return (
            <MainContainer>

                <SidebarPrf highlight="service" />
                <div className="user_profile">
                    <br />
                    <h2>User Services</h2>
                    <br />

                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>Service Name</td>
                                <td>Address</td>
                                <td>Type</td>
                                <td># Bookings</td>
                                <td>Creation Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/*
                                this.state.services.map((service, index) => {

                                    return(
                                        <tr>
                                            <td key={index}>{service.name}</td>
                                            <td key={index}>{service.type}</td>
                                        </tr>
                                    )
                                }
                            */}
                        </tbody>
                    </table>


                </div>

            </MainContainer >

        );
    }
}

export default UserService;
