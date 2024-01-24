import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import PerfectScrollbar from 'react-perfect-scrollbar'

import { Header } from '@/components/apps/Header/Header';
import { Footer } from '@/components/apps/Footer/Footer';
import { Copyright } from '@/components/apps/Copyright/Copyright';
import { Contacts } from '@/components/apps/Contacts/Contacts';

import { Home } from '@/pages/Home';
import { Blog } from '@/pages/Blog/Blog';
import { Course } from '@/pages/Course/Course';
import { NotFound } from '@/pages/_404';
import { ROUTE_URL } from '@/constants/routes';

import '@/styles/all.scss'
import 'rsuite/dist/rsuite-no-reset.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export function App() {
	return (
		<LocationProvider>
			<div className='overflow-hidden w-screen h-screen'>
				<PerfectScrollbar options={{ suppressScrollX: true }}>
					<Header />
					<Router>
						<Route path={ROUTE_URL.home} component={Home} />
						<Route path={ROUTE_URL.blog} component={Blog} />
						<Route path={ROUTE_URL.course} component={Course} />
						<Route default component={NotFound} />
					</Router>
					<Footer />
					<Copyright />
					<Contacts />
				</PerfectScrollbar>
			</div>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
