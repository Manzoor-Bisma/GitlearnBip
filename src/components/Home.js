// rafc

import { Link } from 'react-router-dom'
import React, { useState,useContext,useEffect } from 'react';
import noteContext from '../context/notes/noteContext';


export default function Home(props) {
const a = useContext(noteContext)
useEffect(() => {
    a.update();
    // eslint-disable-next-line
}, [])
// const [text,setText]= useState('Write Something About You!');

    return (
        <>
<div className="card text-center" style={{width: "18rem;"}}>
  <div className="card-body">
    <h5 className="card-title"> {a.state.title}</h5>
    <p className="card-text">{a.state.text}</p>
    <Link to="#" className="btn btn-primary">{a.state.button}</Link>
  </div>
  </div>

{/* <div className="card text-center" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card text-end" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
        </>
    )
}

