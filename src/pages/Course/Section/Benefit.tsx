import { FC } from "preact/compat";
import clsx from "clsx";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Number1, Number2, Number3, Number4, Number5, Number6, SVGProps } from "@/components/bases/SVG";
import { Mark } from "@/components/apps/Content/Mark";
import { useBreakPoint } from "@/hooks/useBreakPoint";

import { CourseSectionProps } from "../Course";

const benefits = [
    {
        index: Number1,
        content: ['Bạn có cơ hội làm chủ 1 bộ môn khoa học về các con số không những giúp bạn thấu hiểu bản thân, mà còn thấu hiểu về gia đình, thấu hiểu những người xung quanh.'],
        mark: ['bộ môn khoa học về các con số']
    },
    {
        index: Number2,
        content: ['Giúp bạn tự lên kế hoạch kinh doanh và lộ trình phát triển bản thân tối ưu theo từng ngày, từng tháng, từng năm.'],
        mark: ['kế hoạch kinh doanh và lộ trình phát triển bản thân']
    },
    {
        index: Number3,
        content: ['Bạn được học các kiến thức liên quan tới con người, kiến thức về Life Coach giúp mọi người chữa lành mối quan hệ, dễ dàng cải thiện mối quan hệ.'],
        mark: ['kiến thức về Life Coach', 'chữa lành mối quan hệ']
    },
    {
        index: Number4,
        content: ['Bạn được cải thiện kiến thức về Parent Coach, giúp các bậc cha mẹ thấu hiểu con, biết cách đồng hành cùng con và thậm chí tự định hướng tương lai cho các con. '],
        mark: ['Parent Coach', 'thấu hiểu con', 'đồng hành cùng con', 'định hướng tương lai']
    },
    {
        index: Number5,
        content: ['Bạn sẽ được học các kiến thức liên quan tới kinh doanh bán hàng, quản trị nhân sự, xây dựng nhân hiệu giúp phát triển công việc kinh doanh vượt trội'],
        mark: ['kinh doanh bán hàng, quản trị nhân sự, xây dựng nhân hiệu']
    },
    {
        index: Number6,
        content: ['Hơn nữa bạn sẽ có thêm 1 nguồn thu nhập không giới hạn từ 1 nghề kinh doanh mới'],
        mark: ['1 nguồn thu nhập không giới hạn']
    },
]

export const Benefit: FC<CourseSectionProps> = ({ className }) =>
{
    const isMobile = useBreakPoint('mobile');
    
    return (
        <Wrapper wrapperClassName='benefit bg bg-1' className={clsx('benefit-content w-full flex flex-col items-center', isMobile ? 'p-8' : className)}>
            <h2 className='title'>LỢI ÍCH KHOÁ HỌC</h2>
            <p><strong>Thiết Kế Bản Đồ Vươn Tới Thành Công</strong></p>
            <div className='separator bold' />

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: 'var(--spacing-4)' }}>
                {benefits.map((benefit, index) => (
                    <Item
                        key={index}
                        index={index}
                        {...benefit}
                    />
                ))}
            </div>
        </Wrapper>
    )
}

const Item: FC<{ mark: string[], content: string[], index: FC<SVGProps> }> = ({ mark, content, index: Index }) =>
{
    return (
        <div style={{ marginBottom: '-1rem' }}>
            <Index width={30} height={30} style={{ marginBottom: '-.5rem' }} />
            <Mark
                content={content as any}
                mark={mark}
                onRender={string => <strong>{string}</strong>}
            />
        </div>
    )
}