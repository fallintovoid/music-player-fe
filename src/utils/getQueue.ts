import axios from "axios"
import { BACKEND_URL } from "@/constants/backend"
import { IQueue } from "@/types/queue"

type ServerResponse = {
    queue: IQueue[];
}

export const getQueue = async (guildId: string) => {
    const queue = await axios.post<ServerResponse>(BACKEND_URL + "/get/queue", {
        id: guildId
    }).then(res => res.data.queue).catch(err => console.log(err))

    return queue
}
