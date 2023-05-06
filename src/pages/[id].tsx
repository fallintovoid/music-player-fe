import { GetServerSideProps, GetServerSidePropsResult,  } from "next";
import { IQueue } from "@/types/queue";
import axios from "axios";
import { BACKEND_URL } from "@/constants/backend";
import { QueueList } from "@/modules/QueueModule";
import { AddQueue } from "@/modules/AddQueueModule";

type Props = {
    queue: IQueue[];
    guildId: string | string[];
}

export default function GuildPage({ queue, guildId }: Props) {
    return (
        <>
            <QueueList queue={queue}/>
            <AddQueue guildId={guildId} />
        </>
        
    )
}

export const getServerSideProps: GetServerSideProps = async (context): Promise<GetServerSidePropsResult<Props>> => {
    const guildId = context.params?.id
    const queue = await axios.post<Props>(BACKEND_URL + "/get/queue", {
        id: guildId
    }).then(res => res.data.queue).catch(err => console.log(err))

    if (queue && guildId) {
        return {
            props: {
                queue,
                guildId          
            }
        }
    }

    return {
        notFound: true
    };
};