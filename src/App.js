//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

//let name = "Viraj";
//let company = "Oracle FSS";
function App() {
  return (
    <>
    
      <Navbar title="Viraj" aboutViraj="Achievements"/>
      {/*<Navbar/>*/}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
    
  );
}

export default App;
