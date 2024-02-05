import { ReactNode } from "preact/compat";

import { Ads } from "@/components/apps/Content/Ads";
import { List } from "@/components/apps/Content/List";
import { Mark } from "@/components/apps/Content/Mark";
import { Video } from "@/components/apps/Content/Video";
import { Image } from "@/components/apps/Content/Image";

export enum Content {
    s = 'section',
    ss = 'semi-section',
    q = 'quote',
    i = 'image',
    v = 'video',
    p = 'paragraph',
    l = 'list',
    b = 'bold',
    ads = 'ads',
    m = 'mark',
    c = 'custom'
}

export type Detail = {
    type: Content,
    content?: ReactNode[],
    mark?: string[],
    style?: string,
    alt?: string,
}

export const generateContent = (data: Detail) =>
{
    const { type, content, style } = data;

    switch (type)
    {
        case Content.s:
            return content.map((c, index) => <h2 key={index}>{c}</h2>);
        case Content.ss:
            return content.map((c, index) => <h3 key={index}>{c}</h3>);
        case Content.p:
            return content.map((c, index) => <p key={index}>{c}</p>);
        case Content.b:
            return content.map((c, index) => (
                <p
                    key={index}
                    style={{ fontStyle: style }}
                >
                    <strong>{c}</strong>
                </p>
            ));
        case Content.i: return <Image {...data} />
        case Content.l: return <List {...data} />
        case Content.m: return <Mark {...(data as any)} />
        case Content.v: return <Video {...(data as any)} />
        case Content.q: return (
            <blockquote className='mb-4'>
                {content.map(((c, index) => <p key={index}>{c}</p>))}
            </blockquote>
        )
        case Content.ads: return <Ads />
        default: return content;
    }
}