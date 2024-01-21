import { FC } from 'preact/compat';

import { SectionA } from './Section/SectionA';
import { SectionB } from './Section/SectionB';
import { SectionC } from './Section/SectionC';
import { SectionD } from './Section/SectionD';
import { SectionE } from './Section/SectionE';
import { SectionF } from './Section/SectionF';

import './Home.scss'

export type HomeSection = {
	className: string
}

export const Home: FC = () => {
	const className='pt-40 px-4 pb-4'

	return (
		<div className='home pb-40'>
			<SectionA className={className}/>
			<SectionB className={className}/>
			<SectionC className={className}/>
			<SectionD className={className}/>
			<SectionE className={className}/>
			<SectionF className={className}/>
		</div>
	)
}
