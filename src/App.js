import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{ useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
    }
    else
    setMode('light');
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
        <TextForm heading="Enter Your Text Below"/>
      </div>
      {/* <div className='container my-3'>
        <About/>
      </div> */}
      
    </>
  );
}

export default App;
