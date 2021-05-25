import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../../actions";
import { Row, Col, Button, Card } from "react-bootstrap";
import Message from "../Message";
const FavScreen = ({ match, history }) => {


  const noteId = match.params.id;

  const dispatch = useDispatch();

  const fav = useSelector((state) => state.fav);
  const { favItems } = fav;

  useEffect(() => {
    if (noteId) {
      dispatch(addToFav(noteId));
    }}, [dispatch, noteId, history]);

  const removeFromFavHandler = (id) => {
    dispatch(removeFromFav(id));
  };

  return (
    <>
      <Row >
      
        <Col className='header-login__gradient--down'>
          <h1>Favoritos</h1>
          <h2>¡Hola!</h2>
          <h2>Aquí tienes tu espacio de notas</h2>
          {favItems.length === 0 ? (
            <Message>
              {" "}
              <strong>
                {" "}
                Tu lista de favoritos está vacía.{" "}
                <Link to="/" style={{ color: "black" }}>
                  {" "}
                  Regresa{" "}
                </Link>{" "}
              </strong>
            </Message>
          ) : (
            <>
              <Card variant="flush" className='overlay-div'>
                {favItems.map((item) => (
                  <Card.Body key={item.note}>
                    <Card.Title>
                      <Link to={`/note/${item.note}`}>
                        <h1 style={{ color: "#F55A00" }}>{item.title}</h1>
                      </Link>
                    </Card.Title>
                    <Card.Text as="div">
                    <Row>
                      <Col xs={6} md={4}>
                      
                      </Col>
                      <Col xs={6} md={4}>
                      <Button
                        type="button"
                        variant="dark"
                        className="btn btn-dark my-3"
                        style={{ color: "#F55A00" }}
                        onClick={() => removeFromFavHandler(item.note)}
                      >
                        Remover <i className="fas fa-trash"></i>
                      </Button></Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                ))}
              </Card>
            </>
          )}
        </Col>
      </Row>
    </>
  );
};

export default FavScreen;