// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({style, size, className = '', ...props}) {
  // assign the size prop to the sizeClassName variable, for future proofing. If no size prop
  // is passed in, sizeClassName's value is assigned an empty string.
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...props}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box with size prop
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box with size prop
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box with size prop
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
