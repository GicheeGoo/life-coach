import { useLayoutEffect, useRef } from 'preact/hooks';
import { useLocation } from 'preact-iso';
import { IconButton } from 'rsuite';

import CreditCardMinusIcon from '@rsuite/icons/CreditCardMinus';

import { Wrapper } from '../bases/Wrapper/Wrapper';

import logo from '../../assets/logo.png';

import './Header.scss';

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
		<div ref={wrapperRef} className='header float'>
			<Wrapper className='header-content flex justify-between'>
				<div className='flex flex-1 items-center'>
					<a href='/' className='pr-4'>
						<img src={logo} />
					</a>

					{routes.map(route => (
						<a
							key={route.label}
							className='px-4'
							href={route.to}
						>
							{route.label}
						</a>
					))}
				</div>

				<div className='flex flex-0 items-center'>					
					<IconButton
						color='red'
						appearance='primary'
						icon={<CreditCardMinusIcon />}
						circle
					/>
				</div>
			</Wrapper>
		</div>
	);
}
