import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ShowAll from "./components/ShowAll";
import Create from "./components/Create";
import Subscription from "./components/Subscription";
import History from "./components/History";

import Test from "./components/Test";
import Add from "./components/Add";
import Edit from "./components/Edit";

function Index() {
    return (
        <BrowserRouter>
            <div className="full-height">
                <Navbar></Navbar>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/showAll" exact component={ShowAll} />
                    <Route path="/create" exact component={Create} />
                    <Route path="/sub" exact component={Subscription} />
                    <Route path="/history" exact component={History} />

                    <Route path="/test" exact component={Test} />
                    <Route path="/add" exact component={Add} />
                    <Route path="/:id/edit" exact component={Edit} />
                </Switch>
                <Footer></Footer>
            </div>
        </BrowserRouter>
    );
}

export default Index;

if (document.getElementById("app")) {
    ReactDOM.render(<Index />, document.getElementById("app"));
}
