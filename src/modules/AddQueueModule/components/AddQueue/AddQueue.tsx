import Button from '@/UI/Button/Button';
import Input from '@/UI/Input/Input'
import { BACKEND_URL } from '@/constants/backend';
import axios from 'axios';
import React, { useState } from 'react'

type Props = {
    guildId: string | string[];
}

const AddQueue = ({ guildId }: Props) => {
    const [inputLinkValue, setInputLinkValue] = useState('');
    const [inputNameValue, setInputNameValue] = useState('');

    const addTrackInQueue = async () => {
        if (inputLinkValue && inputNameValue) {
            await axios.post(BACKEND_URL + '/queue/add', {
                id: guildId,
                add: {
                    link: inputLinkValue,
                    originalName: inputNameValue,
                    platform: 'youtube'
                }
            }).then(res => console.log(res.status)).catch(err => console.log(err))
        }
        
    }
  return (
    <div>
        <Input onChange={e => setInputLinkValue(e.target.value)} value={inputLinkValue} placeholder='Link to the music' />
        <Input onChange={e => setInputNameValue(e.target.value)} value={inputNameValue} placeholder='Track title' />
        <Button onClick={addTrackInQueue} placeholder='Add in queue!' color='blue'/>
    </div>
  )
}

export default AddQueue