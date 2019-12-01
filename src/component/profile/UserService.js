import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';


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
            let provider = sessionStorage.getItem("id");
            console.log(provider);
            // debugger;
            const response = await fetch("http://localhost:3001/services?provider=" + provider, { method: 'GET' });
            const data = await response.json();
            console.log(data);
            this.setState({ services: data });
        }
        catch (error) {
            console.log("ERROR: " + error);
        }
    }

    render() {
        return (
            <MainContainer hasSidebarPrf={true} highlight="service">

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
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.services.map((service, index) => {
                                let Address = service.location.streetNumber + " " + service.location.streetName + " " + service.location.city + ", " + service.location.postal;
                                return (
                                    <tr key={index}>
                                        <td >{service.name}</td>
                                        <td >{Address}</td>
                                        <td >{service.type}</td>
                                        <td >{service.availability.length}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>


                </div>

            </MainContainer >

        );
    }
}

export default UserService;
