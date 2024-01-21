import { FC, HTMLAttributes, TargetedEvent } from "preact/compat";

import unknown from '@/assets/unknown.png'

export const Image: FC<HTMLAttributes<HTMLImageElement>> = props =>
{
    const handleError = (event: TargetedEvent<HTMLImageElement>) =>
    {
        const target = event.target as HTMLImageElement;
        target.src = unknown;
    }

    return (
            <img onError={handleError} {...props} />
    )
}