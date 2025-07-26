import React from 'react';

export default function Projects({ data }) {
  return (
    <div className='container py-5' id='projects' style={{fontFamily: 'Caveat' }}>
      <div className='row mb-4'>
        <section className='col text-center'>
          <h1>
            Our Latest <span className='text-uppercase text-success bg-light px-2'>projects</span>
          </h1>
          <h6 className='mt-3'>
            <span className='h1'>6</span> of our latest projects
          </h6>
        </section>
      </div>

      {/* Project Grid */}
      <div className='row g-4'>
        {data.map((ele, index) => (
          <div className='col-md-4' key={index}>
            <div className='text-center shadow p-3 rounded h-100'>
              <img
                src={ele.image}
                alt={ele.category}
                width='100%'
                height='200'
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
              <h5 className='mt-3 text-primary'>{ele.category}</h5>
              <span className='badge bg-success mb-2'>
                {ele.totalProjects} Projects
              </span>
              <p className='text-muted small'>{ele.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
