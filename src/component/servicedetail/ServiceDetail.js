import React, { Component } from 'react';
import MainContainer from '../../MainContainer';

const boxStyle = {
    margin: '2em',
    border: '5px solid brown',
    padding: '1em'
};

const tableStyle = {
    maxHeight: '400px'
};

class ServiceDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceProvider: props.serviceProvider,
            stars: "⭐⭐️⭐️⭐️⭐️️"  /* only to demonstrate the component. will be deleted later*/
        }
    }

    componentDidMount() {
        /* https://github.com/auxiliary/rater  */
        /* OR */
        /* https://github.com/fredolss/rater-js */
        /* a plug-in to be added later */
        let options = {
            max_value: 5,
            step_size: 0.5,
            initial_value: this.state.serviceProvider.rate,
            readonly: true
        }

        //$(".rating").rate(options);
    }

    render() {
        return (
            <MainContainer>
                <div className="well" style={ boxStyle }>

                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-sm-6">
                                <img className="img-thumbnail" src={require(`${this.state.serviceProvider.image}`)} alt="service provider"/>
                            </div>

                            <div className="col-sm-5">
                                <h2 className='text-left'><strong>{this.state.serviceProvider.name}</strong></h2>
                                <br/>
                                <h3 className='text-left'><strong>Introduction: </strong></h3>
                                <h4 className='text-left'>{this.state.serviceProvider.introduction}</h4>
                                <h3 className='text-left'><strong>Phone Number: </strong></h3>
                                <h4 className='text-left'>{this.state.serviceProvider.phone}</h4>
                                <h3 className='text-left'><strong>Email: </strong></h3>
                                <h4 className='text-left'>{this.state.serviceProvider.email}</h4>
                            </div>

                        </div>
                    </div>


                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-sm-6">
                                {/* rating now is based on a static value only to show the componet*/}
                                <br/>
                                <div className="to_be_defined"><h2><strong>{this.state.stars}</strong></h2></div>
                                <br/>
                                <h3 className='text-left'>Comments:</h3>
                                <br/>
                                <table className="table table-responsive text-left" style={ tableStyle }>
                                    <tbody>
                                    {
                                        this.state.serviceProvider.comments.map((comment,index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{comment}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>

                            <div className="col-sm-5">
                                {/* the image link will be changed to something like: src={this.state.serviceProvider.location} */
                                /* this needs to be passed to the Location component. To be implemented later */
                                /* https://www.npmjs.com/package/google-map-react */
                                /* using static image now only to demonstrate the component */}
                                <img className="img-thumbnail" src={require('./google.png')} alt="google map"/>
                            </div>

                        </div>
                    </div>

                </div>

            </MainContainer>
        );
    }
}

export default ServiceDetail;
