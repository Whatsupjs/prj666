import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     }
    // }
    
    render() {
        const page = sessionStorage.getItem("page");
        return(
            <div className="sidebar">
                <div className="filterName serviceRating">
                    <h6>Service Rating</h6>
                    <ul className="filter nav-sidebar">
                        <li><Link to={'/' + page +'/rating/4'}>&#9733;&#9733;&#9733;&#9733;&#9734; &amp; Up</Link> </li>
                        <li><Link to={'/' + page +'/rating/3'}>&#9733;&#9733;&#9733;&#9734;&#9734; &amp; Up</Link> </li>
                        <li><Link to={'/' + page +'/rating/2'}>&#9733;&#9733;&#9734;&#9734;&#9734; &amp; Up</Link> </li>
                        <li><Link to={'/' + page +'/rating/1'}>&#9733;&#9734;&#9734;&#9734;&#9734; &amp; Up</Link> </li>
                    </ul>
                </div>
                <div className="filterName priceRange">
                    <h6>Price Range</h6>
                    <ul className="filter nav-sidebar">
                        <li><Link to={'/' + page +'/price/1'}>Under $25</Link></li>
                        <li><Link to={'/' + page +'/price/2'}>$25 - $50</Link></li>
                        <li><Link to={'/' + page +'/price/3'}>$50 - $100</Link></li>
                        <li><Link to={'/' + page +'/price/4'}>$100 - $200</Link></li>
                        <li><Link to={'/' + page +'/price/5'}>$200 and above</Link></li>
                    </ul>
                </div>
                <div className="filterName location">
                    <h6>Location</h6>
                    <ul className="filter nav-sidebar">
                        <li><Link to={'/' + page +'/loc/mississauga'}>Mississauga</Link></li>
                        <li><Link to={'/' + page +'/loc/toronto'}>Toronto</Link></li>
                        <li><Link to={'/' + page +'/loc/markham'}>Markham</Link></li>
                        <li><Link to={'/' + page +'/loc/brampton'}>Brampton</Link></li>
                        <li><Link to={'/' + page +'/loc/oakville'}>Oakville</Link></li>
                    </ul>
                </div>
          </div>
        );
    };
}

export default Sidebar;
