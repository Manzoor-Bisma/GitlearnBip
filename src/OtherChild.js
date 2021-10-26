import React,{useContext} from "react";
import  {GlobalInfo}  from "./App";

function OtherChild(){
    // const {appColor} = useContext(GlobalInfo);
    const {tShadow} = useContext(GlobalInfo);

    // console.warn("appColor",appColor);
    return(
      <>
      <div>
   <h1 style={{textShadow:tShadow  ,textAlign:"center"}} className="text-dark bg-success" >THIS IS THE OTHER COMPONENT</h1>
      </div>
      </>
    )
  }
  export default OtherChild;