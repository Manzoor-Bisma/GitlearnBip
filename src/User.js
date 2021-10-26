import './App.css';
import React, { useEffect, useState} from 'react'

function App(props){
  
    useEffect(()=>{
    //   console.warn("use effect is called")
    alert("count is"+ props.count)
    }, [props.count])

    return(
      <>
      <div className="App">
      <p className="h1 bg-secondary text-white my-4" style={{height:"70px"}}>Students Count:  {props.count} </p>
      <p className="h1 bg-warning text-dark my-4" style={{height:"70px"}}>Students Attendence:  {props.data} </p>
      </div>
      </>
    )
  }
  export default App;