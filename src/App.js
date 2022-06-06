//import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
//let name = "Viraj";
//let company = "Oracle FSS";
function App() {
  const [mode,setMode] = useState('dark'); //Whether dark mode is enabled
  const [mode1,setMode1] = useState('Enable Light Mode')
  const [mode2,setMode2] = useState('light');
  const [alert,setAlert] = useState(null);
  //const [mode3,setMode3] = useState('#7FFFD4');

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      setMode1('Enable Light Mode');
      document.body.style.backgroundColor = 'grey';
      showAlert("Darkmode has been enabled!","success");
      setMode2('light')
      //document.title = 'TextUtils | Dark Mode';
      /*setInterval(() => {
        document.title = 'TextUtils is amazing';
      },2000);
      setInterval(() => {
        document.title = 'Install the Plugin now';
      }, 1500);*/
    }
    else{
      setMode('light');
      setMode1('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been enabled!","success");
      setMode2('dark');
      //document.title = 'TextUtils | Light Mode';
    }
  }
  
  return (
    <>
    
      <Navbar title="Viraj" aboutViraj="Achievements" mode={mode} toggleMode={toggleMode} switchText={mode1} mode2={mode2}/>
      {/*<Navbar/>*/}
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        {/*<About/>*/}
      </div>
    </>
    
  );
}

export default App;
