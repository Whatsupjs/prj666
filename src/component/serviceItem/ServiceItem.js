import React, { Component } from 'react';
const path = require('path');


class ServiceItem extends Component {
    constructor(props){
        super(props);

        let star_;
        if (props.service.rate > 4) { star_="★★★★★"; }
        else if (props.service.rate > 3) { star_ = "★★★★☆"; }
        else if (props.service.rate > 2) { star_ = "★★★☆☆"; }
        else if (props.service.rate > 1) { star_ = "★★☆☆☆"; }
        else if (props.service.rate > 0) { star_ = "★☆☆☆☆"; }
        else { star_ = "☆☆☆☆☆"; }

        this.state = {
            service: this.props.service,
            image: path.normalize(this.props.service.image),
            stars: star_
        };
    }

    render() {
        const image = require('../../images/' + `${this.state.image}`);
        return (
                <div className="card" style={{border: '4px solid gold', margin: '6px', backgroundColor: '#eeeeee'}}>
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
                            Rate: <span style={{ color: 'orange' }}>{this.state.stars}</span>
                            <br/>
                        </div>
                    </div>
                    <div className="card-footer">
                        <a href={`/detail?pack=${JSON.stringify(this.state)}`} className="btn btn-primary">Details</a>
                    </div>
                </div>
        );
    }
}

export default ServiceItem;
