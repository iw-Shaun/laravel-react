import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        axios
            .get(`/api/contacts`)
            .then((response) => {
                this.setState({
                    contacts: response.data,
                });
            })
            .catch((error) => console.log(error.response.data));
    }

    delete(id, e) {
        e.preventDefault();
        axios
            .delete(`/api/contact/${id}/delete`)
            .then((response) => {
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
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts !== null
                            ? this.state.contacts.map((contact) => (
                                  <tr key={contact.id}>
                                      <td>{contact.name}</td>
                                      <td>{contact.tel}</td>
                                      <td>{contact.address}</td>
                                      <td>
                                          <Link
                                              to={`/${contact.id}/edit`}
                                              className="nav-link"
                                          >
                                              edit
                                          </Link>
                                              <div
                                                  type="submit"
                                                  onClick={(e)=>this.delete(contact.id,e)}
                                                  className="nav-link"
                                              >
                                                  Delete
                                              </div>
                                      </td>
                                  </tr>
                              ))
                            : null}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Test;
