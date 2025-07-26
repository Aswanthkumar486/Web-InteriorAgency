import React from 'react';

export default function Team({ data }) {
  return (
    <section className="py-5 bg-light" style={{fontFamily: 'Caveat' }}>
      <div className="container text-center mb-5">
        <h2 className="display-5 fw-bold">Our Professional Designers</h2>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {data.map((person, index) => (
            <div key={index} className="col-sm-6 col-lg-3 mb-4 d-flex justify-content-center">
              <div className="card shadow text-center" style={{ width: '100%', maxWidth: '280px' }}>
                <img
                  src={person.image}
                  alt={person.name}
                  className="card-img-top rounded-circle mx-auto mt-3"
                  style={{ width: '150px', height: '110px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">{person.name}</h5>
                  <p className="text-muted small mb-3">{person.role}</p>
                  <div className="d-flex justify-content-center gap-3 fs-5">
                    <a href={person.social.facebook} target="_blank" rel="noopener noreferrer" className="text-primary">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href={person.social.twitter} target="_blank" rel="noopener noreferrer" className="text-info">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={person.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
