import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';
import SidebarPrf from '../sidebar/SidebarPrf';


class UserService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            service: []
        }
    }

    componentDidMount() {
        //fetch from db -> json etc..
        // this.fetchData();
        console.log('component mounted');
    }

    fetchData(){
        /* ajax call; figure out without using api. or maybe use API instead? */
    }
    // update state variable whenever user inputs.
    onChange = (e) => {
        this.handleUserInput(e);
    }

    handleUserInput = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        // this.setState({ [name]: value },
        //     () => { this.validateField(name, value) });
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

            </MainContainer >

        );
    }
}

export default UserService;
