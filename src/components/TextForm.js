import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick=()=>{
    // console.log("upeercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText)

}
const handleOnChange=(event)=>{
    // console.log("omchange was clixked");
    setText(event.target.value);
}
const [text,setText]= useState('Enter Your Text Here');
// console.log(useState('enter your text11'))
// setText=("new rext")

    return (
        <div>
            <h1 className="text-center text-primary">{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control " style={{fontSize: "25px"}} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            <div className="text-center">
            <button className="btn btn-primary my-2"  style={{width: "50px;"}} onClick={handleUpClick}>lowercase Button</button>
            </div> 
            </div>
        </div>
    )
}
