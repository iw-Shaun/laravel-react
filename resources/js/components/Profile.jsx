import React from "react";
import ReactDOM from "react-dom";
import LOGO from "../../../public/images/c橫式編排.png";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tel: "",
        };
    }

    render() {
        return (            
        <div className="warp container">
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

        <div className="col-md-12 mb-4">{/* 按鈕 */}</div>
    </div>
        );
    }
}

export default Profile;
