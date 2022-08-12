import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import LOGO from "../../../public/images/LOGO.png";

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
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
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-2">
                            <li class="nav-item">
                                <Link to="/home" className="nav-link">
                                    首頁
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/main" className="nav-link">
                                    個人報表
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/showAll" className="nav-link">
                                    全報表
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/create" className="nav-link">
                                    新增專案
                                </Link>
                            </li>
                            <li class="nav-item me-4">
                                <Link to="/sub" className="nav-link">
                                    訂閱系統
                                </Link>
                            </li>
                            <li class="nav-item me-4">
                                <Link to="/history" className="nav-link">
                                    個人report紀錄
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
