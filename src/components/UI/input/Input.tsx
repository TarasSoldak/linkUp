import React, { FC, InputHTMLAttributes } from 'react'
import './input.scss'
  interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input:FC<InputProps> = (props) => {
  return (
    <input {...props}/>
  )
}

export default Input