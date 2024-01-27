import { FC, Fragment } from "preact/compat";
import { Detail } from "../posts";

export const Mark: FC<Detail> = props =>
{
    const { content, mark = [] } = props;

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
                        <span className='color-primary'>{newWord}</span>
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