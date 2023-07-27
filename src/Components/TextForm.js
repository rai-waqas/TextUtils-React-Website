import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        let newText = text.toUpperCase();
        setText(newText);;
    }
    const handleLoClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText);;
    }
    const handleRmSpaces= ()=>{
        let newText = text.replaceAll(' ','');
        setText(newText);;
    }
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text Here");
    
  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleRmSpaces}>Remove Spaces</button>
    </div>
    <div className="container my-3">
        <h2>
            Here is Your Text Summary
        </h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
