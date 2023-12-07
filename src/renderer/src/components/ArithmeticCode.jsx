import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ArithmeticCode = ({ codeText }) => {
  const [decodedValue, setDecodedValue] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDecodedValue('wow ' + codeText + ' wow')
      } catch (error) {
        console.error('Error fetching audio data:', error)
      }
    }

    fetchData()
  }, [codeText])

  return (
    <div>
      <div style={{ margin: '10px', verticalAlign: 'top' }}>
        <p>Code: {codeText}</p>
        <p>Decoded Value: {decodedValue}</p>
      </div>
    </div>
  )
}

ArithmeticCode.propTypes = {
  codeText: PropTypes.string.isRequired // String being decoded
}

export default ArithmeticCode
