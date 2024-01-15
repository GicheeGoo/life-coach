import { useLayoutEffect, useRef, useState } from 'preact/hooks';
import { useLocation } from 'preact-iso';

import Nav from 'rsuite/esm/Nav/Nav';
import Navbar from 'rsuite/esm/Navbar/Navbar';

import CreditCardMinusIcon from '@rsuite/icons/CreditCardMinus';

import logo from '../../assets/logo.png';

import './Header.scss';
import { IconButton } from 'rsuite';

const routes = [
	{ label: 'Home', to: '/' },
	{ label: 'Blog', to: '/blog' },
	{ label: 'GEIN Academy', to: '/gein' },
	{ label: 'Khoá học', to: '/khoa-hoc' },
];

export const Header = () => {
	const { path } = useLocation();

	const wrapperRef = useRef<HTMLDivElement | null>(null);

	useLayoutEffect(() => {
		document.addEventListener('scroll', handleScroll, true)
	}, [])

	const handleScroll = (event: Event) => {
		const wrapper = wrapperRef.current;
		if (!wrapper) {
			return;
		}

		const target = event.target as HTMLElement;
		if (!target?.classList.contains('wrapper')) {
			return;
		}

		if (target.scrollTop < 20) {
			wrapper.classList.add('float')
		}
		else {
			wrapper.classList.remove('float')
		}
	}

	return (
		<Navbar ref={wrapperRef} className='header float'>
			<Navbar.Brand href="/" className='header-logo'>
				<img src={logo} />
			</Navbar.Brand>

			<Nav activeKey={path}>
				{routes.map(route => (
					<Nav.Item key={route.label} href={route.to} eventKey={route.to}>
						{route.label}
					</Nav.Item>
				))}
			</Nav>
			<Nav pullRight className='nav-right'>
				<IconButton
					color='red'
					appearance='primary'
					icon={<CreditCardMinusIcon />}
					circle
				/>
			</Nav>
		</Navbar>
	);
}
