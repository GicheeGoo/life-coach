import { FC } from "preact/compat";

import { Image } from "@/components/bases/Image/Image";

import { ads } from "../posts";
import { Button } from "@/components/bases/Button/Button";

export const Ads: FC = props =>
{
    return (
        <div className='flex bg-semi-light mb-4 p-10'>
            <div className='flex w-full flex-2'>
                <Image className='mx-auto' src={ads.thumbnail} />
            </div>

            <div className='flex-3'>
                <div
                    className='flex flex-col flex-7 items-center mx-auto'
                    style={{ maxWidth: '70%' }}
                >
                    <a href={ads.link}>
                        <h3 className='mt-0'>{ads.title}</h3>
                    </a>
                    <p>{ads.description}</p>

                    <div className='w-full mt-8'>
                        <Button
                            appearance='primary'
                            color='red'
                            size='lg'
                            href={ads.link}
                        >
                            Xem chi tiết
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}