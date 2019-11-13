import React, { Component } from 'react';
import '../../index.css';

//folder name change? 

class Footer extends Component {
    render() {
        const contact = 'Contact QuickService \n Seneca@York Campus \n 70 The Pond Road \n Toronto, ON M3J 3M6';
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row footer">
                        <div className="footer">Copyright &copy; 2019 QuickService</div>
                        <div className="col-sm-6">
                            <div className="newline">{contact}</div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
