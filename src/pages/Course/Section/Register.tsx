import { FC } from "preact/compat";
import clsx from "clsx";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { RegisterForm } from "@/components/apps/RegisterForm/RegisterForm";

import { useBreakPoint } from "@/hooks/useBreakPoint";

import { CourseSectionProps } from "../Course";

const details = [
    '3 ngày học chuyên sâu',
    '1 ngày học nâng cao',
    '30 bản đồ Map For Success',
    'Hơn 100+ khóa học online',
    'Học miễn phí các khóa online và offline 1 năm',
    'Thấu hiểu bản thân, hiểu nguời',
    'Trở thành Life Coach'
]

export const Register: FC<CourseSectionProps> = ({ className }) =>
{
    const isMobile = useBreakPoint('mobile');
    
    return (
        <Wrapper wrapperClassName='register bg bg-2' className={clsx('flex', isMobile ? 'p-8 flex-col gap-8' : className)}>
            <div className='flex-1'>
                <h2>ĐĂNG KÝ NGAY</h2>
                <h3 style={{ color: 'var(--section-color)' }}>25.000.000đ</h3>
                <ul>
                    {details.map(detail => (
                        <Detail key={detail}>
                            {detail}
                        </Detail>
                    ))}
                </ul>
            </div>

            <div className='flex-1'>
                <RegisterForm />
            </div>
        </Wrapper>
    )
}

const Detail: FC = ({ children }) => (
    <div className='flex gap-4 items-center'>
        <svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={12}
            height={12}
            fill='var(--section-color)'
        >
            <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
        </svg>

        <p className='m-0'>{children}</p>
    </div>
)