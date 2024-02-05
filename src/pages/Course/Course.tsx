import { FC } from "preact/compat";
import { MotionConfig } from "framer-motion";

import { Intro } from "./Section/Intro";
import { Issues } from "./Section/Issues";
import { Solution } from "./Section/Solution";
import { MapForSuccess } from "./Section/MapForSuccess";
import { Details } from "./Section/Details";
import { Who } from "./Section/Who";
import { Benefit } from "./Section/Benefit";
import { Bonus } from "./Section/Bonus";
import { Stories } from "./Section/Stories";
import { Register } from "./Section/Register";
import { FAQ } from "./Section/FAQ";
import { TableOfContent } from "./Section/TableOfContent";

import './Course.scss';

export type CourseSectionProps = {
    className: string
}

export const Course: FC = props =>
{
    const className = 'px-24 py-8 mb-12';

    return (
        <MotionConfig transition={{ duration: .3, delay: .1 }}>
            <div className='course pb-40'>
                <Intro className={className} />
                <Issues className={className} />
                <Solution className={className} />
                <MapForSuccess className={className} />
                <Details className={className} />
                <Who className={className} />
                <Benefit className={className} />
                <Bonus className={className} />
                <Stories className={className} />
                <Register className={className} />
                <FAQ className={className} />
                <TableOfContent className={className} />
            </div>
        </ MotionConfig>
    )
}