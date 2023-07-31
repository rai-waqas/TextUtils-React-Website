import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert= (message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#354957';
      showAlert('Dark mode has been enabled.','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert('Light mode has been enabled.','success');
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      
      <div className='container my-3'>
          <TextForm heading="Enter Your Text Below" mode={mode} showAlert={showAlert}/>
      </div>
      </>
    
  );
}

export default App;
