import { useState } from 'react'
import ArithmeticCode from './components/ArithmeticCode'
import CodeInput from './components/CodeInput'

function App() {
  // State to manage the input value
  const [codeValue, setCodeValue] = useState(null)

  // Event handler for button click
  const handleCodeValue = (value) => {
    setCodeValue(value)
  }

  // TODO: Move text input into separate component (use the string once button is pressed)
  // TODO: Set up arithmetic coding with string
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

        {codeValue && <ArithmeticCode codeText={codeValue} />}

        <div style={{ paddingTop: '20px' }}>
          <CodeInput onButtonClick={handleCodeValue} />
        </div>
      </div>
    </div>
  )
}

export default App
