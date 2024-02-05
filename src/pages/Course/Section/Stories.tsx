import { FC } from "preact/compat";
import { CourseSectionProps } from "../Course";
import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import clsx from "clsx";
import { Video } from "@/components/apps/Content/Video";

const videos = [
    'https://www.youtube.com/embed/GolP0sobKLE?feature=oembed',
    'https://www.youtube.com/embed/dRgr51ZYRP0?feature=oembed',
    'https://www.youtube.com/embed/kOPhrjcj9lM?feature=oembed',
]

export const Stories: FC<CourseSectionProps> = ({ className }) =>
{
    return (
        <Wrapper className={clsx(className, 'stories w-full flex flex-col items-center')}>
            <h2 style={{ color: 'var(--section-fourth-color)' }}>CÂU CHUYỆN CHUYỂN HOÁ</h2>
            <p className='title'>Cùng nghe một vài câu chuyện của những học viên đã học tập, chuyển hóa và có sự nghiệp mới tại GEIN</p>
            <div className='separator sm bold' />

            <div className='w-full flex gap-4'>
                {videos.map((src, index) => <Video key={index} content={[src]} />)}
            </div>
        </Wrapper>
    )
}