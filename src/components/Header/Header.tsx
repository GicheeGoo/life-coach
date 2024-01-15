import { useState } from 'preact/hooks';
import { useLocation } from 'preact-iso';

import Nav from 'rsuite/esm/Nav/Nav';
import Navbar from 'rsuite/esm/Navbar/Navbar';

import logo from '../../assets/logo.png';

import './Header.scss';

const routes = [
	{ label: 'Home', to: '/' },
	{ label: 'Blog', to: '/blog' },
	{ label: 'GEIN Academy', to: '/gein' },
	{ label: 'Khoá học', to: '/khoa-hoc' },
];

export function Header() {
	const { path } = useLocation();

	return (
		<Navbar className='header'>
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
			<Nav pullRight>
				<Nav.Item>Settings</Nav.Item>
			</Nav>
		</Navbar>
	);
}
