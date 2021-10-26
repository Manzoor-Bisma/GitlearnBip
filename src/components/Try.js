
import React, {useState} from 'react'

// import PropTypes from 'prop-types'


export default function Try(props) {
  const handleUpClick=()=>{
    // console.log("upeercase was clicked: " + text);
    let newText = text.toUpperCase();
    
    setText(newText)

}
const handleOnChange=(event)=>{
    // console.log("omchange was clixked");
    setText(event.target.value);
}
const [text,setText]= useState('Write Something About You!');
    return(
            // <div classNameName="container1">
            //     <h1>{props.name}</h1>
            //     <h2>{props.age}</h2>
            //     <h3>{props.gender}</h3>
          
            // </div>
     <div className="card" style={{width: "18rem;"}}>
        {/* <img src={}  /> */}
        {/* <h1 className="text-center bg-dark text-white mb-4 py-3 " >Member </h1> */}

        <div className="card-body">
            <hr />  
            <h3 className="card-title text-success fs-1" style={{textAlign:"center"}}>{props.Card_title}</h3>
            <h5 className="card-text text-danger fs-3" style={{textAlign:"center"}}>{props.card_text}</h5>
        </div>
        <ul className="list-group list-group-flush">
           <li className="list-group-item bg-secondary text-white fs-1" style={{textAlign:"center"}}>{props.sec_item}</li>
           <li className="list-group-item bg-warning text-dark fs-1" style={{textAlign:"center"}}>{props.thr_item}</li>
           <li className="list-group-item bg-info text-black fs-2" style={{textAlign:"center"}}>{props.ist_item}</li>
         </ul>
         <div className>
            <h1 className=" text-center  bg-light text-success my-5">{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control me-2" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            <div className="text-center">
            <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert</button>
            </div> 
            </div>
        </div>
         <div className="card-body">
         <div className="text-center">
          <button className="btn btn-outline-success fs-3" style={{width: "50px;"}} > <a href="#" className="card-link">{props.ist_link}</a> </button>
           {/* <a href="#" className="card-link">{props.sec_link}</a> */}
         </div>
         </div>
         <hr/>
    </div>          
   )
 }

// export default function Try(props) 
//     return(
//             <div classNameName="container1">
//                 <h1>{props.name}</h1>
//                 <h2>{props.age}</h2>
//                 <h3>{props.gender}</h3>
          
//             </div>
            
            
//     )
// }

// export default function Try(props){
//     return(
//         <div classNameName="card">
//             <img src={props.img} />
//             <div classNameName="card_body">
//                 <h1 classNameName="card_title">{props.title}</h1>
//                 <h3 classNameName="card_title">{props.gender}</h3>
//                 <p classNameName="card_discription">{props.status}</p>
//             </div>
//             <button classNameName="card_button">view</button>

//         </div>
//     )
// }