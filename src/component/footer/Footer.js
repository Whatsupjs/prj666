import React, { Component } from 'react';

//import '../../index.css';
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <>
                <br />
                <br />


                <div>
                    <footer id="footer">
                        <div className="row">
                            <div className="offset-md-1 col-md-3" id="footercopy">
                                Copyright &copy; 2019 QuickService
                                </div>
                            <div className="offset-md-1 col-md-2" id="footertitle">
                                Product
                            </div>
                            <div className=" col-md-2" id="footertitle">
                                Team
                            </div>
                            <div className="col-md-2" id="footertitle">
                                Network
                            </div>

                        </div>
                        <div className="row">
                            <div className="offset-md-5 col-md-2" id="footertext">
                                <a href="" />Question
                            </div>
                            <div className=" col-md-2" id="footertext">
                                <a href="" />About
                            </div>
                            <div className=" col-md-2" id="footertext">
                                <a href="" />Git Hub
                            </div>
                        </div>

                        <div className="row">
                            <div className="offset-md-5 col-md-2" id="footertext">
                                <a href="" />Rate
                            </div>
                            <div className=" col-md-2" id="footertext">
                                <a href="" />Advertise
                            </div>
                            <div className=" col-md-2" id="footertext">
                                <a href="" />Linkedin
                            </div>
                        </div>

                        <div className="row">
                            <div className="offset-md-5 col-md-2" id="footertext">
                                <a href="" />Report
                            </div>
                            <div className=" col-md-2" id="footertext">
                                <a href="" />Contact us
                            </div>
                            <div className="col-md-2" id="footertext">
                                <a href="" />Twitter                            </div>
                        </div>

                        <div className="row">
                            <div className="offset-md-9 col-md-2" id="footertext">
                                <a href="" />Other
                            </div>
                        </div>

                    </footer>
                </div>
            </>
        );
    }
}

export default Footer;
