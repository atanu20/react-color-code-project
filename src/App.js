import React, {useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notification from './music/notification.mp3'
import {Howl} from 'howler';
import './App.css'
const data=[
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
  {id: 11},
  {id: 12},
  {id: 13},
  {id: 14},
  {id: 15},
  {id: 16},
  {id: 17},
  {id: 18},
  {id: 19},
  {id: 20},
  {id: 21},
  {id: 22},
  {id: 23},
  {id: 24},
  {id: 25},
  {id: 26},
  {id: 27},
  {id: 28},
  {id: 29},
  {id: 30},
  {id: 31},
  {id: 32},
  {id: 33},
  {id: 34},
  {id: 35},
  {id: 36},
  {id: 37},
  {id: 38},
  {id: 39},
  {id:40},
  {id: 41},
  {id: 42},
  {id: 43},
  {id: 44},
  {id: 45},
  {id: 46},
  {id: 47},
  {id: 48},
  {id: 49},
  {id: 50},
  {id: 51},
  {id: 52},
  {id: 53},
  {id: 54},
  {id: 55},
  {id: 56},
  {id: 57},
  {id: 58},
  {id: 59},
  {id:60},
  {id: 61},
  {id: 62},
  {id: 63},
  {id: 64},
  {id: 65},
  {id: 66},
  {id: 67},
  {id: 68},
  {id: 69},
  {id: 70},
  {id: 71},
  {id: 72},
  {id: 73},
  {id: 74},
  {id: 75},
  {id: 76},
  {id: 77},
  {id: 78},
  {id: 79},
  {id: 80},
  {id: 81},
  {id: 82},
  {id: 83},
  {id: 84},
  {id: 85},
  {id: 86},
  {id: 87},
  {id: 88},
  {id: 89},
  {id: 90},
  {id: 91},
  {id: 92},
  {id: 93},
  {id: 94},
  {id: 95},
  {id: 96},
  {id: 97},
  {id: 98},
  {id: 99},
  {id: 100},
  {id: 101},
  {id: 102},
  {id: 103},
  {id: 104},
  {id: 105},
  {id: 106},
  {id: 101},
  {id: 102}

  

 ]

const App = () => {

const [color, setColor] = useState(true)
const refCol=()=>{
  window.location.reload()
  
}

const notify=(col)=>{
  toast(`You Copied ${col}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });
}

const playone=()=>{
  var sound = new Howl({
      src: [notification],
      autoplay: true,
      volume: 0.5,
     
      

    
    });
    
    sound.play();
}
const playnotify=(col)=>{
  playone()
  notify(col)

}
// const newColor=()=>{
//   if(color.length > 0)
//   {
//     setColor([...color,{
//       col:'#'+ Math.floor(Math.random()*16777215).toString(16)

//     }])
//   }
//   else{
//     setColor([{
//       col:'#'+ Math.floor(Math.random()*16777215).toString(16)

//     }])
//   }
  
// }
// newColor()


// console.log(color)



  return (
    <div>
      <div className="text-center p-3">
        <h3>Get Your Color Code</h3>
        <button className="btn btn-outline-info" onClick={refCol}>Refresh</button>
      </div>
      <br />
      {
        color && (<div className="container-fluid">
        <div className="row">
        {
        data.map((ind)=>{
          let va= '#'+ Math.floor(Math.random()*16777215).toString(16)
         
           va= va.length === 5 ? va+'fe' :va ;
          va= va.length === 6  ? va+'e' :va ;

          
          return(
            <>
          <div className="col-lg-2 col-md-4 col-6 mx-auto mb-3" key={ind}>
            <CopyToClipboard text={va} >
            <div className="card" style={{backgroundColor:`${va}`}} onClick={()=>playnotify(va)}>
            <h5>{va}</h5>
            
            </div>
            </CopyToClipboard>
          </div>
          

            </>
          )
        })
      }
          
        </div>
      </div>)
      }
      
      <div className="container p-3 text-center">
        <p>Design & Develop By <a href="https://github.com/atanu20" target="_blank">Atanu Jana</a> </p>
      </div>
     
      <ToastContainer />

    </div>
  )
}

export default App

 