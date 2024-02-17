import { FC } from "preact/compat";
import { useLocation } from "preact-iso";
import clsx from "clsx";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Image } from "@/components/bases/Image/Image";

import { useBreakPoint } from "@/hooks/useBreakPoint";

import { generateContact } from "@/helpers/contactLink";
import { details } from '@/constants/coach';
import { ROUTE_URL } from "@/constants/routes";
import { dmcaUrl } from "@/constants/dmca";

import logo from '@/assets/logo-lg.png';
import dmca from '@/assets/dmca.png';

import './Footer.scss';

const links = [
    { to: '/contact', label: 'Liên hệ' },
    { to: '/coach', label: 'Tác giả' },
    { to: '/about-us', label: 'Về chúng tôi' },
]

export const Footer: FC = props =>
{
    const { path } = useLocation();
    const isMobile = useBreakPoint('mobile');

    const dark = [ROUTE_URL.home, ROUTE_URL.course]

    return (
        <>
            <Wrapper wrapperClassName={clsx('footer', dark.includes(path) && 'dark')}>
                <div className={clsx('footer-content flex gap-8 py-12', isMobile && 'flex-col px-8')}>
                    <div className='flex-2'>
                        <Image className='mb-4' src={logo} width={101} />
                        <p>Nghề Life Coach ra đời với mong muốn giúp đỡ mọi người có cuộc sống tốt đẹp, hạnh phúc và viên mãn hơn mỗi ngày!</p>

                        <ul className='ml-12' style={{ listStyleType: 'disc' }}>
                            <li>Địa chỉ: {details.address}</li>
                            <li>Hotline: <Link to={generateContact('phone', details.phone.number)}>{details.phone.text}</Link> (<Link to={generateContact('zalo', details.phone.number)}>Zalo</Link>)</li>
                            <li>Email: {details.email}</li>
                            <li>Facebook: <Link to={generateContact('facebook', details.facebook)}>@{details.facebook}</Link></li>
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <h5>Chính sách</h5>
                        <ul>
                            {links.map(link => (
                                <li key={link.to}>
                                    <a href={link.to}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <h5>Giới thiệu</h5>
                        <ul className='mb-4'>
                            {links.map(link => (
                                <li key={link.to}>
                                    <a href={link.to}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <a href={dmcaUrl} target='_blank'>
                            <Image src={dmca} />
                        </a>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

const Link: FC<{ to: string }> = ({ children, to }) => (
    <a
        className='link'
        href={to}
        target='_blank'
    >
        {children}
    </a>
)