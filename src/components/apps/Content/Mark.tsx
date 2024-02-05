import { FC, Fragment, ReactNode } from "preact/compat";
import { Detail } from "@/utils/generateContent";

type MarkProps = Pick<Detail, 'content' | 'mark'> &
    { onRender?: (mark: string) => ReactNode }

export const Mark: FC<MarkProps> = props =>
{
    const { content, mark = [], onRender } = props;

    const signal = '%x%';

    const handleSign = () =>
    {
        const str = content[0] as string;
        let string = str;

        mark.forEach(item => string = string.replace(item, signal))

        return string;
    }

    const handleMark = () =>
    {
        const str = handleSign();
        const array = str.split(' ');
        let count = 0;

        return array.map(word =>
        {
            if (word.includes(signal))
            {
                const splitted = word.split(signal);
                const newWord = mark[count];
                count++;
                return (
                    <>
                        {splitted[0]}
                        {onRender?.(newWord) ?? <span className={'color-primary'}>{newWord}</span>}
                        {splitted[1]}
                    </>
                );
            }
            
            return word;
        })
    }

    return (
        <p>
            {handleMark().map((word, index) => <Fragment key={index}>{word} </Fragment>)}
        </p>
    )
}