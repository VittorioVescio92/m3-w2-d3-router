import { Alert, Container, Spinner } from "react-bootstrap";
import MoviesContainer from "./MoviesContainer.jsx";
import { useEffect, useState } from "react";

const MyMain = () => {
  const [TheLordOfTheRings, setTheLordOfTheRings] = useState([]);
  const [StarWars, setStarWars] = useState([]);
  const [HarryPotter, setHarryPotter] = useState([]);
  const [StarWarsIsLoading, setStarWarsIsLoading] = useState(true);
  const [HarryPotterIsLoading, setHarryPotterIsLoading] = useState(true);

  const [TheLordOfTheRingsIsLoading, setTheLordOfTheRingsIsLoading] = useState(true);
  const [StarWarsError, setStarWarsError] = useState(false);
  const [HarryPotterError, setHarryPotterError] = useState(false);
  const [TheLordOfTheRingsError, setTheLordOfTheRingsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://www.omdbapi.com/?apikey=4d29747d&s=Star wars");
        const data = await response.json();
        const movies = data.Search.filter(movie => movie.Type === "movie");
        setStarWars(movies);
        setStarWarsIsLoading(false);
      } catch (error) {
        setStarWarsIsLoading(false);
        setStarWarsError(true);
        console.error(error);
      }

      try {
        const response = await fetch("http://www.omdbapi.com/?apikey=4d29747d&s=Harry Potter");
        const data = await response.json();
        const movies = data.Search.filter(movie => movie.Type === "movie");
        setHarryPotter(movies);
        setHarryPotterIsLoading(false);
      } catch (error) {
        setHarryPotterIsLoading(false);
        setHarryPotterError(true);
        console.error(error);
      }

      try {
        const response = await fetch("http://www.omdbapi.com/?apikey=4d29747d&s=The lord of the rings");
        const data = await response.json();
        const movies = data.Search.filter(movie => movie.Type === "movie");
        setTheLordOfTheRings(movies);
        setTheLordOfTheRingsIsLoading(false);
      } catch (error) {
        setTheLordOfTheRingsIsLoading(false);
        setTheLordOfTheRingsError(true);
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Container className="container-fluid justify-content-center px-1">
        <MoviesContainer movies={StarWars} title="Star Wars" />
        {StarWarsIsLoading && !StarWarsError && (
          <div className="text-center mt-5">
            <Spinner variant="danger" animation="border" role="status" id="spinner">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {StarWarsError && <Alert variant="danger">Ops! Qualcosa è andato storto...</Alert>}

        <MoviesContainer movies={HarryPotter} title="Harry Potter" />
        {HarryPotterIsLoading && !HarryPotterError && (
          <div className="text-center mt-5">
            <Spinner variant="danger" animation="border" role="status" id="spinner">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {HarryPotterError && <Alert variant="danger">Ops! Qualcosa è andato storto...</Alert>}

        <MoviesContainer movies={TheLordOfTheRings} title="The Lord of the Rings" />
        {TheLordOfTheRingsIsLoading && !TheLordOfTheRingsError && (
          <div className="text-center mt-5">
            <Spinner variant="danger" animation="border" role="status" id="spinner">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {TheLordOfTheRingsError && <Alert variant="danger">Ops! Qualcosa è andato storto...</Alert>}
      </Container>
    </>
  );
};

export default MyMain;
