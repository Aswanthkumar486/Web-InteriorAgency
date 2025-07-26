import React from 'react';

export default function Contact({ data }) {
  return (
    <div className="container my-5 " id="contact" style={{fontFamily: 'Caveat' }}>
      <div className="row">
        <div className="col-md-6 mb-4 bg-success">
          <h2 className="mb-4">Get In Touch</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="your@email.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" placeholder="Your phone number" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div className="col-md-6 bg-dark text-light text-center">
          <h2 className="mb-4">Contact Information</h2>
          <ul className="list-unstyled">
            <li className="mb-3">
              <i className="fas fa-map-marker-alt me-2 text-success"></i>
              {data.address}
            </li>
            <li className="mb-3">
              <i className="fas fa-envelope me-2 text-success"></i>
              <a href={`mailto:${data.email}`} className="text-light">{data.email}</a>
            </li>
            <li className="mb-3">
              <i className="fas fa-phone-alt me-2 text-success"></i>
              <a href={`tel:${data.phone}`} className="text-light">{data.phone}</a>
            </li>
            <li>
              <i className="fas fa-clock me-2 text-success"></i>
              {data.hours}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
