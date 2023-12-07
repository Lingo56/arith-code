import { useState } from 'react'
import PropTypes from 'prop-types'

const CodeInput = ({ onButtonClick }) => {
  const [inputValue, setInputValue] = useState('')

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

    onButtonClick(inputValue)
  }

  return (
    <div>
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
  )
}

CodeInput.propTypes = {
  onButtonClick: PropTypes.func.isRequired
}

export default CodeInput
