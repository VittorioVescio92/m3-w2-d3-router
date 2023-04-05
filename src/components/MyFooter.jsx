import { Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer id="footer" className="container-fluid bg-dark py-2 px-5">
      <Row className="text-white-50">
        <Col xs={12} sm={6} md={3}>
          <div className="social d-flex justify-content-start text-white-50 fs-3 mb-3">
            <i className="pe-3 bi bi-facebook"></i>
            <i className="pe-3 bi bi-instagram"></i>
            <i className="pe-3 bi bi-twitter"></i>
            <i className="bi bi-youtube"></i>
          </div>
          <p>Audio and Subtitles</p>
          <p>Media Center</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </Col>
      </Row>
      <Row className="text-white-50 mt-5">
        <Col xs={12} className="d-flex justify-content-center">
          <p className="fs-6">© 1997-2019 Netflix Inc.</p>
        </Col>
      </Row>
    </footer>
  );
};

export default MyFooter;
