import React, { Component } from 'react';
import MainContainer from '../../MainContainer';
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
        console.log('component mounted');
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
                                <td>ID</td>
                                <td>Name</td>
                                <td>Type</td>
                                <td># Bookings</td>
                                <td>Creation Date</td>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>


                </div>

            </MainContainer >

        );
    }
}

export default UserService; 