import React from 'react';

export default function Hero({ data }) {
  return (
    <div
      className='container-fluid text-white'
      style={{
        backgroundImage: `url('https://wallpapers.com/images/hd/white-pattern-background-9h9odksu8vajwpxb.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        padding: '2rem',
        fontFamily: 'Caveat' 
        
      }}
    id='home'
    >
      <div className="row h-100 align-items-center" >
        {/* LEFT: Tagline & Features */}
        <div className="col-md-6 mb-4">
          <h1 className='display-5 fw-bold text-dark mb-4'>{data.caption}</h1>
          <div className="row">
            {data.features.map((feature, index) => (
              <div className='col-6 mb-3 d-flex align-items-center gap-2' key={index}>
                <i className={`${feature.icon} fs-4`} style={{ color: '#63E6BE' }}></i>
                <span className='fw-semibold text-success subtitle'>{feature.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Carousel */}
        <div className="col-md-6">
          <div id="carouselExample" className="carousel slide w-100">
            <div className="carousel-inner rounded shadow">
              {data.heroCarousel.map((img, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <img
                    src={img.bgImg}
                    className="d-block w-100"
                    alt={img.tagCaption || 'Slide'}
                    style={{ maxHeight: '350px', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control" aria-hidden="true">
                <i className='fa-solid fa-arrow-left fa-2x' style={{color:"rgb(147, 233, 10"}}></i>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control" aria-hidden="true">
                 <i className='fa-solid fa-arrow-right fa-2x' style={{color:'rgb(147, 233, 10'}}></i>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
