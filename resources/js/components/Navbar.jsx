import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import LOGO from "../../../public/images/LOGO.png";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <Link to="/" className="navbar-brand ms-4">
                    <img
                        className="mr-2"
                        src={LOGO}
                        alt=""
                        width="30"
                        height="30"
                    />
                    isweety demo
                </Link>
                {/* MENU */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-2">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">
                                    首頁
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link">
                                    個人報表
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/showAll" className="nav-link">
                                    全報表
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">
                                    新增專案
                                </Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/sub" className="nav-link">
                                    訂閱系統
                                </Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/history" className="nav-link">
                                    個人report紀錄
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/test" className="nav-link">
                                    test
                                </Link>
                            </li> 
                            <li className="nav-item">
                                <Link to="/add" className="nav-link">
                                    add
                                </Link>
                            </li> 
                            <li className="nav-item">
                                <Link to="/edit" className="nav-link">
                                    edit
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
