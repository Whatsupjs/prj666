

import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';
import { Redirect, withRouter } from 'react-router-dom';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import DateTime from './DateTime';


class Booking extends Component {

    constructor(props) {
        super(props);
        this.state = {

         
                user: {},
                isMounted: false,
                date: '',
                dateT: DateTime.handleDateChange
            



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











   handleDateChange = date => {
    this.setSelectedDate(date);
  };

    // update state variable whenever user inputs.
    onChange = (e) => {
        this.handleUserInput(e);
    }

    onSubmit = (e) => {
        e.preventDefault();   //prevents actual submission.
        this.state.date = DateTime.date
        console.log("dateeeeT", this.state.dateT)
        /* later on implement database entry */
    }

    handleUserInput = (e) => {
    
      const name = e.target.name;
      const value = e.target.value;
     
  }


//   async updateUser(data) {
//     //get user id from session storage to track client's userid
//     try {
//         const request = new Request("http://localhost:3001/updateUser", {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data),
//         });

//         const response = await fetch(request);
//         const status = await response.status;
//     }
//     catch (error) {
//         console.log("ERROR: " + error);
//     }
// }


  

    render() {
        if (this.state.toProfile === true) {
            return <Redirect to='/user/profile' />
        }

        


        return (
            <MainContainer>
                <div className="signup">
                    <div className="container">
                        <br />
                        <h2>Booking Information</h2>
                        <br />

                        <form onSubmit={this.onSubmit}>
                            <fieldset className="booking">
                                <div className="panel panel-default">
                  
                                </div>
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
                                        <textarea className="form-control" name="firstName" rows="10" type="text" value={this.state.specialReq} onChange={this.onChange} required />
                                    </div>
                                </div>

                            <DateTime value={this.state.test} onChange={this.onChange}/>
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
