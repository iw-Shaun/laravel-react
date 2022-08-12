import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <footer class="bg-dark text-center text-lg-start">
                <div class="text-center text-muted">
                    © 2022 develop : &nbsp;
                    <a class="text-muted" href="https://iSweety.com.tw/">
                        iSweety.com.tw
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;
