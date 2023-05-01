import React from 'react'
import cn from 'classnames'

import s from './Styles.module.scss'

type Props = {
    onChange: () => void;
    placeholder: string;
    className?: string;
    type?: string;
}

const Input = ({ onChange, placeholder, className, type = 'text' }: Props) => {
  return (
      <input type={type} className={cn(s.input, className)} placeholder={placeholder} onChange={onChange}/>
  )
}

export default Input