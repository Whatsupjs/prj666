import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';
import { FormErrors } from './FormErrors';
import { Redirect, withRouter } from 'react-router-dom';


class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            repassword: '',
            formErrors: { email: '', password: '', repassword: '' },
            emailValid: false,
            passwordVaild: false,
            formValid: false,
            toProfile: false
        }
    }

    // update state variable whenever user inputs.
    onChange = (e) => {
        this.handleUserInput(e);
    };

    handleUserInput = (e) => {
        const { name, value } = e.target;

        if (e.target.name === 'repassword') {
            this.setState({ [name]: value }, () => { this.validateField(name, value) });
        } else {
            this.setState(prevState => ({
                user: {
                    ...prevState.user,
                    [name]: value
                }
            }),
                () => { this.validateField(name, value) });
        }

    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            case 'repassword':
                passwordValid = value === this.state.user.password;
                fieldValidationErrors.password = passwordValid ? '' : ' does not match';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    async addUser(data) {
        //get user id from session storage to track client's userid
        // const id = sessionStorage.getItem("id");
        try {
            console.log("Posting")
            console.log(data);
            const request = new Request("http://localhost:3001/addUser", {
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

    onSubmit = (e) => {
        e.preventDefault();   //prevents actual submission.
        console.log(this.state.user); // just checking values; remove once done.
        // this.setState(() => ({ toProfile: true }));
        
        const data = this.state.user;

        this.addUser(data);
    };

    render() {
        if (this.state.toProfile === true) {
            return <Redirect to='/user/profile' />
        }

        return (
            <MainContainer>
                <div className="signup">
                    <div className="container">
                        <br />
                        <h2>Create account</h2>
                        <br />

                        <form onSubmit={this.onSubmit}>
                            <fieldset className="signupform">
                                <div className="panel panel-default">
                                    <FormErrors formErrors={this.state.formErrors} />
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="first_name">First Name:</label>
                                        <input className="form-control" name="firstName" type="text" value={this.state.user.firstName} onChange={this.onChange} required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="last_name">Last Name:</label>
                                        <input className="form-control" name="lastName" type="text" value={this.state.user.lastName} onChange={this.onChange} required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                        <label htmlFor="email">Email:</label>
                                        <input className="form-control" name="email" type="email" value={this.state.user.email} onChange={this.onChange} />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                                        <label htmlFor="password">Password:</label>
                                        <input className="form-control" name="password" type="password" value={this.state.user.password} onChange={this.onChange} />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.repassword)}`}>
                                        <label htmlFor="repassword">Confirm Password:</label>
                                        <input className="form-control" name="repassword" type="password" value={this.state.repassword} onChange={this.onChange} />
                                    </div>
                                </div>
                            </fieldset>
                            <hr />
                            <input type="submit" className="btn btn-lg btn-primary" value="Create Account" disabled={!this.state.formValid} /><br /><br /><br />
                        </form>
                    </div>
                </div>
            </MainContainer >

        );
    }
}

export default Signup;
