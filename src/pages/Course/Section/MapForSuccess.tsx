import { FC } from "preact/compat";
import clsx from "clsx";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Image } from "@/components/bases/Image/Image";

import { CourseSectionProps } from "../Course";

import banner from '@/assets/course-mfs-banner.jpeg'

const goals = [
    'Nhận thức điểm mạnh, điểm yếu và những bài học bạn cần tốt nghiệp trong cuộc đời của mình.',
    'Lên kế hoạch cho từng chặng trong hiện tại và tương lai.',
    'Giúp bạn nắm bắt được những cơ hội sẽ đến với mình.',
    'Thêm thấu hiểu những người xung quanh, giải quyết mâu thuẫn, cải thiện các mối quan hệ.',
    'Lựa chọn định hướng nghề nghiệp cho bản thân và con cái.'
]

export const MapForSuccess: FC<CourseSectionProps> = ({ className }) =>
{
    return (
        <Wrapper wrapperClassName='mfs bg bg-2' className={clsx('flex gap-12 w-full', className)}>
            <div className='flex-1'>
                <h2 className='mt-5'>Khóa học Thiết kế bản đồ thành công Map For Success</h2>
                <h3 className='mb-0'>Giới thiệu khóa học:</h3>
                <p className='mb-4'>Khóa học chuyên sâu giúp khai phá những năng lực tiềm ẩn của con người, kết hợp những kiến thức giúp bạn hoàn toàn có thể làm chủ cuộc sống, định vị cuộc đời của mình dựa vào Bản đồ thành công – Map for Success.</p>
                <p className='section-content mb-4'><strong>Giúp bạn ứng dụng trong cuộc sống và công việc:</strong></p>
                
                <ul className='mb-8'>
                    {goals.map((goal, index) => (
                        <Item key={index}>
                            {goal}
                        </Item>
                    ))}
                </ul>

                <h5>Khoá học bao gồm:</h5>
            </div>
            <div className='flex flex-1'>
                <Image className='mx-auto' src={banner} width={450} />
            </div>
        </Wrapper>
    )
}

const Item: FC = ({ children }) =>
{
    return (
        <li className='flex gap-4 mb-3 items-center'>
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