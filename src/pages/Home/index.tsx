
import { SectionA } from './Section/SectionA';
import { SectionB } from './Section/SectionB';

import './Home.scss'

export const Home = () => {
	return (
			<div className='home'>
				<SectionA />
				<SectionB />
			</div>
	)
}
