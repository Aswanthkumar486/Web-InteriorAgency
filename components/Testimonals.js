import React from 'react';

export default function Testimonials({ data }) {
  return (
    <div className="container my-5" style={{fontFamily: 'Caveat' }}>
      <h2 className="text-center mb-4">Client Feedback</h2>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {data.map((item, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-circle me-3"
                      width="80"
                      height="80"
                      style={{ objectFit: 'cover' }}
                    />
                    <div>
                      <h5 className="mb-0">{item.name}</h5>
                      <small className="text-muted">{item.role}</small>
                    </div>
                  </div>

                  <div className="p-3 rounded" style={{ backgroundColor: '#e6f4ea' }}>
                    <p className="mb-2">"{item.comment}"</p>
                    <div>
                      {[...Array(item.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-warning me-1"></i>
                      ))}
                      {[...Array(5 - item.rating)].map((_, i) => (
                        <i key={i} className="far fa-star text-muted me-1"></i>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
}
