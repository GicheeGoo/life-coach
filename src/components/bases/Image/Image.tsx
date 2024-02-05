import { FC, HTMLAttributes, TargetedEvent } from "preact/compat";
import clsx from "clsx";

import unknown from '@/assets/unknown.png'

import './Image.scss';

export const Image: FC<HTMLAttributes<HTMLImageElement> & { rounded?: boolean }> = props =>
{
    const { className, rounded, ...imgProps } = props;

    const classes = clsx('img', className, rounded && 'rounded');

    const handleError = (event: TargetedEvent<HTMLImageElement>) =>
    {
        const target = event.target as HTMLImageElement;
        target.src = unknown;
        target.width = 80;
        target.height = 80;
    }

    return (
        <img
            className={classes}
            onError={handleError}
            {...imgProps}
        />
    )
}