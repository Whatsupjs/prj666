import React, { Component } from 'react';

class ServiceItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            service: this.props.service
        }
    }

    /*componentWillMount() {
        console.log(this.props.service);
        this.props.service.imag = '../../public/images/' + this.props.service.imag;
        console.log(this.props.service.imag );
        this.setState({state: this.props.service });
    }*/

    render() {
        return (
            <div className="col-md-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <strong>{this.state.service.provider.firstName} {this.state.service.provider.lastName}</strong>
                            </div>
                            <div className="panel-body">
                                <div className="col-md-3">
                                    <img className="img-thumbnail" src={`${this.state.service.image}`} alt="image"/>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceItem;
