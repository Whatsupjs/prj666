import React, { Component } from 'react';
import HeaderSmall from "../headerSmall/HeaderSmall";
import Footer from '../footer/Footer';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form'
import { Col, Row, CardColumns } from 'react-bootstrap'
import { Button } from 'react-bootstrap';

import "./Booking.css";

class BookingForm2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <HeaderSmall />

        
                <div className="offset-md-2 col-md-9" id="midbg">
<p>test form2</p>

                </div>

               

                <Footer />

            </>
        );
    }
}

export default BookingForm2;
