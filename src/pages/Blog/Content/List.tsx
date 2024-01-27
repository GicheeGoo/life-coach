import { FC } from "preact/compat";
import { Detail } from "../posts";

export const List: FC<Detail> = props =>
{
    const { content, style = 'disc' } = props;

    return (
        <ul style={{ listStyleType: style }}>
            {content.map((c, index) => (
                <li key={index}>
                    {c}
                </li>
            ))}
        </ul>
    )
}