import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';


class UserBooking extends Component {

    //constructor for state property with array of services and user. 
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            services: []
        }
    }
    
    //GET request using client's id and store returned array of documents into services 
    async componentDidMount() {
        try {
            console.log("component has mounted");
            let id = sessionStorage.getItem("id");
            
            const response = await fetch("http://localhost:3001/user?id=" + id, { method: 'GET' });
            const data = await response.json();
            console.log(data);
            this.setState({ user: data[0] });
            this.setState({ services: this.state.user.userOf });
        }
        catch (error) {
            console.log("ERROR: " + error);
        }
    }


    render() {
        return (
            <MainContainer hasSidebarPrf={true} highlight="booking">

                <div className="user_profile">
                    <br />
                    <h2>User Bookings</h2>
                    <br />

                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>Service Name</td>
                                <td>Address</td>
                                <td>Type</td>
                                <td>Contact</td>
                                <td>Booked Time Slot</td>
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
                                        <td> {service.provider.email}</td>
                                        <td >{service.availability.length}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

            </MainContainer>

        );
    }
}

export default UserBooking;
