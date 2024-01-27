import { FC } from "preact/compat";
import { CourseSectionProps } from "../Course";
import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import clsx from "clsx";

export const Benefit: FC<CourseSectionProps> = ({ className }) =>
{
    return (
        <Wrapper wrapperClassName='benefit bg bg-1' className={clsx('benefit-content flex flex-col items-center', className)}>
            <h2 className='title'>LỢI ÍCH KHOÁ HỌC</h2>
            <p><strong>Thiết Kế Bản Đồ Vươn Tới Thành Công</strong></p>
            <div className='separator bold' />
        </Wrapper>
    )
}