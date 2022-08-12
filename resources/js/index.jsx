import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Subscription from "./components/Subscription";
import History from "./components/History";
import Create from "./components/Create";
import ShowAll from "./components/ShowAll";

function Index() {
    return (
        <BrowserRouter>
            <div className="full-height">
                <Navbar></Navbar>
                <Switch>
                    <Route path="/" exact component={History} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/main" exact component={Main} />
                    <Route path="/create" exact component={Create} />
                    <Route path="/showAll" exact component={ShowAll} />
                    <Route path="/history" exact component={History} />
                    <Route path="/sub" exact component={Subscription} />
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
