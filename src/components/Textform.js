import React , {useState} from 'react'
 import PropTypes from 'prop-types';

//handle of event

export default function Textform(props) {
    const handleUpClick=()=>{
        var newText=text.toUpperCase();
        setText(newText);
        
    }

    const handleLoClick=()=>{
        var newText=text.toLowerCase();
        setText(newText);
    }

    const handleCopy=()=>{    
        var copyText=document.getElementById("mybox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert(" Copied to Clipboard","success");
    }

    const handleCapitalize = () => {
      let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
      setText(newText);
    }

    const handleClearText=()=>{
      var newText="";
      setText(newText);
    }

     const handleReverse = () => {
      var newText = text.split(' ').reverse().join(' ');
      setText(newText);
    };

    const centerText = () => {    
      var centerText = document.getElementById('mybox');
      centerText.innerText = 'Center Text';
      centerText.style.color = 'black';
      centerText.style.textAlign = 'center';  
   } 

   const leftText = () => {    
    var centerText = document.getElementById('mybox');
    centerText.innerText = 'Center Text';
    centerText.style.color = 'black';
    centerText.style.textAlign = 'left';  
  }

  const rightText = () => {    
    var centerText = document.getElementById('mybox');
    centerText.innerText = 'Center Text';
    centerText.style.color = 'black';
    centerText.style.textAlign = 'right';  
  }

  // To remove extra spaces from text:
const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
    }

   const handleOnChange=(event)=>{
    console.log("Hi on change");
    setText(event.target.value);
  }
    const[text,setText]= useState('');

  return (
    <>
    
        <div className="textcontainer"  style ={{color: props.mode==='dark'?'white':'black' } }  >
        <h2>{props.heading}</h2>
  <div className="mb-3">
    <textarea className="from-control "  onChange={handleOnChange} style ={{backgroundColor: props.mode==='light'?'white':'#a7a8d2', color: props.mode==='dark'?'black':'black' , width : '600px'} }value={text}  id="mybox" rows="10"  ></textarea>
  </div>
 
  <button type="submit" className="btn btn-outline-info mx-3" onClick={handleUpClick}>Upper Case</button>
  <button type="submit" className="btn btn-outline-info mx-3" onClick={handleLoClick}>Lower Case</button>
  <button type="submit" className="btn btn-outline-info mx-3" onClick={handleCapitalize}> Capitalize </button>
  <button type="submit" className="btn btn-outline-info mx-3" onClick={leftText}> <i class="fa-solid fa-align-left"></i></button>
  <button type="submit" className="btn btn-outline-info mx-3" onClick={centerText}> <i class="fa-solid fa-align-center"></i></button>
  <button type="submit" className="btn btn-outline-info mx-3" onClick={rightText}> <i class="fa-solid fa-align-right"></i></button>
  <button type="submit" className="btn btn-outline-info mx-3" onClick={handleExtraSpaces}> Remove ExtraSpace</button>
  <button type="submit" className="btn btn-outline-info mx-3 my-2" onClick={handleCopy}> Copy </button>
  <button type="submit" className="btn btn-outline-info mx-3" onClick={handleReverse}> Reverse</button>

  <button type="submit" className="btn btn-outline-info mx-3" onClick={handleClearText}> Clear</button>

  </div>

<div className="container my-2" style ={{color: props.mode==='dark'?'white':'black' }} >
    <h2>Text Summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length}seconds - Reading Time </p>
    <h2> Preview </h2>
    <p> {text.length>0 ? text: "Nothing to preview !"}</p>
</div>

</>
  )
}
