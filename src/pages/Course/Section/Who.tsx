import { FC } from "preact/compat";
import clsx from "clsx";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Image } from "@/components/bases/Image/Image";
import { Animate } from "@/components/bases/Animate/Animate";

import { CourseSectionProps } from "../Course";

import { ANIMATION_CONFIG } from "@/constants/animationConfig";

import who1 from '@/assets/who-1.png';
import who2 from '@/assets/who-2.png';
import who3 from '@/assets/who-3.png';

const people = [
    {
        name: 'Nguyễn Diệu Thu',
        description: 'Chủ tịch GEIN Academy',
        src: who1,
    },
    {
        name: 'Lang Công Đạt',
        description: 'Co-Founder GEIN Academy',
        src: who2,
    },
    {
        name: 'Nguyễn Thị Thạch Thảo',
        description: 'Co-Founder GEIN Academy',
        src: who3,
    },
]

export const Who: FC<CourseSectionProps> = ({ className }) =>
{
    return (
        <Wrapper className={clsx('who w-full flex flex-col items-center', className)}>
            <h2 className='title'>AI LÀ NGƯỜI ĐÀO TẠO?</h2>
            <p style={{
                fontStyle: 'italic',
                textAlign: 'center'
            }}>
                Đứng lớp đào tạo chuyên sâu chính là 3 Founder của GEIN Academy – bởi vì GEIN muốn truyền tải được kiến thức, kinh nghiệm chuẩn nhất, những thông điệp mạnh mẽ nhất, truyền cảm hứng nhất bởi những tấm gương vượt khó của 3 Founder đại diện theo 3 gốc Đạo Đức – Nghị Lực – Trí Tuệ. Giúp học viên có thể chuyển hóa ngay trong lớp học
            </p>
            <div className='separator sm' />
            
            <Animate
                initial={{ x: -ANIMATION_CONFIG.initPosition }}
                whileInView={{ x: ANIMATION_CONFIG.animatePosition }}
            >
                <div className="flex gap-6">
                    {people.map((person, index) => (
                        <Person
                            key={index}
                            {...person}
                        />
                    ))}
                </div>
            </Animate>
        </Wrapper>
    )
}

type PersonProps = {
    name: string,
    description: string,
    src: string,
}

export const Person: FC<PersonProps> = props =>
{
    const { src, name, description } = props;

    return (
        <div className="flex flex-col items-center">
            <Image
                className='mb-4'
                src={src}
                style={{ borderRadius: 'var(--spacing-2)' }}
            />
            
            <h4 className='mb-2 title'>{name}</h4>
            <p className='title fs-sm'>{description}</p>
            <div className='separator sm dashed' />
        </div>
    )
}