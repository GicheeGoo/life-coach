import { CSSProperties, FC } from "preact/compat";

type WrapperProps = {
    className?: string,
    style?: CSSProperties
}

export const Wrapper: FC<WrapperProps> = props =>
{
    const { className, style, children } = props;

    return (
        <div
            className={className}
                style={{
                width: 1200,
                maxWidth: '100%',
                margin: 'auto',
                padding: '10rem 1rem 1rem',
                ...style
            }}
        >
            {children}
        </div>
    )
}