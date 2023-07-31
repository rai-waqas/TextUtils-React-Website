import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        if (text.length===0) {
            props.showAlert('Please enter some text in the textbox','danger');
        }
        else{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to uppercase!','success');
        }
    }
    const handleLoClick= ()=>{
        if (text.length===0) {
            props.showAlert('Please enter some text in the textbox','danger');
        }
        else{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to lowercase!','success');
        }
    }
    const handleRmSpaces= ()=>{
        if (text.length===0) {
            props.showAlert('Please enter some text in the textbox','danger');
        }
        else{
        let newText = text.replaceAll(' ','');
        setText(newText);
        props.showAlert('Spaces has been removed from text!','success');
        }
    }
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    const handleClearText= ()=>{
        if (text.length===0) {
            props.showAlert('Please enter some text in the textbox','danger');
        }
        else{
        setText('');
        props.showAlert('Text cleared!','success');
        }
    }
    const handleCopyText = ()=>{
        if (text.length===0) {
            props.showAlert('Please enter some text in the textbox','danger');
            return "";
        }
        else{
        var text1 = document.getElementById('mybox');
        text1.select();
        navigator.clipboard.writeText(text1.value);
        props.showAlert('Text copied!','success');
        }
    }
    const countWords = (word) =>{
        if (text.length===0) {
            props.showAlert('Please enter some text in the textbox','danger');
            return 0;
        }
        else{
        let words = word.split(" ");
        let filteredWords = words.filter(words => words !== '');
        return filteredWords.length;
        }
    }
    const [text, setText] = useState('');
    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black' }} >
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{border: '1px solid',color: props.mode==='dark'?'white':'black' , backgroundColor: props.mode==='dark'?'#354957':'white'}} id="mybox" rows="7"></textarea>
        </div>
        <button className={`btn btn-${props.mode==='light'?'primary':'success'} mx-1`} onClick={handleUpClick}>Convert to UpperCase</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'success'} mx-1`} onClick={handleLoClick}>Convert to LowerCase</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'success'} mx-1`} onClick={handleRmSpaces}>Remove Spaces</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'success'} mx-1`} onClick={handleClearText}>Clear Text</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'success'} mx-1`} onClick={handleCopyText}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black' }}>
        <h2>
            Here is Your Text Summary
        </h2>
        <p>{text.length===0?0:countWords(text)} words and {text.length} characters</p>
        <p>{text.length===0?0:0.008 * countWords(text)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
