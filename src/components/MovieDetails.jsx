import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Spinner, Alert } from "react-bootstrap";

const MovieDetails = () => {
  const params = useParams();
  console.log(params);
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=4d29747d&i=${params.movieId}`);
      const data = await response.json();
      setMovie(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [params.movieId]);

  return (
    <Container className="my-5">
      {isLoading && (
        <div className="text-center">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {error && <Alert variant="danger">Ops! Qualcosa è andato storto...</Alert>}
      {!isLoading && !error && (
        <>
          <Row className="mb-4">
            <Col xs={12} md={4}>
              <Card className="bg-secondary">
                <Card.Img variant="top" src={movie.Poster} alt="Film Cover" />
              </Card>
            </Col>
            <Col xs={12} md={8}>
              <h1 className="text-light">{movie.Title}</h1>
              <p className="text-light">{movie.Year}</p>
              <ListGroup className="bg-secondary">
                <ListGroupItem className="bg-secondary">
                  <strong>Regista:</strong> {movie.Director}
                </ListGroupItem>
                <ListGroupItem className="bg-secondary">
                  <strong>Genere:</strong> {movie.Genre}
                </ListGroupItem>
                <ListGroupItem className="bg-secondary">
                  <strong>Trama:</strong> {movie.Plot}
                </ListGroupItem>
                <ListGroupItem className="bg-secondary">
                  <strong>Recensioni:</strong>{" "}
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default MovieDetails;
