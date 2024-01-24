import { CSSProperties, PropsWithChildren, forwardRef } from "preact/compat";
import clsx from "clsx";

import './Wrapper.scss';

type WrapperProps = {
    wrapperClassName?: string,
    className?: string,
    style?: CSSProperties
}

export const Wrapper = forwardRef<HTMLDivElement, PropsWithChildren<WrapperProps>>((props, ref) =>
{
    const { wrapperClassName, className, style, children } = props;

    return (
        <div ref={ref} className={wrapperClassName}>
            <div
                className={clsx('wrapper-content', className)}
                style={style}
            >
                {children}
            </div>
        </div>
    )
})