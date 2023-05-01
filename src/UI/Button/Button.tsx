import React from 'react';
import cn from 'classnames';
import s from './Styles.module.scss';

type Props = {
  color: 'blue' | 'light-blue';
  placeholder: string;
  onClick: () => void;
  className?: string;
};

const Button = ({
  color,
  placeholder,
  onClick,
  className,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(s.button, className, {
        [s.button_light_blue]: color === 'light-blue',
        [s.button_blue]: color === 'blue',
      })}
    >
      {placeholder}
    </button>
  );
};

export default Button;
