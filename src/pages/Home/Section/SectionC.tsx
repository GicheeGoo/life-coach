import { FC, ReactNode } from "preact/compat";
import clsx from "clsx";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Button } from "@/components/bases/Button/Button";
import { Image } from "@/components/bases/Image/Image";
import { Right } from "@/components/bases/SVG";

import { useBreakPoint } from "@/hooks/useBreakPoint";

import shortImg1 from '@/assets/short-post-1.png';
import shortImg2 from '@/assets/short-post-2.png';
import shortImg3 from '@/assets/short-post-3.png';
import { ROUTE_URL } from "@/constants/routes";

import { HomeSection } from "..";

const shortPosts = [
    {
        src: shortImg1,
        title: 'Map For Success là gì? Bản đồ thành công GEIN',
        description: 'Tìm hiểu chi tiết về Map For Success tại GEIN, bản đồ thành công giúp ích gì cho cuộc sống, sự nghiệp và chữa lành các mối quan hệ?',
        to: '/gein/map-for-success',
    },
    {
        src: shortImg2,
        title: 'GEIN Academy là gì? Sự thật thần số học tại GEIN',
        description: 'GEIN đang làm những điều cực kì khác biệt đối với thần số học và giáo dục, vậy GEIN thực tế là gì?',
        to: '/gein/gein-academy',
    },
    {
        src: shortImg3,
        title: 'Kid Talent Map – Bản đồ thấu hiểu con',
        description: 'Mỗi đứa trẻ sinh ra đều là những thiên tài, vậy làm sao để biết được đâu là điểm mạnh thiên tài của trẻ? Xem ngay bài viết này',
        to: '/gein/kid-talent-map',
    },
]

export const SectionC: FC<HomeSection> = ({ className }) =>
{
    const isMobile = useBreakPoint('mobile');

    return (
        <Wrapper className={className}>
            <div className={clsx('head-line flex', isMobile && 'flex-col')}>
                <div className='flex-1'>
                    <h2>
                        Bài viết nổi bậc
                    </h2>

                    <p>
                        Những kiến thức, kinh nghiệm và bài học hay được chúng tôi chia sẻ lại với đọc giả về life coach, chữa lành và thần số học
                    </p>
                </div>
                <div className={clsx('flex flex-1 items-end', !isMobile && 'justify-end')}>
                    <Button
                        appearance='primary'
                        color='red'
                        size='lg'
                        href={ROUTE_URL.blog}
                        rounded
                    >
                        Xem tất cả
                    </Button>
                </div>
            </div>
            <div className={clsx('flex gap-8 mt-16', isMobile && 'flex-col')}>
                {shortPosts.map((post, index) => (
                    <ShortPost
                        key={index}
                        {...post}
                    />
                ))}
            </div>
        </Wrapper>
    )
}

type ShortPostProps = (typeof shortPosts)[number]

const ShortPost: FC<ShortPostProps> = props =>
{
    const { src, title, description, to } = props;

    const renderLink = (children: ReactNode) => (
        <a href={to}>
            {children}
        </a>
    )

    return (
        <div className='short-post flex flex-col flex-1 overflow-hidden'>
            {renderLink(<Image src={src} className='h-64 w-full'/>)}
            
            <div className='flex-1 px-8 pt-4'>
                {renderLink(<h5 className='color-primary'>{title}</h5>)}
                <p className='fs-sm'>{description}</p>
            </div>

            <div className='pb-8 px-8'>
                <Button
                    appearance='primary'
                    color='red'
                    size='lg'
                    href={to}
                    rounded
                >
                    Xem thêm
                    <Right className='ml-2'/>
                </Button>
            </div>
        </div>
    )
}