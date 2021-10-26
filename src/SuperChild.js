import React,{useContext} from "react";
import  {GlobalInfo}  from "./App";

function SuperChild(){
    // const {appColor,getDay} = useContext(GlobalInfo);
    // const {appStyle} = useContext(GlobalInfo);
    const {bStyle} = useContext(GlobalInfo);


    

    // const day="Sunday";
    // console.warn("appColor",appColor);
    return(
      <>
      <div>
   <h1 style={{borderStyle:bStyle ,textAlign:"center"}}> THIS IS THE SUPER CHILD COMPONENT</h1>
   {/* <button onClick={()=>getDay(day)}> ClICK me</button> */}
      </div>
      </>
    )
  }
  export default SuperChild;