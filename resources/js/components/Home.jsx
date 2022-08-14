import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import LOGO from "../../../public/images/c橫式編排.png";

class Home extends React.Component {
    render() {
        return (
            <div className="warp container mt-2">
                <div className="header">
                    <img src={LOGO} alt="" className="logo" />
                    <div className="content mb-4">
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
                                <select className="btn btn-pink col-md-4" defaultValue="0">
                                    <option value="0">選擇專案</option>
                                    <option value="1">SGK</option>
                                    <option value="2">ALS</option>
                                    <option value="3">VAS</option>
                                </select>
                                <select className="btn btn-pink col-md-4">
                                    <option value="0">選擇工作類別</option>
                                    <option value="1">前端</option>
                                    <option value="2">後端</option>
                                    <option value="3">企劃</option>
                                </select>
                                <select className="btn btn-pink col-md-4">
                                    <option value="0">選擇進度</option>
                                    <option value="1">進行中</option>
                                    <option value="2">已完成</option>
                                    <option value="3">Delay</option>
                                </select>
                            </section>

                            {/* 第二行 */}
                            <section>
                                <div className="input-group mb-3 mr-2">
                                    <span className="input-group-text">
                                        耗時(hr)
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-label="Amount (to the nearest dollar)"
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">日期</span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-label="Amount (to the nearest dollar)"
                                    />
                                </div>
                            </section>

                            {/* 工作內容 */}
                            <div className="input-group mb-3">
                                <span className="input-group-text">工作內容</span>
                                <textarea
                                    className="form-control"
                                    aria-label="With textarea"
                                ></textarea>
                            </div>
                        </div>
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

export default Home;
