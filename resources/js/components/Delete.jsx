import React from "react";
import ReactDOM from "react-dom";

class Delete extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        axios
            .delete(`/api/contact/${id}/delete`)
            .then(() => {
                console.log('delete');
            })
            .catch((error) => console.log(error.response.data));
    }

    render() {
        return (
            <div className="container mt-4">
                <h1>Delete successful</h1>
            </div>
        );
    }
}

export default Delete;
