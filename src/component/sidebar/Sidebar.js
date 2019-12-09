import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    //construct with page state to modularize links to each service types.
    constructor(props) {
        super(props);
        this.state = {
            page: ''
        }
    }

    //sets state's page with matching page name from sessionStorage
    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({page: sessionStorage.getItem("page")}) //After 1 second, set render to true
        }.bind(this), 1000);
    }
    
    //links acts as filter button with query url
    render() {
        return(
            <div className="sidebar">
                <div className="filterName serviceRating">
                    <h6>Service Rating</h6>
                    <ul className="filter nav-sidebar">
                        <li><Link to={'/' + this.state.page +'/rating/4'}>&#9733;&#9733;&#9733;&#9733;&#9734; &amp; Up</Link> </li>
                        <li><Link to={'/' + this.state.page +'/rating/3'}>&#9733;&#9733;&#9733;&#9734;&#9734; &amp; Up</Link> </li>
                        <li><Link to={'/' + this.state.page +'/rating/2'}>&#9733;&#9733;&#9734;&#9734;&#9734; &amp; Up</Link> </li>
                        <li><Link to={'/' + this.state.page +'/rating/1'}>&#9733;&#9734;&#9734;&#9734;&#9734; &amp; Up</Link> </li>
                    </ul>
                </div>
                <div className="filterName priceRange">
                    <h6>Price Range</h6>
                    <ul className="filter nav-sidebar">
                        <li><Link to={'/' + this.state.page +'/price/1'}>Under $25</Link></li>
                        <li><Link to={'/' + this.state.page +'/price/2'}>$25 - $50</Link></li>
                        <li><Link to={'/' + this.state.page +'/price/3'}>$50 - $100</Link></li>
                        <li><Link to={'/' + this.state.page +'/price/4'}>$100 - $200</Link></li>
                        <li><Link to={'/' + this.state.page +'/price/5'}>$200 and above</Link></li>
                    </ul>
                </div>
                <div className="filterName location">
                    <h6>Location</h6>
                    <ul className="filter nav-sidebar">
                        <li><Link to={'/' + this.state.page +'/loc/mississauga'}>Mississauga</Link></li>
                        <li><Link to={'/' + this.state.page +'/loc/toronto'}>Toronto</Link></li>
                        <li><Link to={'/' + this.state.page +'/loc/markham'}>Markham</Link></li>
                        <li><Link to={'/' + this.state.page +'/loc/brampton'}>Brampton</Link></li>
                        <li><Link to={'/' + this.state.page +'/loc/oakville'}>Oakville</Link></li>
                    </ul>
                </div>
          </div>
        );
    };
}

export default Sidebar;
