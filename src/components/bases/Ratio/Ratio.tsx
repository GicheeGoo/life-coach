import { CSSProperties, FC } from "preact/compat";
import clsx from "clsx";

import './Ratio.scss';

type RatioProps = {
    width: number,
    height: number
    className?: string
}

type RatioVariable = CSSProperties & {
    '--height-ratio': string
}

export const Ratio: FC<RatioProps> = props =>
{
    const { width, height, className, children } = props;

    const ratioVariable: RatioVariable = {
        '--height-ratio': `calc(${height} / ${width} * 100%)`,
    };

    return (
        <div
            className={clsx('ratio', className)}
            style={ratioVariable}
        >
            {children}
        </div>
    );
}