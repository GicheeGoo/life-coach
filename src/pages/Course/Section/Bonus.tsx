import { FC } from "preact/compat";
import clsx from "clsx";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { UserBoard, Book, Gradurate } from '@/components/bases/SVG';

import { CourseSectionProps } from "../Course";

const bonuses = [
    {
        title: '+100 khóa học',
        description: 'Hơn 100 khoá học trong tài khoản CRM của bạn về các kỹ năng Sales, Marketing, Content, Xây dựng thương hiệu cá nhân và phát triển bản thân',
        icon: UserBoard,
        color: 'var(--primary-color)'
    },
    {
        title: '30 bản map',
        description: '30 bản map giúp bạn có thể mở cho người thân hoặc kinh doanh luôn (Giá trị bán ra là 2.990.000/1 bản – Chỉ cần bán 10 map là bạn hoàn vốn)',
        icon: Book,
    },
    {
        title: 'Khóa học trực tiếp',
        description: 'Tham gia tất cả các khóa đào tạo tại GEIN cả online và offline hoàn toàn MIỄN PHÍ trong vòng 1 năm.',
        icon: Gradurate,
        color: 'var(--section-fourth-color)'
    },
]

export const Bonus: FC<CourseSectionProps> = ({ className }) =>
{
    return (
        <Wrapper className={clsx(className, 'bonus my-0 w-full flex flex-col items-center')}>
            <h2 style={{ color: 'var(--section-fourth-color)' }}>ĐẶC BIỆT BẠN SẼ ĐƯỢC TẶNG THÊM</h2>
            <p className='title'>Một tài khoản CRM giúp bạn lãi ngay sau khi học</p>
            <div className='separator sm bold' />

            <div className="flex gap-4">
                {bonuses.map((bonus, index) => (
                    <Item
                        key={index}
                        {...bonus}
                    />
                ))}
            </div>
        </Wrapper>
    )
}

const Item: FC<typeof bonuses[number]> = ({ title, description, icon: SVG, color = 'var(--section-color)' }) => (
    <div className='flex items-center gap-2'>
        <SVG
            className='flex-none'
            width={50}
            height={50}
            fill={color}
        />

        <div>
            <h4 style={{ color }}>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
)