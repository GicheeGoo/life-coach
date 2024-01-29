import { FC, ReactNode } from "preact/compat";
import clsx from "clsx";

import SuccessIcon from '@rsuite/icons/CheckRound';
import InfoIcon from '@rsuite/icons/InfoRound';
import WarningIcon from '@rsuite/icons/RemindFill';
import DangerIcon from '@rsuite/icons/WarningRound';

import './Callout.scss';

export type CalloutProps = {
    type?: 'success' | 'warning' | 'danger' | 'info',
    className?: string
    title?: ReactNode
    message?: ReactNode
}

export const Callout: FC<CalloutProps> = props =>
{
    const { type = 'success', className, title, message } = props;

    const classes = clsx('callout p-4 mb-4', `callout-${type}`, className)

    const renderIcon = () =>
    {
        switch (type)
        {
            case 'danger': return <DangerIcon />;
            case 'info': return <InfoIcon />;
            case 'warning': return <WarningIcon />;
            default: return <SuccessIcon />;
        }
    }

    return (
    <div className={classes}>
            <div className='flex gap-4 items-center'>
                <div className='flex-none'>
                    {renderIcon()}
                </div>
                <h4 className='m-0'>{title}</h4>
            </div>
            <div>{message}</div>
        </div>

    )
}