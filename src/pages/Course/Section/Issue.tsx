import { FC } from "preact/compat";
import clsx from "clsx";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";

import { CourseSectionProps } from "../Course";

export const Issue: FC<CourseSectionProps> = ({ className }) =>
{
    return (
        <Wrapper className={clsx('issue', className)}>
            <div className='flex flex-col items-center'>
                <h2 className='title'>8 VẤN ĐỀ AI CŨNG TỪNG TRẢI QUA TRONG CUỘC ĐỜI</h2>
                <div className='separator dashed' />
            </div>

            <div className='h-96' />
        </Wrapper>
    )
}