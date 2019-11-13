import React, { Component } from 'react';
import HeaderSmall from "../headerSmall/HeaderSmall";
import Footer from '../footer/Footer';
import SideBar from "../sidebar/Sidebar";
import Page from '../page/Page';
import TabHolder from '../tabHolder/TabHolder';
import Form from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap'

import "./Discover.css";


class Discover extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <HeaderSmall />

                <div className="offset-md-1 col-md-9" id="midbg">

                    <Form id="innerForm" className="col-md-9">
                        <Row>
                            <Col className="col-md-3">
                                <p>sidebar test</p></Col>
                            <Col className="col-md-6">
                                <TabHolder />

                            </Col>
                        </Row>
                    </Form>
                </div>



                <Footer />


            </>


        );
    }
}

export default Discover;
