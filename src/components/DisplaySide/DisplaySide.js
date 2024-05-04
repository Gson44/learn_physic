import React, {useEffect} from 'react';
import "./DisplaySide.css";

const DisplaySide = ({choice}) => {

    useEffect(() => {
        
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    });
    

    return (
        <div id="DisplaySideContainer">
            <h1>DisplaySide</h1>
        
        <div id="dataContainer">
           <h2>{choice.name}</h2>
            <p>{choice.description}</p>
        </div>
           
            <canvas id="myCanvas" width="200" height="100" ></canvas>
        </div>
    );
}

export default DisplaySide;
