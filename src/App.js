import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from "./component/notfound/NotFound";
import Signup from "./component/signup/Signup";
import Home from "./component/home/Home";
import ServiceDetail from "./component/servicedetail/ServiceDetail";
import Category from "./component/category/Category";
import Profile from "./component/profile/Profile";
import UserService from './component/profile/UserService';
import UserBooking from './component/profile/UserBooking';
import Login from './component/login/Login';
import Booking from './component/booking/Booking';



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

                    {/*<Route exact path='/booking' render={() => (
                        <Booking />
                    )}/>*/}

                    <Route exact path='/housekeeping' render={() => (
                        <Category title={ "House Keeping" }/>
                    )}/>

                    <Route exact path='/plumbing' render={() => (
                        <Category title={ "Plumbing" }/>
                    )}/>

                    <Route exact path='/cooking' render={() => (
                        <Category title={ "Cooking" }/>
                    )}/>

                    <Route exact path='/all' render={() => (
                        <Category title={ "All" }/>
                    )}/>

                    <Route path='/detail' component={ServiceDetail}/>

                    <Route path='/filter' component={Category}/>

                    <Route path='/book' component={Booking}/>

                    <Route render={() => (<NotFound/>)}/>

                </Switch>

             </BrowserRouter>
        );
    }

}

export default App;
