import React from "react";
import ReactDOM from "react-dom";

class Test extends React.Component {
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
                console.log(response);
                this.setState({
                    contacts: response.data,
                });
            })
            .catch((error) => console.log(error.response.data));
    }

    render() {
        return (
            <div className="container mt-4">
                <h1>Test</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Add Component</div>

                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table">
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
                </div>
            </div>
        );
    }
}

export default Test;
