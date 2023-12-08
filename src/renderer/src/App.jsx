import React, { useState } from 'react'
import ArithmeticCode from './components/ArithmeticCode'
import CodeInput from './components/CodeInput'

function App() {
  // State to manage the input values for each pair
  const [codeValues, setCodeValues] = useState(Array(1).fill(null))
  const [repeatCount, setRepeatCount] = useState(1) // State to manage the repeat count

  // Event handler for button click
  const handleCodeValue = (value, index) => {
    setCodeValues((prevCodeValues) => {
      const newCodeValues = [...prevCodeValues]
      newCodeValues[index] = value
      return newCodeValues
    })
  }

  // Event handler for input change
  const handleRepeatCountChange = (event) => {
    const value = parseInt(event.target.value, 10)
    setRepeatCount(isNaN(value) ? 1 : value)
    // Adjust codeValues array length when repeatCount changes
    setCodeValues((prevCodeValues) => prevCodeValues.slice(0, value))
  }

  // Function to render the ArithmeticCode and CodeInput components N times
  const renderCodeComponents = () => {
    const components = []
    for (let i = 0; i < repeatCount; i++) {
      components.push(
        <div key={i}>
          {codeValues[i] && <ArithmeticCode codeText={codeValues[i]} />}
          <div style={{ paddingTop: '10px' }}>
            <CodeInput onButtonClick={(value) => handleCodeValue(value, i)} />
          </div>
        </div>
      )
    }
    return components
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
      className="App"
    >
      <div style={{ textAlignLast: 'center', margin: 'auto' }}>
        <h1>Arithmetic Coding</h1>

        {/* Input for the repeat count */}
        <input
          type="number"
          value={repeatCount}
          onChange={handleRepeatCountChange}
          placeholder="Enter N"
          style={{ marginTop: '25px', marginBottom: '15px' }}
        />

        {/* Render components N times */}
        {renderCodeComponents()}
      </div>
    </div>
  )
}

export default App
