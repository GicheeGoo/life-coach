import { FC } from 'preact/compat';
import { useRef, useState } from 'preact/hooks';
import { useLocation } from 'preact-iso';
import clsx from 'clsx'

import { Drawer, IconButton } from 'rsuite';
import Menu from '@rsuite/icons/Menu';

import { Wrapper } from '@/components/bases/Wrapper/Wrapper';
import { Image } from '@/components/bases/Image/Image';

import { useBreakPoint } from '@/hooks/useBreakPoint';

import { routes } from '@/constants/routes';
import logo from '@/assets/logo.png';

import './Header.scss';

export const Header: FC = () =>
{
	const isMobile = useBreakPoint('mobile')

	const { path } = useLocation();

	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const [showMenu, setShowMenu] = useState(false);

	return (
		<Wrapper
			ref={wrapperRef}
			wrapperClassName='header'
			className='header-content flex justify-between'
		>
			<div className={clsx('flex flex-1 items-center px-4', isMobile && 'justify-between')}>
				<a href='/' className='pr-4'>
					<Image src={logo} />
				</a>
				
				{!isMobile && routes.map(route => (
					<a
						key={route.label}
						className={clsx('px-4', path === route.to && 'active')}
						href={route.to}
					>
						{route.label}
					</a>
				))}

				{isMobile && (
					<IconButton
						appearance='link'
						icon={<Menu />}
						color='red'
						onClick={() => setShowMenu(true)}
					/>
				)}
			</div>

			<Drawer
				className='header'
				size='full'
				open={showMenu}
				onClose={() => setShowMenu(false)}
			>
				<Drawer.Body>
					<div className="flex flex-col">
						{routes.map(route => (
							<a
								key={route.label}
								className={clsx('p-2', path === route.to && 'active')}
								href={route.to}
								onClick={() => setShowMenu(false)}
							>
								{route.label}
							</a>
						))}
					</div>
				</Drawer.Body>
			</Drawer>
		</Wrapper>
	);
}
