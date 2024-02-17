import { FC } from "preact/compat";
import { Panel, PanelGroup } from "rsuite";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { useBreakPoint } from "@/hooks/useBreakPoint";

import { CourseSectionProps } from "../Course";
import clsx from "clsx";

const list = [
    {
        content: 'KHOÁ HỌC ĐÃ CHUYỂN HOÁ HƠN 15.000 NGƯỜI',
    },
    {
        content: '8 VẤN ĐỀ AI CŨNG TỪNG TRẢI QUA TRONG CUỘC ĐỜI',
    },
    {
        content: 'GIẢI PHÁP DÀNH CHO BẠN',
    },
    {
        content: 'Khóa học Thiết kế bản đồ thành công Map For Success',
        subs: ['Giới thiệu khóa học']
    },
    {
        content: 'NỘI DUNG KHOÁ HỌC',
    },
    {
        content: 'TỔNG QUAN VỀ BẢN ĐỒ MAP FOR SUCCESS, GEIN ACADEMY',
    },
    {
        content: 'ỨNG DỤNG MAP FOR SUCCESS TRONG QUẢN TRỊ NHÂN SỰ',
    },
    {
        content: 'THẤU HIỂU BẢN THÂN ĐỊNH HƯỚNG CUỘC ĐỜI',
    },
    {
        content: 'ĐỊNH HƯỚNG VỀ NGHỀ LIFE COACH',
    },
    {
        content: 'Ai Là Người Đào Tạo?',
        subs: [
            'Nguyễn Diệu Thu',
            'Lang Công Đạt',
            'Nguyễn Thị Thạch Thảo'
        ]
    },
    {
        content: 'LỢI ÍCH KHÓA HỌC',
    },
    {
        content: 'ĐẶC BIỆT BẠN SẼ ĐƯỢC TẶNG THÊM',
        subs: [
            '+100 khóa học',
            '30 bản map',
            'Khóa học trực tiếp'
        ]
    },
    {
        content: 'CÂU CHUYỆN CHUYỂN HÓA',
    },
    {
        content: 'ĐĂNG KÝ NGAY',
    },
    {
        content: 'Câu hỏi thường gặp',
    },
] as { content: string, subs?: string[] }[]

// const list = {
//     intro: { content: 'KHOÁ HỌC ĐÃ CHUYỂN HOÁ HƠN 15.000 NGƯỜI' },
//     issues: { content: '8 VẤN ĐỀ AI CŨNG TỪNG TRẢI QUA TRONG CUỘC ĐỜI' },
//     solution: { content: 'GIẢI PHÁP DÀNH CHO BẠN' },
//     course: {
//         content: 'Khóa học Thiết kế bản đồ thành công Map For Success',
//         subs: ['Giới thiệu khóa học']
//     },
//     details: { content: 'NỘI DUNG KHOÁ HỌC' },

// }

export const TableOfContent: FC<CourseSectionProps> = ({ className }) =>
{
    const isMobile = useBreakPoint('mobile');

    const renderLink = (content: string) => (
        <a href={`#${content.toLowerCase().split(' ').join('-')}`}>
            {content}    
        </a>
    )

    return (
        <Wrapper className={clsx('toc', isMobile ? 'px-8' : 'px-24')}>
            <PanelGroup bordered accordion>
                <Panel
                    header={(
                        <div className='fs-lg'>
                            Mục lục nội dung
                        </div>
                    )}
                    collapsible
                >
                    <ol className='px-8'>
                        {list.map(({ content, subs }, index) => (
                            <li key={index} className='mb-2'>
                                {renderLink(content)}
                                {Array.isArray(subs) && (
                                    <ul className='pl-4' style={{ listStyleType: 'decimal' }}>
                                        {subs.map(sub => (
                                            <li key={sub}>{renderLink(sub)}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ol>
                </Panel>
            </PanelGroup>
        </Wrapper>
    )
}