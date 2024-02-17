import React from 'react'

function Button(
  {
    Children ,
    type = 'button', 
    bgColor = "bg-blue-600",
    textColor = 'text-white',
    className = '',
    ...props
  }
) {
    
  return (
    <button className={`px-4 py-2 rounded-lg  ${bgColor , textColor , bgColor}
     ${Children} ${Children} ${className , type} `} {...props} ></button>
  )
}

export default Button


