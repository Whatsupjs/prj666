import React, { Component, Profiler } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from "./NotFound";
import SignUp from "./component/signup/Signup";
import Home from "./component/home/Home";
import Discover from "./component/discover/Discover";
import Profile from "./component/profile/Profile";
import Booking from "./component/booking/Booking";
import BookingForm from "./component/booking/BookingForm";
import BookingForm2 from "./component/booking/BookingForm2";
import ServiceDetail from "./component/servicedetail/ServiceDetail";
import Example from "./component/Example_for_sidebar/Example";


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
//................................................////


class App extends Component {

    render() {
        return (
            <BrowserRouter>

                <Switch>

                    <Route exact path='/' render={() => (
                        <Home />
                    )} />

                    <Route exact path='/Home' render={() => (
                        <Home />
                    )} />

                    <Route exact path='/signup' render={() => (
                        <SignUp />
                    )} />

                    <Route exact path='/Discover' render={() => (
                        <Discover />
                    )} />

                    <Route exact path='/Booking' render={() => (
                        <Booking />
                    )} />

                    <Route exact path='/BookingForm' render={() => (
                        <BookingForm />
                    )} />

                    <Route exact path='/BookingForm2' render={() => (
                        <BookingForm2 />
                    )} />

                    <Route exact path='/Profile' render={() => (
                        <Profile />
                    )} />


                    {/*temporary*/
                    /*until we implement a link to access to servicedetail, I use plumbing link to access it */}
                    <Route exact path='/plumbing' render={() => (
                        <ServiceDetail serviceProvider={serviceProvider} />
                    )} />

                    <Route exact path='/housekeeping' render={() => (
                        <Example />
                    )} />

                    <Route render={() => (
                        <NotFound />
                    )} />

                </Switch>

            </BrowserRouter>
        );
    }

}

export default App;
