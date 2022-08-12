import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import LOGO from "../../../public/images/c橫式編排.png";

class ShowAll extends React.Component {
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

                <div className="col-md-12 mb-4">{/* 按鈕 */}</div>
            </div>
        );
    }
}

export default ShowAll;
