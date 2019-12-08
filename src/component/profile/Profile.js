import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';


class Profile extends Component {

    /* constructor for this component. 
    sets empty object for user data to be populated and a condition to trigger form render*/
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isMounted: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async componentDidMount() {
        //fetch from db -> json etc..
        try {
            console.log("component has mounted");

            //get user id from session storage by client's email
            const id = sessionStorage.getItem("email");

            const response = await fetch("http://localhost:3001/user?email=" + id, { method: 'GET' });
            const data = await response.json();
            
            this.setState({ user: data[0] });
        }
        catch (error) {
            console.log("ERROR: " + error);
        }finally{
            setTimeout(function() { //Start the timer
                this.setState({isMounted: true}) //After 1 second, set render to true
            }.bind(this), 1000);

            this.setState({isMounted: true});
            sessionStorage.setItem("id", this.state.user._id);
        }
    }

    // update state variable whenever user inputs.
    onChange = (e) => {
        //identifiers for address columns 
        let addressvar = ["streetNumber", "streetName", "city", "province", "postal"];

        if (addressvar.indexOf(e.target.name) >= 0) {
            this.handleAddressInput(e);
        } else {
            this.handleUserInput(e);
        }
    }

    // handles nested addressobj field inputs
    // NOTE * setState DOES NOT HANDLE NESTED OBJECT BY DEFAULT, HENCE REPEATED prevState
    handleAddressInput = (e) => {
        const { name, value } = e.target;

        this.setState(prevState => ({
            ...prevState,
            user: {
                ...prevState.user,
                address: {
                    ...prevState.user.address,
                    [name]: value
                }
            }
        }));
    }

    //handles userobj inputs
    handleUserInput = (e) => {
        const { name, value } = e.target;

        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
    }

    onSubmit = (e) => {
        // package current user info 
        const data = this.state.user;

        this.updateUser(data);
    }

    //send updated user data into DB
    async updateUser(data) {
        //get user id from session storage to track client's userid
        try {
            const request = new Request("http://localhost:3001/updateUser", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });

            const response = await fetch(request);
            const status = await response.status;
        }
        catch (error) {
            console.log("ERROR: " + error);
        }
    }

    render() {
        if (this.state.isMounted === false) {
            return (
                <MainContainer hasSidebarPrf={true} highlight="profile">

                    <div className="user_profile">
                        <br />
                        <h2>User Profile</h2>
                        <br />
                    </div>
                </MainContainer>
            )
        }
        else {
            return (
                <MainContainer hasSidebarPrf={true} highlight="profile">

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
                                            <input className="form-control" name="firstName" type="text" value={this.state.user.firstName || ''} onChange={this.onChange} required />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="last_name">Last Name:</label>
                                            <input className="form-control" name="lastName" type="text" value={this.state.user.lastName || ''} onChange={this.onChange} required />
                                        </div>
                                    </div>

                                </div>

                                <div className="row userInfo">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="email">Email:</label>
                                            <input className="form-control" name="email" type="email" value={this.state.user.email || ''} onChange={this.onChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number:</label>
                                            <input className="form-control" name="phone" type="text" value={this.state.user.phone || ''} onChange={this.onChange} required />
                                        </div>
                                    </div>
                                </div>

                                <div className="row userInfo">
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label htmlFor="streetnum">Street Number:</label>
                                            <input className="form-control" name="streetNumber" type="text" value={this.state.user.address.streetNumber || ''} onChange={this.onChange} required />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="streetnum">Street Name:</label>
                                            <input className="form-control" name="streetName" type="text" value={this.state.user.address.streetName || ''} onChange={this.onChange} required />
                                        </div>
                                    </div>
                                </div>

                                <div className="row userInfo">
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label htmlFor="city">City:</label>
                                            <input className="form-control" name="city" type="text" value={this.state.user.address.city || ''} onChange={this.onChange} required />
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label htmlFor="province">Province/Territory:</label>
                                            <input className="form-control" name="province" type="text" value={this.state.user.address.province || ''} onChange={this.onChange} required />
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label htmlFor="postal">Postal Code:</label>
                                            <input className="form-control" name="postal" type="text" value={this.state.user.address.postal || ''} onChange={this.onChange} required />
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                            <hr />
                            <input type="submit" className="btn btn-lg btn-primary" value="Update Profile" /><br /><br /><br />
                        </form>
                    </div>

                </MainContainer>

            );
        }
    }
}

export default Profile;
