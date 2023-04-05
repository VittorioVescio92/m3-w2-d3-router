import { Row, Col, Card, Alert } from "react-bootstrap";

const MoviesContainer = ({ title, movies }) => {
  return (
    <>
      <div>
        <h3 className="text-light">{title}</h3>
      </div>
      <Row id="col" className="mb-5 mt-4 px-0">
        {movies.length > 0 ? (
          movies.map(movie => (
            <Col key={movie.imdbID} xs={12} sm={6} md={4} xl={3} className="g-3">
              <Card className="bg-secondary">
                <Card.Img variant="top" className="cover" src={movie.Poster} alt="Film Cover" />
              </Card>
            </Col>
          ))
        ) : (
          <Alert variant="danger">Nessun risultato trovato!</Alert>
        )}
      </Row>
    </>
  );
};

export default MoviesContainer;
