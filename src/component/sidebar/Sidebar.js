import React, { Component } from 'react';

class Sidebar extends Component {

    //construct with page state to modularize links to each service types.
    constructor(props) {
        super(props);

        let page_ = window.location.pathname.replace(/\//g,'');
        if (page_ === 'housekeeping') { page_ = "House Keeping"}
        else if (page_ === 'plumbing') { page_ = "Plumbing"}
        else if (page_ === 'cooking') { page_ = "Cooking"}
        else { page_ = "All" }

        this.state = {
            page: page_,
            rate: '',
            priceRange: '',
            city: ''
        };

        this.selectRate = this.selectRate.bind(this);
        this.selectPrice = this.selectPrice.bind(this);
        this.selectCity = this.selectCity.bind(this);
    }

    selectRate = (event) => {
        console.log(this.state.page);
        this.setState({
            rate: event.target.value
        });
    };

    selectPrice = (event) => {
        this.setState({
            priceRange: event.target.value
        });
    };

    selectCity = (event) => {
        this.setState({
            city: event.target.value
        });
    };

    render() {
        return(
            <div className="sidebar">
                <br/><br/><br/>
                <div className="filterName serviceRating">

                    <h5>Service Rating</h5>
                    <ul className="filter nav-sidebar">
                        <li><label><input type="radio" value='4' checked={this.state.rate === '4'} onChange={this.selectRate}/>&nbsp; &#9733;&#9733;&#9733;&#9733;&#9734; &amp; Up</label></li>
                        <li><label><input type="radio" value='3' checked={this.state.rate === '3'} onChange={this.selectRate}/>&nbsp; &#9733;&#9733;&#9733;&#9734;&#9734; &amp; Up</label></li>
                        <li><label><input type="radio" value='2' checked={this.state.rate === '2'} onChange={this.selectRate}/>&nbsp; &#9733;&#9733;&#9734;&#9734;&#9734; &amp; Up</label></li>
                        <li><label><input type="radio" value='1' checked={this.state.rate === '1'} onChange={this.selectRate}/>&nbsp; &#9733;&#9734;&#9734;&#9734;&#9734; &amp; Up</label></li>
                    </ul>
                </div>

                <br/>
                <div className="filterName priceRange">

                    <h5>Price Range</h5>
                    <ul className="filter nav-sidebar">
                        <li><label><input type="radio" value='0-25' checked={this.state.priceRange === '0-25'} onChange={this.selectPrice}/>&nbsp; Under $25</label></li>
                        <li><label><input type="radio" value='25-50' checked={this.state.priceRange === '25-50'} onChange={this.selectPrice}/>&nbsp; $25 - $50</label></li>
                        <li><label><input type="radio" value='50-100' checked={this.state.priceRange === '50-100'} onChange={this.selectPrice}/>&nbsp; $50 - $100</label></li>
                        <li><label><input type="radio" value='100-200' checked={this.state.priceRange === '100-200'} onChange={this.selectPrice}/>&nbsp; $100 - $200</label></li>
                        <li><label><input type="radio" value='200-0' checked={this.state.priceRange === '200-0'} onChange={this.selectPrice}/>&nbsp; $200 and above</label></li>
                    </ul>
                </div>

                <br/>
                <div className="filterName location">

                    <h5>Location</h5>
                    <ul className="filter nav-sidebar">
                        <li><label><input type="radio" value='Mississauga' checked={this.state.city === 'Mississauga'} onChange={this.selectCity}/>&nbsp; Mississauga</label></li>
                        <li><label><input type="radio" value='Toronto' checked={this.state.city === 'Toronto'} onChange={this.selectCity}/>&nbsp; Toronto</label></li>
                        <li><label><input type="radio" value='Markham' checked={this.state.city === 'Markham'} onChange={this.selectCity}/>&nbsp; Markham</label></li>
                        <li><label><input type="radio" value='Brampton' checked={this.state.city === 'Brampton'} onChange={this.selectCity}/>&nbsp; Brampton</label></li>
                        <li><label><input type="radio" value='Oakville' checked={this.state.city === 'Oakville'} onChange={this.selectCity}/>&nbsp; Oakville</label></li>
                    </ul>
                </div>

                <br/><br/>
                <div>
                    <a className="btn btn-primary btn-lg" href={`/filter?pack=${JSON.stringify(this.state)}`}>Filter</a>
                </div>
                <br/><br/>
            </div>

        );
    };
}

export default Sidebar;
