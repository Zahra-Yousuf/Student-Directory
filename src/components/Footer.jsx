function Footer() {
  return (
    <footer className="bg-dark text-white mt-4 py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h5>Links</h5>
            <p className="small">
              Home<br />
              Computer Science<br />
              Courses<br />
              Reports
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h5>Contact Info</h5>
            <p className="small">
              Contact Us<br />
              +1: 123 456 7890<br />
              trm@studentportal.com
            </p>
          </div>
        </div>
        <hr />
        <p className="text-center small mb-0">
          &copy; 2024 StudentPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
