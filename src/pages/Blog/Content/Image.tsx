import { FC } from "preact/compat";
import { Detail } from "../posts";
import { Image as BaseImage } from "@/components/bases/Image/Image";

export const Image: FC<Detail> = props =>
{
    const { content, alt } = props;
    return (
        <div className='flex flex-col items-center'>
            <div className='flex w-full gap-8'>
                {content.map((src, index) => (
                    <div key={index} className='flex-1'>
                        <BaseImage src={src as string}/>
                    </div>
                ))}
            </div>
            <p>{alt}</p>
        </div>
    )
}