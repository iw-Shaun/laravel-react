import React from "react";
import ReactDOM from "react-dom";

class Add extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name : '',
            tel : ''
        }
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Add Component</div>
    
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;
