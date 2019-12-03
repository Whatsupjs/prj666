import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';
import { Redirect, withRouter } from 'react-router-dom';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';


class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repassword: '',
            emailValid: false,
            passwordVaild: false,
            formValid: false,
            toProfile: false
        }
    }

    // update state variable whenever user inputs.
    onChange = (e) => {
        this.handleUserInput(e);
    }

    onSubmit = (e) => {
        e.preventDefault();   //prevents actual submission.
        console.log(this.state); // just checking values; remove once done.
        this.setState(() => ({ toProfile: true }));
        /* later on implement database entry */
    }

    handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(value)
     
  }
  onCalChange = date => this.setState({ date }) 
  onTimeChange = time => this.setState ({ time })

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
                                        <label htmlFor="first_name">Name:</label>
                                        <input className="form-control" name="firstName" type="text" value={this.state.firstName} onChange={this.onChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="first_name">Contact Number:</label>
                                        <input className="form-control" name="firstName" type="text" value={this.state.firstName} onChange={this.onChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="first_name">Special Requirements:</label>
                                        <textarea className="form-control" name="firstName" rows="10" type="text" value={this.state.firstName} onChange={this.onChange} required />
                                    </div>
                                </div>
                                <TimePicker
          onTimeChange={this.onChange}
          value={this.state.time}
        />
                                <Calendar
                    onCalChange = {this.onCalChange} 
                    value = {this.state.date} />
                            </fieldset>
                            <hr />
                            <input type="submit" className="btn btn-lg btn-primary" value="Book NOw" disabled={!this.state.formValid} /><br /><br /><br />
                        </form>
                    </div>
                </div>
            </MainContainer >

        );
    }
}

export default Signup;
