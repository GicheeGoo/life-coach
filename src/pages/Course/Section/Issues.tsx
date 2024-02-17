import { FC } from "preact/compat";
import clsx from "clsx";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Animate } from "@/components/bases/Animate/Animate";
import { Cash, Cursor, Downtrend, Fish, Group, Passion, PowerButton, SVGProps, SiteMap } from "@/components/bases/SVG";

import { CourseSectionProps } from "../Course";

import { ANIMATION_CONFIG } from "@/constants/animationConfig";
import { useBreakPoint } from "@/hooks/useBreakPoint";

const issues = [
    {
        icon: Cursor,
        title: 'Định Hướng',
        content: 'Mất định hướng trong cuộc sống, không có mục tiêu, không có kế hoạch cho cuộc đời của mình'
    },
    {
        icon: Group,
        title: 'Mối Quan Hệ',
        content: 'Mối quan hệ gia đình bị rạn nứt: không thấu hiểu vợ, chồng của mình, không có sự kết nối với gia đình 2 bên nội ngoại'
    },
    {
        icon: Cash,
        title: 'Tài Chính',
        content: 'Không có thu nhập, sống phụ thuộc kinh tế vào người khác dẫn đến không có tiếng nói và giá trị trong gia đình'
    },
    {
        icon: Passion,
        title: 'Đam Mê',
        content: 'Không có sự đam mê trong công việc, mau chán nản, trì trệ không có sự thăng tiến'
    },
    {
        icon: Downtrend,
        title: 'Tiêu Cực',
        content: 'Tiêu cực về mọi vấn đề trong cuộc sống, nhìn đâu cũng thấy khó khăn, đau khổ, bế tắc, không vừa ý'
    },
    {
        icon: PowerButton,
        title: 'Kỷ Luật Kém',
        content: 'Không biết cách lên kế hoạch cho cuộc đời hoặc có lên thì cũng không có sự kỷ luật để duy trì'
    },
    {
        icon: Fish,
        title: 'Sai Môi Trường',
        content: 'Là người linh hoạt, thích giao tiếp nhưng lại làm ở môi trường gò bó, im lặng hoặc ngược lại'
    },
    {
        icon: SiteMap,
        title: 'Quản Lý Kém',
        content: 'Là quản lý, chủ doanh nghiệp, nhưng không biết cách làm việc và định hướng cho nhân viên.'
    },
]

export const Issues: FC<CourseSectionProps> = ({ className }) =>
{
    const isMobile = useBreakPoint('mobile');

    return (
        <Wrapper className={clsx('issue my-8', isMobile && 'p-8')}>
            <div className='flex flex-col items-center'>
                <h2 className='title'>8 VẤN ĐỀ AI CŨNG TỪNG TRẢI QUA TRONG CUỘC ĐỜI</h2>
                <div className='separator dashed' />
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr 1fr'
                }}
            >
                {issues.map((issue, index) => (
                    <Animate key={index} initial={{ y: -ANIMATION_CONFIG.initPosition }} whileInView={{ y: ANIMATION_CONFIG.animatePosition }}>
                        <Issue {...issue} />
                    </Animate>
                ))}
            </div>
        </Wrapper>
    )
}

type IssueProps = {
    icon: FC<SVGProps>,
    title: string,
    content: string
}

const Issue: FC<IssueProps> = props =>
{
    const { icon: IssueIcon, title, content } = props;

    return (
        <div className='flex flex-col items-center px-2 mb-4'>
            <div style={{ textAlign: 'center' }}>
                <IssueIcon 
                    width={30}
                    height={30}
                    fill='var(--section-color)'
                />
                <h5>{title}</h5>
                <p>{content}</p>
            </div>

            <div className='separator dashed' />
        </div>
    )
}