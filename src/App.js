
import './App.css';
import InputSide from './components/InputSide/InputSide';
import DisplaySide from './components/DisplaySide/DisplaySide';

import {useState} from 'react';

function App() {

  const [choice, setChoice] = useState({})

  return (
    <div className="App">
      
      <InputSide setChoice = {setChoice} choice={choice}/>
      <DisplaySide choice={choice} />
    </div>
  );
}

export default App;
