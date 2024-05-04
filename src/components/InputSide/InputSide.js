import React, {useState, useEffect} from 'react';
import "./InputSide.css"
import physicsFormula from '../../data'; 


const InputSide = ({setChoice, choice}) => {
    
    const [value, setValue] = useState("")

        useEffect(() => {
            console.log(choice.name)
        },[choice]);
        
    const HandleSubmit = (e) => {
        e.preventDefault()
        setChoice(physicsFormula[value])
    }

    return (
        <div id="InputContainer">
            <h1>Input Size</h1>
            <div>
                <p id="choice" for="cars">Choose a Physics Formula:</p>
            <form onSubmit={HandleSubmit}>
                <select id="selectionBox" name="formula" value={value} onChange={e  => setValue(e.target.value)}>
                    <option value="Acceleration">Acceleration</option>
                    <option value="Velocity">Velocity</option>
                    <option value="Force">Force</option>  
                </select>
                <button type="submit" id="inputBTN">Submit</button>
            </form>
            </div>
        </div>
    );
}

export default InputSide;
