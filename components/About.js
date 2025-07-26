import React from 'react'

export default function About({data}) {
  return (
    <div className="container text-center" id='about' style={{fontFamily: 'Caveat' }}>
  <div className="row">
    <div className="col">
    <img src={data.images[0]} alt="about1" className="img-fluid rounded shadow-sm mb-3" />

    </div>
    <div className="col">
                <img src={data.images[1]} alt="about2" className="img-fluid rounded shadow-sm" />
    </div>
    <div className="col-6">
      <h1 className='h1 text-bold'>{data.title}</h1>
      <p className=''>{data.description}</p>

      {data.features.map((feature,i)=>{
        return(
            <li key={i} className='list-group-item d-flex inline'>
 <i className="fa fa-check text-success me-2"></i>{feature}</li>
        )
      })}
     
                
              
    </div>
  </div>
  </div>
  )
}
