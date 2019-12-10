import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';
import { Redirect, withRouter } from 'react-router-dom';
import 'date-fns';
import DateTime from './DateTime';
import querString from "query-string";


class Booking extends Component {

    constructor(props) {
        super(props);
        let query = querString.parse(props.location.search);
        let props_ = JSON.parse(query.pack);
        console.log(props_);
        this.state = {
            user: {},
            isMounted: false,
            date: '',
            toUserBooking: false,

            //data from the ServiceDetail
            service: props_.service,
            serviceProvider: props_.serviceProvider,
            serviceImage: props_.image,
            serviceStars: props_.stars

        }
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
        }
    }


    // update state variable whenever user inputs.
    onChange = (e) => {
        this.handleUserInput(e);
    };

    onSubmit = (e) => {

        e.preventDefault();   //prevents actual submission.
    this.state.user.userOf = {
      name: 'Test' ,
      type:'massage',
      provider: {
          email: 'sedfsdfds'
      },
      availability: {

        length: '1:30pm'
      }

    };
        console.log("dateeee", this.state.date)
        this.updateUser(this.state.user)
        this.setState({toUserBooking: true})
    }

    handleUserInput = (e) => {

      const name = e.target.name;
      const value = e.target.value;

  }


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

        if (this.state.toUserBooking === true) {
            return <Redirect to='/user/booking' />
        }
        const image = require('../../images/' + `${this.state.serviceImage}`);
        return (
            <MainContainer>
                <div className="signup">
                    <div className="container">
                        <br />
                        <h2>Booking Information</h2>
                        <br />

                        <form onSubmit={this.onSubmit}>
                            <fieldset className="container-fluid booking">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="first_name">First Name:</label>
                                                    <input className="form-control" name="firstName" type="text" value={this.state.user.firstName || ''}  readOnly required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="first_name">Last Name:</label>
                                                <input className="form-control" name="firstName" type="text" value={this.state.user.lastName || ''}  readOnly required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="first_name">Contact Number:</label>
                                                <input className="form-control" name="firstName" type="text" value={this.state.user.phone || ''} readOnly required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="first_name">Special Requirements:</label>
                                                <textarea className="form-control" name="firstName" rows="10" type="text" value={this.state.specialReq} onChange={this.onChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 right">
                                        <h4 className='text-left'><strong>{this.state.service.name}</strong></h4>
                                        <br/>
                                        <h5 className='text-left'><strong>Introduction:</strong></h5>
                                        <h6 className='text-left'>{this.state.service.introduction}</h6>
                                        <h5 className='text-left'><strong>Price:&nbsp;</strong>${this.state.service.price}</h5>
                                        <h5 className='text-left'><strong>Provider:&nbsp;</strong>{this.state.serviceProvider.firstName}</h5>
                                        <h5 className='text-left'><strong>Phone:&nbsp;</strong>{this.state.serviceProvider.phone}</h5>
                                        <h5 className='text-left'><strong>Email:&nbsp;</strong>{this.state.serviceProvider.email}</h5>
                                        <br/>
                                        <img className="img-thumbnail" src={image} style={{width: '60%'}} alt="service provider"/>
                                    </div>
                                </div>
                                <br/><br/>
                            <DateTime/>
                            </fieldset>
                            <hr />
                            <input type="submit" className="btn btn-lg btn-primary" value="Book Now" /><br /><br /><br />
                        </form>
                    </div>
                </div>
            </MainContainer >

        );
    }
}

export default Booking;
