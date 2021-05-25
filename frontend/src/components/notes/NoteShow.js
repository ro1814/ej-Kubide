import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNote, deleteNote, addToFav } from "../../actions";
import LoadingSpinner from "../LoadingSpinner";

class NoteShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchNote(id);
  }
  
  handleDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deleteNote(id);
  };

  addToFavHandler = (history, match) => {
    history.push(`/fav/${match.params.id}`);
  };
  render() {
    if (!this.props.note) {
      return <LoadingSpinner />;
    }

    const { id, title, description } = this.props.note;
    
    return (
      <div className="jumbotron">
        <h1>{title}</h1>
        <p>{description}</p>
        <br />
        <button
          onClick={this.addToFavHandler}
          className="btn btn-dark float-right my-3"
          type="button"
          style={{ color: "#F55A00" }}
        >Add to fav list
        </button>
        <Link to={`/note/edit/${id}`} className="btn btn-success">
          Edit
        </Link>
        <button
          style={{ marginLeft: "10px" }}
          type="button"
          onClick={this.handleDeleteClick}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { note: state.notes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {
  fetchNote,
  deleteNote,
  addToFav,
})(NoteShow);
