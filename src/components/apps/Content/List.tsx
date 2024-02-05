import { FC } from "preact/compat";
import { Detail } from "@/utils/generateContent";

export const List: FC<Detail> = props =>
{
    const { content, style = 'disc' } = props;

    return (
        <ul className='ml-8 mb-4' style={{ listStyleType: style }}>
            {content.map((c, index) => (
                <li key={index}>
                    {c}
                </li>
            ))}
        </ul>
    )
}