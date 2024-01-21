
import { SectionA } from './Section/SectionA';
import { SectionB } from './Section/SectionB';
import { SectionC } from './Section/SectionC';
import { SectionD } from './Section/SectionD';

import './Home.scss'

export type HomeSection = {
	className: string
}

export const Home = () => {
	const className='pt-40 px-4 pb-4'

	return (
			<div className='home'>
				<SectionA className={className}/>
				<SectionB className={className}/>
				<SectionC className={className}/>
				<SectionD className={className}/>
			</div>
	)
}
