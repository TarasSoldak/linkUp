import React, {FC}from 'react'
import './button.scss'

interface IButtonProps{

  children?:React.ReactNode
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  disabled?:boolean
 
}

const Button:FC<IButtonProps> = (props:IButtonProps) => {
  return (
    <button className='my-button' {...props}>{props.children}</button>
  )
}

export default Button