import React, { Component } from 'react';

class ServiceItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            service: props.service
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <strong>{this.props.service.provider.firstName} {this.props.service.provider.lastName}</strong>
                                </div>
                                <div class="panel-body">
                                    <div className="col-sm-3">
                                        <h1>IMAGE</h1>
                                        <img className="img-thumbnail" src={require(`${this.props.service.image}`)} alt="google map"/>
                                    </div>
                                    <div className="col-sm-9">
                                        Phone Number: {this.props.service.provider.phone}
                                        Email: {this.props.service.provider.email}
                                        Rate: {this.props.service.rate}
                                        <a href="/">Details</a>
                                    </div>
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
