import { FC } from "preact/compat";
import clsx from "clsx";

import { Image as BaseImage } from "@/components/bases/Image/Image";

import { useBreakPoint } from "@/hooks/useBreakPoint";
import { Detail } from "@/utils/generateContent";

export const Image: FC<{ rounded?: boolean } & Pick<Detail, 'content' | 'alt' | 'width'>> = props =>
{
    const { rounded, content, width, alt } = props;

    const isMobile = useBreakPoint('mobile');

    return (
        <div className='flex flex-col items-center'>
            <div className={clsx('flex gap-4', isMobile ? 'w-screen flex-col' : 'w-full')}>
                {content.map((src, index) => (
                    <div key={index} className='flex flex-1 justify-center'>
                        <BaseImage src={src as string} style={{ width, borderRadius: rounded ? 'var(--spacing-2)' : 0 }} />
                    </div>
                ))}
            </div>
            <p style={{ textAlign: 'center' }}>{alt}</p>
        </div>
    )
}