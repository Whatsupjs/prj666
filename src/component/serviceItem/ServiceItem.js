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
                                    {/* <strong data-bind="text: FirstName LastName"></strong> */}
                                </div>
                                <div class="panel-body">
                                    <div className="col-sm-3">
                                        <h1>IMAGE</h1>
                                    </div>
                                    <div className="col-sm-9">
                                        Phone Number: {}
                                        Email: {}
                                        STAR-RATING <a href="/">Details</a>
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
