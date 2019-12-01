import React, { Component } from 'react';
const path = require('path');


class ServiceItem extends Component {
    constructor(props){
        super(props);
        let image_ = path.normalize(this.props.service.image);
        this.state = {
            service: this.props.service,
            image: image_
        };
    }

    render() {
        const image = require('../../images/' + `${this.state.image}`);
        return (
                <div className="panel panel-default" style={{border: '2px solid', pading: '2px'}}>
                    <div className="panel-heading">
                        <strong>{this.state.service.provider.firstName} {this.state.service.provider.lastName}</strong>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-3">
                            <img className="img-thumbnail" src={image} alt="HK"/>
                        </div>
                        <div className="col-md-9">
                            Phone Number: {this.state.service.provider.phone}
                            <br/>
                            Email: {this.state.service.provider.email}
                            <br/>
                            Rate: {this.state.service.provider.rate}
                            <br/>
                            <a href="/">Details</a>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ServiceItem;
