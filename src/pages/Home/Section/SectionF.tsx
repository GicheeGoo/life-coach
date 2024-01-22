import { FC } from "preact/compat";
import clsx from "clsx";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Button } from "@/components/bases/Button/Button";
import { Image } from "@/components/bases/Image/Image";
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube
} from "@/components/bases/SVG";

import { HomeSection } from "..";

import book1 from '@/assets/book1.png';
import book2 from '@/assets/book2.png';
import book3 from '@/assets/book3.png';
import { ROUTE_URL } from "@/constants/routes";

const books = [
    {
        src: book1,
        title: 'Sách Chuyển hóa bản thân sống đời ngoại hạng',
        to: '',
        // to: '/san-pham/sach-chuyen-hoa-ban-than-song-doi-ngoai-hang'
    },
    {
        src: book2,
        title: 'Sách Bậc thầy của nghệ thuật coaching',
        to: '',
        // to: '/sach/bac-thay-cua-nghe-thuat-coaching'
    },
    {
        src: book3,
        title: 'Sách Bậc thầy của nghệ thuật coaching',
        to: ''
    }
]

export const SectionF: FC<HomeSection> = ({ className }) =>
{
    return (
        <Wrapper className={clsx('flex gap-8', className)}>
            <div className='head-line head-line-left w-full' style={{ maxWidth: '25%' }}>
                <h2>Ấn phẩn nổi bật</h2>
                <p>Những cuốn sách, ebook hay những ấn phẩm ý nghĩa đang được nhiều người mua đọc, sử dụng hoặc làm quà tặng</p>
                <Button
                    appearance='primary'
                    color='red'
                    size='lg'
                    href={ROUTE_URL.store}
                    rounded
                >
                    Xem tất cả
                </Button>
            </div>

            {books.map((book, index) => (
                <Book
                    key={index}
                    {...book}
                />
            ))}
        </Wrapper>
    )
}

const Book: FC<(typeof books)[number]> = props =>
{
    const { src, title, to } = props

    const svgProps = {
        width: 16,
        height: 16,
    }

    return (
        <div className='book flex-1'>
            <Image className='mb-8' src={src} />
            <h5>{title}</h5>
            <div className='flex gap-6 justify-center'>
                <Facebook {...svgProps} />
                <Twitter {...svgProps} />
                <Instagram {...svgProps} />
                <Youtube {...svgProps} />
            </div>
        </div>
    )
}