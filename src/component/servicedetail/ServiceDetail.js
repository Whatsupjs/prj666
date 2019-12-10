import React, { Component } from 'react';
import querString from 'query-string';
import MainContainer from '../maincontainer/MainContainer';


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

        let query = querString.parse(props.location.search);
        let props_ = JSON.parse(query.pack);

        // Grabs data on load to display
        this.state = {
            service: props_.service,
            serviceProvider: props_.service.provider,
            stars: props_.stars,
            image: props_.image,

            //temporary until we add comments on database- update loop to this.state.service.comment then
            comments: [
                "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores",
                "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores"
            ]
        }
    }

    render() {
        const image = require('../../images/' + `${this.state.image}`);
        return (
            <MainContainer highlight="" hasSidebar={false}>
                <div className="well" style={ boxStyle }>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-thumbnail" src={image} alt="service provider"/>
                            </div>
                            
                            <div className="col-md-5">
                                <h2 className='text-left'><strong>{this.state.service.name}</strong></h2>
                                <br/>
                                <h3 className='text-left'><strong>Introduction:</strong></h3>
                                <h4 className='text-left'>{this.state.service.introduction}</h4>
                                <h3 className='text-left'><strong>Price:&nbsp;</strong>${this.state.service.price}</h3>
                                <h3 className='text-left'><strong>Provider:&nbsp;</strong>{this.state.serviceProvider.firstName}</h3>
                                <h3 className='text-left'><strong>Phone:&nbsp;</strong>{this.state.serviceProvider.phone}</h3>
                                <h3 className='text-left'><strong>Email:&nbsp;</strong>{this.state.serviceProvider.email}</h3>
                                <br/>

                                {/* Links Book button to Booking page of the selected Service Item */}
                                <a href={`/booking`} className="btn btn-outline-info btn-lg btn-block">Book</a>
                                {/*/booking:id=${this.state.service.id}*/}
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <br/>
                                <div style={{ color: 'orange' }}><h1><strong>{this.state.stars}</strong></h1></div>
                                <br/>
                                <h3 className='text-left'>Comments:</h3>
                                <br/>
                                <table className="table table-responsive text-left" style={ tableStyle }>
                                    <tbody>
                                    {
                                        // Loops through the Comments array and displays each Comment using map()
                                        this.state.comments.map((comment,index) => {
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

                            <div className="col-md-5">
                                <br/>
                                <br/>
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
