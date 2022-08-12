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
                            <h2>iSweety</h2>
                        </div>

                        <div className="container">
                            {/* 下拉式選單 */}
                            <section className="mt-3 mb-3">
                                <select class="btn btn-pink col-md-4">
                                    <option selected>選擇專案</option>
                                    <option value="1">SGK</option>
                                    <option value="2">ALS</option>
                                    <option value="3">VAS</option>
                                </select>
                                <select class="btn btn-pink col-md-4">
                                    <option selected>選擇工作類別</option>
                                    <option value="1">前端</option>
                                    <option value="2">後端</option>
                                    <option value="3">企劃</option>
                                </select>
                                <select class="btn btn-pink col-md-4">
                                    <option selected>選擇進度</option>
                                    <option value="1">進行中</option>
                                    <option value="2">已完成</option>
                                    <option value="3">Delay</option>
                                </select>
                            </section>

                            {/* 第二行 */}
                            <section>
                                <div class="input-group mb-3 mr-2">
                                    <span class="input-group-text">
                                        耗時(hr)
                                    </span>
                                    <input
                                        type="text"
                                        class="form-control"
                                        aria-label="Amount (to the nearest dollar)"
                                    />
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">日期</span>
                                    <input
                                        type="text"
                                        class="form-control"
                                        aria-label="Amount (to the nearest dollar)"
                                    />
                                </div>
                            </section>

                            {/* 工作內容 */}
                            <div class="input-group mb-3">
                                <span class="input-group-text">工作內容</span>
                                <textarea
                                    class="form-control"
                                    aria-label="With textarea"
                                ></textarea>
                            </div>
                        </div>

                        {/* <div className="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.contacts !== null
                                        ? this.state.contacts.map((contact) => (
                                              <tr key={contact.id}>
                                                  <td>{contact.name}</td>
                                                  <td>{contact.tel}</td>
                                                  <td></td>
                                              </tr>
                                          ))
                                        : null}
                                </tbody>
                            </table>
                        </div> */}
                    </div>
                    {/* 按鈕 */}
                    <div className="flexcenter mt-3 mb-3">
                        <Link
                            to="/add"
                            className="btn btn-blue col-md-3 m-2 btn-sm mr-5"
                        >
                            <h4>新增輸出欄位</h4>
                        </Link>
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
