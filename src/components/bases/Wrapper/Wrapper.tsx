import { CSSProperties, FC, PropsWithChildren, forwardRef } from "preact/compat";

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
                className={className}
                    style={{
                    width: 1200,
                    maxWidth: '100%',
                    margin: 'auto',
                    ...style
                }}
            >
                {children}
            </div>
        </div>
    )
})