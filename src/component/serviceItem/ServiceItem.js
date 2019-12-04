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
        if (this.state.service.rate == 1) { this.state.service.provider.stars = "★☆☆☆☆"; }
        else if (this.state.service.rate == 2) { this.state.service.provider.stars = "★★☆☆☆"; }
        else if (this.state.service.rate == 3) { this.state.service.provider.stars = "★★★☆☆"; }
        else if (this.state.service.rate == 4) { this.state.service.provider.stars = "★★★★☆"; }
        else if (this.state.service.rate == 5) { this.state.service.provider.stars = "★★★★★"; }
        else { this.state.service.provider.stars = "☆☆☆☆☆"; }

        const image = require('../../images/' + `${this.state.image}`);
        return (
                <div className="card" style={{border: '4px solid lightsteelblue', margin: '6px', backgroundColor: 'azure'}}>
                    <div className="card-header">
                        <strong>{this.state.service.provider.firstName} {this.state.service.provider.lastName}</strong>
                    </div>
                    <div className="card-body">
                        <div className="">
                            <br/>
                            <img className="img-thumbnail" src={image} alt="HK"/>
                        </div>
                        <div className="">
                            <br/>
                            Phone Number: {this.state.service.provider.phone}
                            <br/>
                            Email: {this.state.service.provider.email}
                            <br/>
                            Rate: {this.state.service.provider.stars}
                            <br/>
                        </div>
                    </div>
                    <div className="card-footer">
                        <a href="/" className="btn btn-primary">Details</a>
                    </div>
                </div>
        );
    }
}

export default ServiceItem;
