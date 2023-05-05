import { IQueue } from '@/types/queue'
import React from 'react'
import Link from 'next/link'
import s from './Styles.module.scss';

type Props = {
    queue: IQueue[];
}

const QueueList = ({ queue }: Props) => {
  return (
    <div className={s.queue_list}>
        <h1>Queue list:</h1>
        {queue.map((item, i) => {
            return <Link href={item.link} key={item._id}><h1>{i+1} {item.originalName}</h1></Link> 
        })}
    </div>
  )
}

export default QueueList