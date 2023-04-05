import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ProfilePage from "./components/ProfilePage";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Container className="container-fluid justify-content-center px-1">
          <MyHeader />
        </Container>
        <Routes>
          <Route path="/" element={<TVShows />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
