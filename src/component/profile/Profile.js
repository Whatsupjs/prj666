import React, { Component } from 'react';
import MainContainer from '../../MainContainer';
import SidebarPrf from '../sidebar/SidebarPrf';



class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user
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

                <SidebarPrf highlight="profile" />
                <div className="user_profile">
                    <br />
                    <h2>User Profile</h2>
                    <br />

                    <form onSubmit={this.onSubmit}>
                        <fieldset className="userInfo">
                            <div className="row userInfo">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="first_name">First Name:</label>
                                        <input className="form-control" name="firstName" type="text" value={this.state.user.firstName} onChange={this.onChange} required />
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="last_name">Last Name:</label>
                                        <input className="form-control" name="lastName" type="text" value={this.state.user.lastName} onChange={this.onChange} required />
                                    </div>
                                </div>

                            </div>

                            <div className="row userInfo">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input className="form-control" name="email" type="email" value={this.state.user.email} onChange={this.onChange} />
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number:</label>
                                        <input className="form-control" name="phone" type="text" value={this.state.user.phone} onChange={this.onChange} required />
                                    </div>
                                </div>
                            </div>

                            <div className="row userInfo">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="street">Street:</label>
                                        <input className="form-control" name="street" type="text" value={this.state.user.street} onChange={this.onChange} required />
                                    </div>
                                </div>
                            </div>

                            <div className="row userInfo">
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="city">City:</label>
                                        <input className="form-control" name="city" type="text" value={this.state.user.city} onChange={this.onChange} required />
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="province">Province/Territory:</label>
                                        <input className="form-control" name="province" type="text" value={this.state.user.province} onChange={this.onChange} required />
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="postal">Postal Code:</label>
                                        <input className="form-control" name="postal" type="text" value={this.state.user.postal} onChange={this.onChange} required />
                                    </div>
                                </div>
                            </div>

                        </fieldset>
                        <hr />
                        <input type="submit" className="btn btn-lg btn-primary" value="Update Profile" disabled={!this.state.formValid} /><br /><br /><br />
                    </form>
                </div>

            </MainContainer >

        );
    }
}

export default Profile; 