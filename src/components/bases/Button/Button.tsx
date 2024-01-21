import { FC } from "preact/compat";
import clsx from "clsx";

import {
    Button as Btn,
    type ButtonProps as BtnProps
} from "rsuite";

import './Button.scss';

export type ButtonProps = BtnProps & {
    rounded?: boolean
} 

export const Button: FC<ButtonProps> = props =>
{
    const { rounded, className, ...btnProps } = props;

    const classes = clsx(
        className,
        {
            ['btn-rounded']: rounded
        }
    )

    return (
        <Btn
            className={classes}
            {...btnProps}
        />
    )
}