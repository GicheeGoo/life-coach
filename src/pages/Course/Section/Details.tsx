import { FC } from "preact/compat";
import clsx from "clsx";

import { CourseSectionProps } from "../Course";
import { Wrapper } from "@/components/bases/Wrapper/Wrapper";

const details = [
    {
        bg: '#ffe97d',
        title: 'TỔNG QUAN VỀ BẢN ĐỒ MAP FOR SUCCESS, GEIN ACADEMY',
        desc: [
            'Map For Success là gì? Gein Academy ra đời như thế nào?',
            'Kiến thức chuyên sâu về các chỉ số trong Map For Success: năng lượng chuẩn, quá, ngược, các level con số (Không đâu có).'
        ]
    },
    {
        bg: '#8ed1fc',
        title: 'ỨNG DỤNG MAP FOR SUCCESS TRONG QUẢN TRỊ NHÂN SỰ',
        desc: [
            'Cách để thu phục nhân tâm.',
            'Quy trình làm việc và định hướng cho từng nhóm nhân sự.',
            'Phong cách quản trị, lãnh đạo của từng bộ số trong Map For Success.'
        ]
    },
    {
        bg: '#c0ebf1',
        title: 'TỔNG QUAN VỀ BẢN ĐỒ MAP FOR SUCCESS, GEIN ACADEMY',
        desc: [
            'Thấu hiểu, định vị và phát triển bản thân.',
            'Cách để thiết kế 1 tấm bản đồ cho tương lai.',
            'Phương pháp thành công của từng bộ số trong Map For Success.'
        ]
    },
    {
        bg: '#f78da7',
        title: 'TỔNG QUAN VỀ BẢN ĐỒ MAP FOR SUCCESS, GEIN ACADEMY',
        desc: [
            'Tư duy đúng của của một chuyên gia lifecoach.',
            'Bí quyết để một chuyên gia lifecoach thành công trong sự nghiệp.'
        ]
    },
]

export const Details: FC<CourseSectionProps> = ({ className }) =>
{
    return (
        <Wrapper wrapperClassName='bg bg-1' className={clsx('details w-full', className)}>
            <div className='w-full flex flex-col items-center'>
                <h2 className='title'>NỘI DUNG KHOÁ HỌC</h2>
                <div className='separator bold sm' />
            </div>

            <div className='grid gap-8'>
                {details.map(detail => (
                    <Card key={detail.bg} {...detail} />
                ))}
            </div>
        </Wrapper>
    )
}

type CardProps = {
    bg: string,
    title: string,
    desc: string[]
}

const Card: FC<CardProps> = ({ bg, title, desc }) =>
{
    return (
        <div className='p-8' style={{ backgroundColor: bg, borderRadius: 'var(--spacing-2)' }}>
            <h5>{title}</h5>
            <div className='separator default full' />

            <ul className='pl-10' style={{ listStyleType: 'disc' }}>
                {desc.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}