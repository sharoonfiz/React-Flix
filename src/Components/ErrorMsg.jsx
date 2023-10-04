import React from 'react'

function ErrorMsg({ children }) {
  return (
    <div className='errorMsg'>
      {children}
    </div>
  )
}

export default ErrorMsg