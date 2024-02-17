import { FC } from "preact/compat";
import clsx from "clsx";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Image } from "@/components/bases/Image/Image";
import { Animate } from "@/components/bases/Animate/Animate";

import { CourseSectionProps } from "../Course";

import { useBreakPoint } from "@/hooks/useBreakPoint";

import banner from '@/assets/course-mfs-banner.jpeg'

const goals = [
    'Nhận thức điểm mạnh, điểm yếu và những bài học bạn cần tốt nghiệp trong cuộc đời của mình.',
    'Lên kế hoạch cho từng chặng trong hiện tại và tương lai.',
    'Giúp bạn nắm bắt được những cơ hội sẽ đến với mình.',
    'Thêm thấu hiểu những người xung quanh, giải quyết mâu thuẫn, cải thiện các mối quan hệ.',
    'Lựa chọn định hướng nghề nghiệp cho bản thân và con cái.'
]

const includes = [
    '3 ngày kiến thức chuyên sâu về Numerology cùng chuyên gia hàng đầu của GEIN',
    '1 ngày kiến thức nâng cao để hiểu về cách liên kết bộ số, cách luận giải bản đồ, định hướng bản đồ cuộc đời mình',
    'Sau đó tham gia bài Test về năng lực luận giải để nhận chứng chỉ chuyên gia Life Coach'
]

export const MapForSuccess: FC<CourseSectionProps> = ({ className }) =>
{
    const isMobile = useBreakPoint('mobile');
    
    return (
        <Wrapper wrapperClassName='mfs bg bg-2' className={clsx('flex gap-12 w-full', isMobile ? 'flex-col p-8' : className)}>
            <div className='flex-1'>
                <h2 className='mt-5'>Khóa học Thiết kế bản đồ thành công Map For Success</h2>
                <h3 className='mb-0'>Giới thiệu khóa học:</h3>
                <p className='mb-4'>Khóa học chuyên sâu giúp khai phá những năng lực tiềm ẩn của con người, kết hợp những kiến thức giúp bạn hoàn toàn có thể làm chủ cuộc sống, định vị cuộc đời của mình dựa vào Bản đồ thành công – Map for Success.</p>
                <p className='section-content mb-4'><strong>Giúp bạn ứng dụng trong cuộc sống và công việc:</strong></p>
                
                <ul className='mb-8'>
                    {goals.map((goal, index) => (
                        <Goal key={index}>
                            {goal}
                        </Goal>
                    ))}
                </ul>

                <h5>Khoá học bao gồm:</h5>
                
                <ul>
                    {includes.map((include, index) => (
                        <Animate key={index}>
                            <Include>
                                {include}
                            </Include>
                        </Animate>
                    ))}
                </ul>
            </div>
            <div className='flex flex-1'>
                <Image className='mx-auto' src={banner} width={450} />
            </div>
        </Wrapper>
    )
}

const Goal: FC = ({ children }) =>
{
    return (
        <li className='flex gap-4 mb-2 items-center'>
            <svg
                className='flex-none'
                xmlns='https://www.w3.org/2000/svg'
                width='1rem'
                height='1rem'
                viewBox='0 0 512 512'
            >
                <path
                    d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"
                    fill='#fe0'
                />
            </svg>

            {children}
        </li>
    )
}

const Include: FC = ({ children }) =>
{
    return (
        <li className="flex gap-4 mb-2 items-center">
            <svg
                className='flex-none'
                xmlns="https://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width='1rem'
                height='1rem'
            >
                <path
                    d="M182.6 246.6C170.1 259.1 149.9 259.1 137.4 246.6L57.37 166.6C44.88 154.1 44.88 133.9 57.37 121.4C69.87 108.9 90.13 108.9 102.6 121.4L159.1 178.7L297.4 41.37C309.9 28.88 330.1 28.88 342.6 41.37C355.1 53.87 355.1 74.13 342.6 86.63L182.6 246.6zM182.6 470.6C170.1 483.1 149.9 483.1 137.4 470.6L9.372 342.6C-3.124 330.1-3.124 309.9 9.372 297.4C21.87 284.9 42.13 284.9 54.63 297.4L159.1 402.7L393.4 169.4C405.9 156.9 426.1 156.9 438.6 169.4C451.1 181.9 451.1 202.1 438.6 214.6L182.6 470.6z"
                    fill='#fe0'
                />
            </svg>

            {children}
        </li>
    )
}