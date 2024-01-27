import { FC, Fragment } from "preact/compat";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";

import { Content, Post as PostType, Detail } from "../posts";
import { Image } from "../Content/Image";
import { List } from "../Content/List";
import { Mark } from "../Content/Mark";
import { Video } from "../Content/Video";

import './Post.scss';

export const Post: FC<PostType> = props =>
{
    const { title, author, createdDate, details } = props;

    const renderDetail = (detail: Detail) =>
    {
        const { type, content, style } = detail;

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
            case Content.i: return <Image {...detail} />
            case Content.l: return <List {...detail} />
            case Content.m: return <Mark {...detail} />
            case Content.v: return <Video {...detail} />
            case Content.q: return (
                <blockquote>
                    {content.map(((c, index) => <p key={index}>{c}</p>))}
                </blockquote>
            )
            // case Content.ads: return 
        }

    }

    return (
        <Wrapper
            wrapperClassName='blog-wrapper px-4'
            className='blog p-12 bg-light'
        >
            <h1>
                {title}
            </h1>

            <div className="flex gap-2 color-primary mb-4">
                <a href='/#comment'>
                    Leave a Comment
                </a>
                /
                <div>By <a href={`/author/${author}`}>{author}</a></div>
                /
                {createdDate}
            </div>

            {details.map((detail, index) => (
                <Fragment key={index}>
                    {renderDetail(detail)}
                </Fragment>
            ))}
        </Wrapper>
    )
}