import React,{useContext} from "react";
import  {GlobalInfo}  from "./App";
import SuperChild from "./SuperChild";

function Child(){
    const {appColor} = useContext(GlobalInfo);
    // console.warn("appColor",appColor);
    return(
      <>
      <div>
   <h1 style={{color:appColor, textAlign:"center"}}>THIS IS THE  ist FIRST CHILD COMPONENT</h1>
   <SuperChild/>
      </div>
      </>
    )
  }
  export default Child;