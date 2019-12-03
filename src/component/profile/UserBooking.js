import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';
import SidebarPrf from '../sidebar/SidebarPrf';


class UserBooking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            service: []
        }
    }

    async componentDidMount() {
        try {
            console.log("component has mounted");
            let id = sessionStorage.getItem("id");
            // debugger;
            const response = await fetch("http://localhost:3001/user?id=" + id, { method: 'GET' });
            const data = await response.json();
            console.log(data);
            this.setState({ user: data[0] });
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
                            {/*
                                some form of get/ fetch function to populate service state => {

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

            </MainContainer>

        );
    }
}

export default UserBooking;
