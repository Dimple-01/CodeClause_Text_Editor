import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React, {useState} from 'react';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode, setMode]= useState('');
  const[alert, setAlert]= useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>
    {
      setAlert(null);
    },1500)

  }


  const toggleMode=()=>{
    if( mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","Sucess");

    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#121c27';
      
      showAlert("Dark mode has been enabled","Sucess");
      
    }
    
  }
  return (
   <>
  {/* <Router> */}
<Navbar title='Text Editor' mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className='container' style={{ textAlign: "center" }}>
{/* <Switch>
          <Route path="/about">
          <About mode={mode}/>

          </Route>

          <Route path="/">
          <Textform showAlert={showAlert} heading='Enter the text to analyze' mode={mode}/>
          </Route>

 </Switch> */}
 <Textform showAlert={showAlert} heading='Enter the text to analyze' mode={mode}/>
</div>
{/* </Router> */}
   </>
  );
}

export default App;


