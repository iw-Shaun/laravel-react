import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import LOGO from "../../../public/images/c橫式編排.png";

class Home extends React.Component {
    render() {
        return (
            <div className="warp container">
                <div className="header">
                    <div className="content mb-4 flexcenter">
                        <div className="col-md-4">
                            <img src={LOGO} alt="" className="logo" />
                        </div>
                        <div className="col-md-8">
                            <h1>填報說明</h1>
                            Remember, you should run the npm run dev command
                            each time you change a Vue component. Or, you may
                            run the npm run watch command to monitor and
                            automatically recompile your components each time
                            they are modified.
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                        <div className="card-title text-center">
                            <div type="submit" class="btn btn-close">x</div>
                        </div>
                    <div className="mx-4">
                        {/* 下拉式選單 */}
                        <section className="mt-3 mb-3">
                            <div className="between col-md-7">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        專案
                                    </span>
                                    <select
                                        className="input-group-btn"
                                        defaultValue="0"
                                    >
                                        <option value="0"> </option>
                                        <option value="1">SGK</option>
                                        <option value="2">ALS</option>
                                        <option value="3">VAS</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        工作類別
                                    </span>
                                    <select className="input-group-btn">
                                        <option value="0"> </option>
                                        <option value="1">前端</option>
                                        <option value="2">後端</option>
                                        <option value="3">企劃</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        進度
                                    </span>
                                    <select className="input-group-btn">
                                        <option value="0"> </option>
                                        <option value="1">進行中</option>
                                        <option value="2">已完成</option>
                                        <option value="3">Delay</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-group">
                                <span className="input-group-text">
                                    花費時間
                                </span>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="input-group">
                                <span className="input-group-text">日期</span>
                                <input type="text" className="form-control" />
                            </div>
                        </section>

                        {/* 第二行 */}
                        <section></section>

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
                    <Link to="/add" className="btn btn-blue col-md-3">
                        新增欄位
                    </Link>
                    <Link to="/add" className="btn btn-blue col-md-3">
                        送出
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;
