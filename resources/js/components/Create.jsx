import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import LOGO from "../../../public/images/c橫式編排.png";

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    componentDidMount() {
        axios
            .get("/api/contacts")
            .then((response) => {
                this.setState({
                    contacts: response.data,
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="warp container mt-2">
                <div class="header">
                    <img src={LOGO} alt="" class="logo" />
                    <div class="content mb-4">
                        <h1>填報說明</h1>
                        Remember, you should run the npm run dev command each
                        time you change a Vue component. Or, you may run the npm
                        run watch command to monitor and automatically recompile
                        your components each time they are modified.
                    </div>
                </div>

                <div className="col-md-12 mb-4">
                    <div className="card">
                        <div className="card-title text-center">
                            <h2>新增專案</h2>
                        </div>

                        <div className="container">
                            {/* 第二行 */}
                            <section className="mt-3">
                                <div class="input-group mb-3 mr-2">
                                    <span class="input-group-text">
                                        專案名稱
                                    </span>
                                    <input
                                        type="text"
                                        class="form-control"
                                        aria-label="Amount (to the nearest dollar)"
                                    />
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">
                                        新增工作類別
                                    </span>
                                    <input
                                        type="text"
                                        class="form-control"
                                        aria-label="Amount (to the nearest dollar)"
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        新增
                                    </button>
                                </div>
                            </section>

                            {/* 工作內容 */}
                            <div class="mb-3">
                                <span class="input-group-text">工作類別</span>
                                <div className="container flexcenter">
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                        <label class="form-check-label">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                        <label class="form-check-label">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                        <label class="form-check-label">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                        <label class="form-check-label">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                        <label class="form-check-label">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                        <label class="form-check-label">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                        <label class="form-check-label">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                        <label class="form-check-label">
                                            Default checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 按鈕 */}
                    <div className="flexcenter mt-3 mb-3">
                        <Link
                            to="/add"
                            className="btn btn-blue col-md-3 m-2 btn-sm"
                        >
                            <h4>送出</h4>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;
