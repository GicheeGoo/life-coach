import { FC } from "preact/compat";

import { Ratio } from "@/components/bases/Ratio/Ratio";

import { Detail } from "@/utils/generateContent";
import { useBreakPoint } from "@/hooks/useBreakPoint";

export const Video: FC<{ rounded?: boolean } & Pick<Detail, 'content'>> = props =>
{
    const { content, rounded } = props;
    
    const isMobile = useBreakPoint('mobile');

    return (
        <div className={isMobile ? 'w-screen' : undefined} style={{ marginLeft: isMobile ? 'calc(-1 * var(--spacing-8))' : 0 }}>
            <Ratio className='mb-4' width={1200} height={675}>
                <iframe
                    src={content[0] as string}
                    frameborder={0}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                    style={{ borderRadius: (!isMobile && rounded) ? 'var(--spacing-2)' : 0 }}
                />
            </Ratio>
        </div>
    )
}
