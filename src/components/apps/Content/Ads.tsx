import { FC } from "preact/compat";
import clsx from "clsx";

import { Image } from "@/components/bases/Image/Image";
import { Button } from "@/components/bases/Button/Button";

import { ads } from "@/pages/Blog/posts";

import { useBreakPoint } from "@/hooks/useBreakPoint";
import { ChevronRight } from "@/components/bases/SVG";

export const Ads: FC = props =>
{
    const isMobile = useBreakPoint('mobile');
    
    return (
        <div
            className={clsx('flex bg-semi-light mb-4', isMobile ? 'flex-col w-screen p-4' : 'p-10')}
            style={{ marginLeft: 'calc(-1 * var(--spacing-8))' }}
        >
            <div className={clsx('flex w-full flex-2 px-4', isMobile && 'mb-4')}>
                <Image className='mx-auto' src={ads.thumbnail} />
            </div>

            <div className='flex-3'>
                <div
                    className='flex flex-col flex-7 items-center mx-auto'
                    style={{ maxWidth: '70%', textAlign: isMobile ? 'center' : 'left' }}
                >
                    <a href={ads.link}>
                        <h3 className='mt-0'>{ads.title}</h3>
                    </a>
                    <p>{ads.description}</p>

                    <div className={isMobile ? undefined : 'w-full mt-8'}>
                        <Button
                            className='flex gap-2 items-center'
                            appearance='primary'
                            href={ads.link}
                            color='red'
                            size={isMobile ? 'md' : 'lg'}
                            rounded
                        >
                            <ChevronRight width={14} height={14} fill='white'/>

                            Xem chi tiết
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}