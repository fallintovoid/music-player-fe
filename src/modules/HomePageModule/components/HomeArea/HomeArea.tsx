import React from 'react';
import s from './Styles.module.scss';
import Input from '@/UI/Input/Input';
import Button from '@/UI/Button/Button';

type Props = {};

const HomeArea = (props: Props) => {
  return (
    <main className={s.main}>
      <h1 style={{ color: 'white' }}>
        music<span className={s.blue}>.ds</span>
      </h1>
      <Input
        onChange={() => console.log('input')}
        placeholder="Room number"
      />
      <div className={s.auth}>
        <Button
          placeholder="Sign in"
          color="blue"
          onClick={() => console.log('click')}
        />
        <Button
          placeholder="Sign up"
          color="light-blue"
          onClick={() => console.log('click')}
        />
      </div>
    </main>
  );
};

export default HomeArea;
