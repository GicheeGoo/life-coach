import PerfectScrollbar from 'react-perfect-scrollbar'

import { SectionA } from './Section/SectionA';
import { SectionB } from './Section/SectionB';

import './Home.scss'

export const Home = () => {
	return (
		<PerfectScrollbar className='wrapper'>
			<div className='home'>
				<SectionA />
				<SectionB />
			</div>
		</PerfectScrollbar>
	)
}
