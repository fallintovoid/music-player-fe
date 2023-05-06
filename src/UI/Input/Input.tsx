import React, { ChangeEvent } from 'react'
import cn from 'classnames'

import s from './Styles.module.scss'

type Props = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    value: string;
    className?: string;
    type?: string;
}

const Input = ({ onChange, placeholder, className, type = 'text', value }: Props) => {
  return (
      <input type={type} className={cn(s.input, className)} placeholder={placeholder} onChange={onChange} value={value}/>
  )
}

export default Input