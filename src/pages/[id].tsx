import { GetServerSideProps, GetServerSidePropsResult,  } from "next";
import { IQueue } from "@/types/queue";
import axios from "axios";
import { BACKEND_URL } from "@/constants/backend";
import { QueueList } from "@/modules/QueueModule";
import { AddQueue } from "@/modules/AddQueueModule";
import { getQueue } from "@/utils/getQueue";

type Props = {
    queue: IQueue[];
    guildId: string;
}

export default function GuildPage({ queue, guildId }: Props) {
    return (
        <>
            <QueueList queue={queue} guildId={guildId}/>
            <AddQueue guildId={guildId} />
        </>
        
    )
}

export const getServerSideProps: GetServerSideProps = async (context): Promise<GetServerSidePropsResult<Props>> => {
    const guildId = context.params?.id as string;
    const queue = await getQueue(guildId);

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