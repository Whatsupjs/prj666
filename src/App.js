import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from "./component/notfound/NotFound";
import Signup from "./component/signup/Signup";
import Home from "./component/home/Home";
import ServiceDetail from "./component/servicedetail/ServiceDetail";
import HouseKeeping from "./component/housekeeping/HouseKeeping";
import Profile from "./component/profile/Profile";
import UserService from './component/profile/UserService';
import UserBooking from './component/profile/UserBooking';


////  ONLY TO TEST THE SERVICE DETAIL PAGE  ////
////  PLEASE LEAVE IT UNTIL RATING AND MAP GETS IMPLEMENTED   ////
const serviceProvider = {
    name: "Keith Chen",
    phone: "647-123-1234",
    email: "karla123@gmail.com",
    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    detail: "",
    location: "TO BE ADDED AS A COORDINATION DEPENDING ON PLUG-IN",
    rate: 3.5,
    image: "./welding.jpg",    // the test image is located in the same folder as the component. for test we don,t need path
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

// MOCK DATA //
const mockuser = {
    firstName: 'Jack',
    lastName: 'Daniels',
    email: 'jd123@gmail.com',
    phone: '416-234-1234',
    street: '123 Fake Street',
    city: 'Springfield',
    province: 'ON',
    postal: 'L1H 2H4'
}
//................................................////


class App extends Component {

    render() {
        return (
            <BrowserRouter>

                <Switch>

                    <Route exact path='/' render={() => (
                        <Home />
                    )}/>

                    <Route exact path='/signup' render={() => (
                        <Signup />
                    )}/>

                    <Route exact path='/user/profile' render={() => (
                        <Profile user= { mockuser }/>
                    )}/>
                    
                    <Route exact path='/user/service' render={() => (
                        <UserService />
                    )}/>

                    <Route exact path='/user/booking' render={() => (
                        <UserBooking />
                    )}/>

                    {/*temporary*/
                    /*until we implement a link to access to servicedetail, I use plumbing link to access it */}
                    <Route exact path='/plumbing' render={() => (
                        <ServiceDetail serviceProvider={ serviceProvider }/>
                    )}/>

                    <Route exact path='/housekeeping' render={() => (
                        <HouseKeeping/>
                    )}/>

                    <Route render={() => (
                        <NotFound/>
                    )}/>

                </Switch>

             </BrowserRouter>
        );
    }

}

export default App;
