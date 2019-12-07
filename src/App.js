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
import Login from './component/login/Login';
import Booking from './component/booking/Booking';
import { MuiThemeProvider } from '@material-ui/core';


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

// sessionStorage.setItem("email", "cheersallgoods@gmail.com");
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

                    <Route exact path='/login' render={() => (
                        <Login />
                    )}/>    

                    <Route exact path='/user/profile' render={() => (
                        <Profile/>
                    )}/>
                    
                    <Route exact path='/user/service' render={() => (
                        <UserService />
                    )}/>

                    <Route exact path='/user/booking' render={() => (
                        <UserBooking />
                    )}/>

                    <Route exact path='/booking' render={() => (
                        <Booking />
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
