import React, { useState, useEffect } from 'react';

// function App() {
//   return (
//     <div>Hello World</div>
//   );
// }

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const incrementCount = () => setCount(prevCount => prevCount + 1)

  const toggleLight = () => { setIsOn(prevIsOn => !prevIsOn) }

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  })

  return (
    <>
      <h2>Counter</h2>
      <button onClick={incrementCount}>
        I was clicked {count} times
      </button>

      <h2>Toggle Light</h2>
      <div style={{ backgroundColor: isOn ? 'yellow' : 'gray', height: 50, width: 50 }} onClick={toggleLight}></div>

      <h2>Mouse Position</h2>
      <p>X position: {mousePosition.x}</p>
      <p>Y position: {mousePosition.y}</p>
    </>
  )
}

export default App;
