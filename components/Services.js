import React from 'react'

export default function Services({ data }) {
  return (
    <section className="py-5" id='services' style={{fontFamily: 'Caveat' }}>
      <div className="container">
        <h1 className='text-center mb-5'>
          Why People <span className='text-uppercase text-success bg-light px-2'>Choose Us</span>
        </h1>

        <div className="row text-center g-4">
          {data.map((ele, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="p-4  rounded h-100">
                <i className={`fa-3x mb-3 text-success  ${ele.icons}`}></i>
                <h4 className="mb-2">{ele.name}</h4>
                <p className="mb-0 text-muted">{ele.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
