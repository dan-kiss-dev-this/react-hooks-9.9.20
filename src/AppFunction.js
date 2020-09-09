import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine)

  const incrementCount = () => setCount(prevCount => prevCount + 1)

  const toggleLight = () => { setIsOn(prevIsOn => !prevIsOn) }

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  const handleOnline = () => {
    setStatus(true)
  }

  const handleOffline = () => {
    setStatus(false)
  }

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
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
      <p>Y position: {mousePosition.y} </p>

      <h2>Network Status</h2>
      <p>You are {status ? 'online' : 'offline'}</p>
    </>
  )
}

export default App;
