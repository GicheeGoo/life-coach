import { FC } from "preact/compat";

import { Ratio } from "@/components/bases/Ratio/Ratio";

import { Detail } from "../posts";

export const Video: FC<Detail> = props =>
{
    const { content } = props;

    return (
        <Ratio className='mb-4' width={1200} height={675}>
            <iframe
                src={content[0] as string}
                frameborder={0}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
            />
        </Ratio>
    )
}
