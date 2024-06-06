import React from "react";

const Square =(props)=>{
   return (
    <div 
    onClick={props.onClick}
    style={{
        border: "1px solid",
        height: "65px", 
        width: "35%", 
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
        }} 
    className="square">
        <h5>{props.value}</h5>
    </div>

   );
};

export default Square;