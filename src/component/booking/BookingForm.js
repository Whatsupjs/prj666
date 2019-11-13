import React, { Component } from 'react';
import HeaderSmall from "../headerSmall/HeaderSmall";
import Footer from '../footer/Footer';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form'
import { Col, Row, CardColumns } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import Page from '../page/Page';

import "./Booking.css";

class BookingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            where: '',
            type: '',
            timeStart: '',
            timeEnd: '',
            promotion: '',

        }


    }

    render() {
        return (
            <>
                <HeaderSmall />


                <div className="offset-md-2 col-md-9" id="midbg">

                    <Form >
                        <fieldset>
                            <div className="booking">
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Where:</label>
                                    <input className="form-control" name="location" type="text" value={this.state.location} required />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Service Type:</label>
                                    <input className="form-control" name="type" type="text" value={this.state.type} required />
                                </div>
                            </div>



                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Time Available</label>
                                    <div>
                                        <input className="form-control" name="timeStart" type="text" value={this.state.timeStart} className="col-md-3" required />

                                        &nbsp;&nbsp;&nbsp;&nbsp;

                                        <input className="form-control offset-md-2" name="timeEnd" type="text" className="col-md-3" value={this.state.timeEnd} required />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </Form>

                    <br />
                    <hr />
                    <Form>
                        <br />
                        <br />
                        <h3> Find out you may like:</h3>
                        <br />
                        <Page />
                    </Form>
                </div>



                <Footer />

            </>
        );
    }
}

export default BookingForm;
