import { FC } from "preact/compat";
import clsx from "clsx";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";

import { CourseSectionProps } from "../Course";

export const Solution: FC<CourseSectionProps> = ({ className }) =>
{
    return (
        <Wrapper className={clsx('solution', className)}>
            <div className='flex flex-col items-center'>
                <h2>GIẢI PHÁP DÀNH CHO BẠN</h2>
                <div className='separator' />
            </div>

            <div className='h-96' />
        </Wrapper>
    )
}