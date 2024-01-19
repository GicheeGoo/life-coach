import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/Header/Header.js';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';

import '@/styles/all.scss'
import 'rsuite/dist/rsuite-no-reset.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export function App() {
	return (
		<LocationProvider>
			<div style={{ width: '100vw', height: '100vh' }}>
				<Header />
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
				</Router>
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
