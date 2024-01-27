import { FC } from "preact/compat";

import { Image } from "@/components/bases/Image/Image";

import { ads } from "../posts";

export const Ads: FC = props =>
{
    return (
        <div className='bg-semi-light mb-4 p-10'>
            <div className='w-full flex-3'>
                <Image src={ads.thumbnail} />
            </div>

            <div className="flex flex-col flex-7 items-center">
                <div style={{ maxWidth: '70%' }}>
                    <h3>{ads}</h3>
                </div>
            </div>
        </div>
    )
}