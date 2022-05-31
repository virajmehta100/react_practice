import React,{useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
        console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value); //to set a new value dynamically
    }

    const [text, setText]=useState('');
    //text = "new text"; //Wrong way to change the state
    //setText("Viraj is progressing");
  return (
    <>  
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008* (text.split(" ").length-1)} : Total timetaken to read {text.split(" ").length-1} words</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

TextForm.propTypes={
    heading: PropTypes.string
}
