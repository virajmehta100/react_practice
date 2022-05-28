import React,{useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value); //to set a new value dynamically
    }

    const [text, setText]=useState('Enter Text Here');
    //text = "new text"; //Wrong way to change the state
    //setText("Viraj is progressing");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}

TextForm.propTypes={
    heading: PropTypes.string
}
