import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { FC } from "preact/compat";
import { CourseSectionProps } from "../Course";
import clsx from "clsx";

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
            <div className='separator sm'/>
        </Wrapper>
    )
}