import { FC } from "preact/compat";
import { Image as BaseImage } from "@/components/bases/Image/Image";
import { Detail } from "@/utils/generateContent";

export const Image: FC<Detail> = props =>
{
    const { content, alt } = props;
    return (
        <div className='flex flex-col items-center'>
            <div className='flex w-full gap-8'>
                {content.map((src, index) => (
                    <div key={index} className='flex flex-1 justify-center'>
                        <BaseImage src={src as string}/>
                    </div>
                ))}
            </div>
            <p>{alt}</p>
        </div>
    )
}