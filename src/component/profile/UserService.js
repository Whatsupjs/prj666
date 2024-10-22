import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../maincontainer/MainContainer';


class UserService extends Component {

    //constructor for state property with array of services. 
    constructor(props) {
        super(props);
        this.state = {
            services: []
        }
    }

    //GET request using client's id and store returned array of documents into services 
    async componentDidMount() {
        try {
            console.log("component has mounted");
            let id = sessionStorage.getItem("id");

            const response = await fetch("http://localhost:3001/services?provider=" + id, { method: 'GET' });
            const data = await response.json();

            this.setState({ services: data });
        }
        catch (error) {
            console.log("ERROR: " + error);
        }
    }

    //using map() function to uniquely identify each document in the array to display
    render() {
        return (
            <MainContainer hasSidebarPrf={true} highlight="service">

                <div className="user_profile">
                    <br />
                    <h2>
                        <span>User Services</span>
                        <Link to="#" className="btn btn-primary create">Create Service</Link>
                    </h2>
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
