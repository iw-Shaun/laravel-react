import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import LOGO from "../../../public/images/c橫式編排.png";

class Subscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tel: "",
        };
    }

    render() {
        return (
            <div className="container">
                <section>
                    <div className="col-md-3 mb-4 mt-3">
                        {/* title */}
                        <img src={LOGO} alt="" className="logo col-md-3" />
                        <div className="card">
                            <div className="card-title text-center">
                                <h2>成員列表</h2>
                            </div>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        A second item
                                    </li>
                                    <li className="list-group-item">
                                        A third item
                                    </li>
                                    <li className="list-group-item">
                                        A fourth item
                                    </li>
                                    <li className="list-group-item">
                                        And a fifth one
                                    </li>
                                </ul>
                        </div>
                    </div>

                    <div className="col-md-9 mt-3 mb-4">
                        <div className="header">
                            <div className="content mb-4">
                                <h1>訂閱說明</h1>
                                Remember, you should run the npm run dev command
                                each time you change a Vue component. Or, you
                                may run the npm run watch command to monitor and
                                automatically recompile your components each
                                time they are modified.
                            </div>
                        </div>
                        <div className="card">
                            {/* title */}
                            <div className="card-title text-center">
                                <h2>訂閱總覽</h2>
                            </div>

                            <div className="flexcenter">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label className="form-check-label">
                                        Default checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label className="form-check-label">
                                        Default checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label className="form-check-label">
                                        Default checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label className="form-check-label">
                                        Default checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label className="form-check-label">
                                        Default checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label className="form-check-label">
                                        Default checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label className="form-check-label">
                                        Default checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label className="form-check-label">
                                        Default checkbox
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* 按鈕 */}
                        <div className="flexcenter mt-3 mb-3">
                            <Link
                                to="/add"
                                className="btn btn-blue col-md-6 m-2 btn-sm mr-5"
                            >
                                儲存
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Subscription;
