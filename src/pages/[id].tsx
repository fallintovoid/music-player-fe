import { GetServerSideProps, GetServerSidePropsResult,  } from "next";
import { IQueue } from "@/types/queue";
import axios from "axios";
import { BACKEND_URL } from "@/constants/backend";
import { QueueList } from "@/modules/QueueModule";

type Props = {
    queue: IQueue[];
}

export default function GuildPage({ queue }: Props) {
    return (
        <QueueList queue={queue}/>
    )
}

export const getServerSideProps: GetServerSideProps = async (context): Promise<GetServerSidePropsResult<Props>> => {
    const guildId = context.params?.id
    const queue = await axios.post<Props>(BACKEND_URL + "/get/queue", {
        id: guildId
    }).then(res => res.data.queue).catch(err => console.log(err))

    if (queue) {
        return {
            props: {
                queue            
            }
        }
    }

    return {
        notFound: true
    };
};