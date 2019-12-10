import React, { Component } from 'react';
import MainContainer from '../maincontainer/MainContainer';
import ServiceItem from '../serviceItem/ServiceItem';
import querString from 'query-string';

class Category extends Component {
    constructor(props){
        super(props);

        let title_, filter_;
        if (this.props.title) {
            title_ = this.props.title;
            filter_ = {};
        }
        else {
            let query = querString.parse(props.location.search);
            let props_ = JSON.parse(query.pack);
            title_ = props_.page;
            filter_ = {
                rate: props_.rate,
                priceRange: props_.priceRange,
                city: props_.city
            };
        }

        this.state = {
            filter: filter_,
            title: title_,
            services: []
        }
    }

    async componentDidMount() {
        try {

            // Grabs and fetches related data based on type of URL (Get All / Get Specific)

            sessionStorage.setItem("page", this.state.title);

            let title_ = encodeURI(this.state.title);
            let url = "";

            if (Object.entries(this.state.filter).length === 0 && this.state.filter.constructor === Object) {
                url = title_ === "All" ? "http://localhost:3001/services" : `http://localhost:3001/services?type=${title_}`;
            }
            else {
                let range = this.state.filter.priceRange;
                let priceMin = range.substring(0, range.indexOf('-', 0));
                let priceMax = range.substring(range.indexOf('-', 0) + 1);
                url = `http://localhost:3001/reduce/?title=${this.state.title}&rate=${this.state.filter.rate}`;
                url += `&priceMin=${priceMin}&priceMax=${priceMax}&city=${this.state.filter.city}`;
            }

            let response = await fetch(url, {method: 'GET'});
            const data = await response.json();
            this.setState({ services: data }); // Fills Services array with data returned from using the URL - May be empty
        }
        catch(error) {
            console.log("ERROR: " + error.messages);
        }
    }

    render() {
        // If there's no data in the Services array - Display unavailable page
        if (!this.state.services.length) {
            return (
                <MainContainer highlight={this.state.title} hasSidebar={true}>
                    <br/><br/>
                    <div className="w-auto h-100">
                        <br/><br/><br/>
                        <h3>No Provider Available Yet!</h3>
                        <br/>
                        <br/>
                        <h4>Please check back for updates.</h4>
                    </div>
                    <br/><br/>
                </MainContainer>
            )
        }
        // Only reaches this point in the code if the Services array contains data
        return (
            <MainContainer highlight={this.state.title} hasSidebar={true}>
                <div className="row w-auto h-100">
                {
                    // Loops through the Services array and displays each Service using map()
                    this.state.services.map((element, index) => {
                        return (
                            <div key={index} className="col-md-6">
                                <ServiceItem service={element}/>
                            </div>
                        );
                    })
                }
                </div>
            </MainContainer>
        )
    }
}

export default Category;
