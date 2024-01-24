import { FC } from "preact/compat";

import { Intro } from "./Section/Intro";
import { Issue } from "./Section/Issue";
import { Solution } from "./Section/Solution";
import { MapForSuccess } from "./Section/MapForSuccess";
import { Details } from "./Section/Details";
import { Who } from "./Section/Who";

import './Course.scss';

export type CourseSectionProps = {
    className: string
}

export const Course: FC = props =>
{
    const className = 'px-24 py-8 mb-12';

    return (
        <div className='course pb-40'>
            <Intro className={className} />
            <Issue className={className} />
            <Solution className={className} />
            <MapForSuccess className={className} />
            <Details className={className} />
            <Who className={className} />
        </div>
    )
}