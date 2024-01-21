import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import PerfectScrollbar from 'react-perfect-scrollbar'

import { Header } from './components/apps/Header/Header.js';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import { Blog } from './pages/Blog/Blog';

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
						<Route path="/" component={Home} />
						<Route path="/blog" component={Blog} />
						<Route default component={NotFound} />
					</Router>
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
