import { IQueue } from '@/types/queue'
import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import s from './Styles.module.scss';
import { socket } from '@/socket/socket';
import axios from 'axios';
import { getQueue } from '@/utils/getQueue';
import { log } from 'console';

type Props = {
    queue: IQueue[];
    guildId: string;
}

const QueueList = ({ queue, guildId }: Props) => {

  const [currentQueue, setCurrentQueue] = useState(queue);

  const refreshQueue =  useCallback(async () => {
    const newQueue = await getQueue(guildId);
    if (newQueue) {
      setCurrentQueue(newQueue);
    }
  }, [guildId])

  useEffect(() => {
    socket.on(guildId, refreshQueue)

    return () => {
      socket.off(guildId, refreshQueue)
    }
  }, [guildId, refreshQueue])

  return (
    <div className={s.queue_list}>
        <h1>Queue list:</h1>
        {currentQueue.map((item, i) => {
            return <Link href={item.link} key={item._id}><h1>{i+1} {item.originalName}</h1></Link> 
        })}
    </div>
  )
}

export default QueueList