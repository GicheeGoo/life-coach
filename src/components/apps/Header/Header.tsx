import { useRef } from 'preact/hooks';
import { useLocation } from 'preact-iso';
import { IconButton } from 'rsuite';
import clsx from 'clsx'

import CreditCardMinusIcon from '@rsuite/icons/CreditCardMinus';

import { Wrapper } from '@/components/bases/Wrapper/Wrapper';
import { Image } from '@/components/bases/Image/Image';

import { routes } from '@/constants/routes';
import logo from '@/assets/logo.png';

import './Header.scss';

export const Header = () => {
	const { path } = useLocation();

	const wrapperRef = useRef<HTMLDivElement | null>(null);

	return (
		<Wrapper
			ref={wrapperRef}
			wrapperClassName='header'
			className='header-content flex justify-between'
		>
			<div className='flex flex-1 items-center px-4'>
				<a href='/' className='pr-4'>
					<Image src={logo} />
				</a>

				{routes.map(route => (
					<a
						key={route.label}
						className={clsx('px-4', path === route.to && 'active')}
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
	);
}
