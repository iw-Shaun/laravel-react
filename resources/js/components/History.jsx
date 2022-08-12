import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import LOGO from "../../../public/images/c橫式編排.png";

class History extends React.Component {
    render() {
        return (
            <div className="container mt-2">
                <div class="header">
                    <img src={LOGO} alt="" class="logo" />
                </div>

                <div className="col-md-12 mb-4">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">專案名稱</th>
                                <th scope="col">工作類別</th>
                                <th scope="col">工作內容</th>
                                <th scope="col">花費時間</th>
                                <th scope="col">進度</th>
                                <th scope="col">日期</th>
                                <th scope="col">修改</th>
                                <th scope="col">刪除</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default History;
