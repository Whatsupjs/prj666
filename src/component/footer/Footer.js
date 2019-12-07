import React, { Component } from 'react';
import '../../index.css';

class Footer extends Component {
    render() {
        const contact = 'Contact QuickService \n Seneca@York Campus \n 70 The Pond Road \n Toronto, ON M3J 3M6';
        return (
            <div className="container-fluid">
                <div className="row footer">
                    <div className="col-md-offset-2 col-md-3">Copyright &copy; 2019 QuickService</div>
                    <div className="col-md-5" ></div>
                    <div className="col-md-3 col-md-offset-2">
                        <div className="newline">{contact}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
