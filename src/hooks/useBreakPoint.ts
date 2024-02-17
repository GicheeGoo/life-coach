import { useLayoutEffect, useState } from "preact/hooks"

export enum BreakPoints {
    mobile = 576,
    tablet = 768,
    'desktop-sm' = 992,
    desktop = 1024,
    'w-1280' = 1280,
    'w-1440' = 1440,
    hd = 1600,
    'w-1800' = 1800,
    wqhd = 2500,
    'w-4k' = 4000,
    'w-5k' = 5100
}

type BreakPoint = keyof typeof BreakPoints

type BreakPointHook = (type: BreakPoint) => boolean

export const useBreakPoint: BreakPointHook = type =>
{
    const [state, setState] = useState(false);

    useLayoutEffect(() =>
    {
        handleResize();
    }, [])

    useLayoutEffect(() =>
    {        
        window.addEventListener('resize', handleResize)

        return () =>
        {
            window.removeEventListener('resize', handleResize)
        }
    }, [state])

    const handleResize = () =>
    {
        const w = window.outerWidth;
        const bps = <BreakPoint[]>Object.keys(BreakPoints)
        
        let i = 0;
        while (i < bps.length)
        {
            const bp = bps[i];
            if (w <= BreakPoints[bp])
            {
                setState(type === bp);
                break;
            }

            i++
        }
    }

    return state;
}