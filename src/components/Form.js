import React from 'react'





// const [text,setText]= useState('Write Something About You!');

export default function Form(props) {
     const handleSubmit=(e)=> {
      e.preventDefault();
      console.log('You clicked submit.');
        }
   
    return(
        <form onSubmit={handleSubmit}>
        <h1 className="text-center" style={{textDecoration: "underline"}}>{props.head}</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" style={{fontWeight: "bold"}}>{props.email}</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Id" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">{props.email_description}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" style={{fontWeight: "bold"}}>{props.password}</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Your"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1" style={{fontWeight: "bold"}}>{props.check}</label>
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-primary">{props.submit}</button>
        </div>
      </form>

    )
}

