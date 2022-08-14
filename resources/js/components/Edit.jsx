import React from "react";
import ReactDOM from "react-dom";

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tel: "",
            address: "",
        };
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handleTelInputChange = this.handleTelInputChange.bind(this);
        this.handleAddressInputChange = this.handleAddressInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios
            .get(`/api/contact/${id}/edit`)
            .then((response) => {
                console.log(response);
                this.setState({
                    name: response.data.name,
                    tel: response.data.tel,
                    address: response.data.address,
                });
            })
            .catch((error) => console.log(error.response.data));
    }

    handleNameInputChange(event) {
        this.setState({
            name: event.target.value,
        });
    }
    handleTelInputChange(event) {
        this.setState({
            tel: event.target.value,
        });
    }
    handleAddressInputChange(event) {
        this.setState({
            address: event.target.value,
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const id = this.props.match.params.id;
        axios
            .put(`/api/contact/${id}/update`, {
                name: this.state.name,
                tel: this.state.tel,
                address: this.state.address,
            })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    name: "",
                    tel: "",
                    address: "",
                });
                this.props.history.push("/test");
            })
            .catch((error) => console.log(error.response.data));
    }

    render() {
        return (
            <div className="container mt-4">
                <h1>Add</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Add Component</div>

                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            required
                                            onChange={
                                                this.handleNameInputChange
                                            }
                                            value={this.state.name || ''}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            required
                                            onChange={this.handleTelInputChange}
                                            value={this.state.tel || ''}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            required
                                            onChange={
                                                this.handleAddressInputChange
                                            }
                                            value={this.state.address || ''}
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
            </div>
        );
    }
}

export default Edit;
