import { FC } from "preact/compat";
import { useLocation } from "preact-iso";
import clsx from "clsx";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Image } from "@/components/bases/Image/Image";

import { details } from '@/constants/coach';
import { generateContact } from "@/helpers/contactLink";
import logo from '@/assets/logo.png';
import { ROUTE_URL } from "@/constants/routes";

import './Footer.scss';

const links = [
    { to: '/contact', label: 'Liên hệ' },
    { to: '/coach', label: 'Tác giả' },
    { to: '/about-us', label: 'Về chúng tôi' },
]

export const Footer: FC = props =>
{
    const { path } = useLocation();

    return (
        <>
            <Wrapper wrapperClassName={clsx('footer', path === ROUTE_URL.home && 'dark')}>
                <div className='footer-content flex gap-8 py-12'>
                    <div className='flex-2'>
                        <Image src={logo} />
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