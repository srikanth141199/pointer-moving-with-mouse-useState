import { useCallback, useState } from 'react'
import './App.css'

const width = 1472;
const height = 570;
const circleRadius = 10;

const initialMousePos = {x:width/2 , y:height/2}

function App() {
  const [mousePosition, setmousePosition] = useState(initialMousePos)

  const HandleMouse = useCallback((event)=>{
    const {clientX,clientY} = event;
    setmousePosition({x:clientX, y:clientY})
  })

  return (
    <>
    <svg width={width} height ={height} onMouseMove={HandleMouse}>
      <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius}></circle>
    </svg>
    </>
  )
}

export default App
