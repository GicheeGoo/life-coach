import { FC, Fragment } from "preact/compat";
import clsx from "clsx";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Image } from "@/components/bases/Image/Image";

import { Post as PostType } from "../posts";
import { useBreakPoint } from "@/hooks/useBreakPoint";

import { generateContent } from "@/utils/generateContent";
import { details as coach } from '@/constants/coach';

import avatar from '@/assets/avatar.png';

import './Post.scss';

export const Post: FC<PostType> = props =>
{
    const { title, author, createdDate, details } = props;
    
    const isMobile = useBreakPoint('mobile');

    return (
        <div className={clsx('blog-wrapper', isMobile ? 'py-8' : 'py-12')}>
            <Wrapper
                wrapperClassName={isMobile ? undefined : 'px-4'}
                className={clsx('blog bg-light', isMobile ? 'p-8' : 'p-12')}
            >
                <h1>
                    {title}
                </h1>

                <div className="flex gap-2 color-primary mb-4">
                    <a href='/#comment'>
                        Leave a Comment
                    </a>
                    /
                    <div>By <a href={`/author/${author}`}>{author}</a></div>
                    /
                    {createdDate}
                </div>

                {details.map((detail, index) => (
                    <Fragment key={index}>
                        {generateContent(detail)}
                    </Fragment>
                ))}
            </Wrapper>

            <Wrapper>
                <div className='p-12 mt-12 bg-light'>
                    <h3 className='mt-0 mb-4'>About The Author</h3>
                    <div className='flex gap-4 items-center'>
                        <div className='flex-none'>
                            <Image
                                className='avatar'
                                src={avatar}
                                width={100}
                                height={100}
                                rounded
                            />
                        </div>

                        <div>
                            <h4 className='color-primary mt-0'>{coach.name}</h4>
                            <p>Chuyên gia luận giải bản đồ Map For Success và Life Coach định hướng cuộc sống, sự nghiệp, giúp khách hàng thấu hiểu bản thân, thiết lập mục tiêu và vượt qua rào cản để đạt được các mục tiêu trong cuộc sống!</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}