import { useState } from 'react'
import ArithmeticCode from './components/ArithmeticCode'
import FileInput from './components/FileInput'

function App() {
  // State to manage the input value
  const [inputValue, setInputValue] = useState('')
  const [codeValue, setCodeValue] = useState(null)

  // Event handler for input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  // Event handler for button click
  const handleButtonClick = () => {
    const isValidInput = /^[ab]+$/.test(inputValue)

    if (inputValue.length > 16) {
      console.log('String invalid length')
      return
    }

    if (!isValidInput) {
      console.log('String contains characters other than A or B')
      return
    }

    setCodeValue(inputValue)
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
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a sequence of As and Bs (between 2 and 16 long)"
            size="50"
            style={{ width: '350px', padding: '0px 6px' }}
          />

          <button style={{ padding: '0px 6px' }} onClick={handleButtonClick}>
            Encode
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
