import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        //console.log(this.props.highlight);
        return(
            <div className="col-sm-3 col-md-2 sidebar">
                <div className="serviceRating">
                    <h6>Service Rating</h6>
                    <ul className="nav-sidebar">
                        <li><a href="#">&#9733;&#9733;&#9733;&#9733;&#9733; &amp; Up</a> </li>
                        <li><a href="#">&#9733;&#9733;&#9733;&#9733;&#9734; &amp; Up</a> </li>
                        <li><a href="#">&#9733;&#9733;&#9733;&#9734;&#9734; &amp; Up</a> </li>
                        <li><a href="#">&#9733;&#9733;&#9734;&#9734;&#9734; &amp; Up</a> </li>
                        <li><a href="#">&#9733;&#9734;&#9734;&#9734;&#9734; &amp; Up</a> </li>
                    </ul>
                </div>
                <div className="priceRange">
                    <h6>Price Range</h6>
                    <ul className="nav-sidebar">
                        <li><a href="#">Under $25</a></li>
                        <li><a href="#">$25 - $50</a></li>
                        <li><a href="#">$50 - $100</a></li>
                        <li><a href="#">$100 - $200</a></li>
                        <li><a href="#">$200 and above</a></li>
                    </ul>
                </div>
                <div className="location">
                    <h6>Location</h6>
                    <ul className="nav-sidebar">
                        <li><a href="#">Mississauga</a></li>
                        <li><a href="#">Toronto</a></li>
                        <li><a href="#">Markham</a></li>
                        <li><a href="#">North York</a></li>
                        <li><a href="#">Oakville</a></li>
                    </ul>
                </div>
                <div>
                    <button type="button">Filter</button>
                </div>
          </div>
        );
    };
}

export default Sidebar;