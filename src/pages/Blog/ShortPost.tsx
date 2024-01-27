import { FC } from "preact/compat";

export type ShortPostProps = {
    title: string,
    description: string,
    image: string,
    link: string,
    datePublished: string,
    imageAlt: string
}

export const ShortPost = (props: ShortPostProps) => {
    const { title, description, image, datePublished, link, imageAlt } = props;

    return (
        <article class="post type-post status-publish format-standard has-post-thumbnail hentry category-gein ast-grid-common-col ast-full-width ast-article-post ast-width-md-6 ast-archive-post" itemtype="https://schema.org/CreativeWork" >
            <div class="ast-post-format- blog-layout-1 ast-article-inner ast-no-date-box">
                <div class="post-content ast-grid-common-col">
                    <h2 class="entry-title ast-blog-single-element" itemprop="headline"><a href={link} rel="bookmark">{title}</a></h2>
                    <header class="entry-header ast-blog-single-element ast-blog-meta-container">
                        <div class="entry-meta">
                            <span class="ast-taxonomy-container cat-links default">
                                <a href="https://nghelifecoach.com/gein/" rel="category tag">GEIN</a>
                            </span> /
                            <span class="posted-on">
                                <span class="published" itemprop="datePublished"> {datePublished} </span>
                            </span> / By
                            <span class="posted-by vcard author" itemtype="https://schema.org/Person" itemprop="author">
                                <a title="View all posts by Thiên Lý" href="https://nghelifecoach.com/author/thienly/" rel="author" class="url fn n" itemprop="url">
                                    <span class="author-name" itemprop="name">
                                        Thiên Lý
                                    </span>
                                </a>
                            </span>

                        </div>
                    </header>
                    <div class="ast-blog-featured-section post-thumb ast-blog-single-element">
                        <div class="post-thumb-img-content post-thumb">
                            <a href={link}>
                                <img width="1430" height="953" src={image} class="attachment-large size-large wp-post-image" alt={imageAlt} itemprop="image" decoding="async" sizes="(max-width: 1430px) 100vw, 1430px" title={title} />
                            </a>
                        </div>
                    </div>
                    <div class="ast-excerpt-container ast-blog-single-element">
                        <p>{description}</p>
                    </div>
                    <p class="ast-blog-single-element ast-read-more-container read-more">
                        <a class="" href={link}> <span class="screen-reader-text">{title}</span> Xem thêm »</a>
                    </p>
                    <div class="entry-content clear" itemprop="text">
                    </div>
                </div>
            </div>
        </article>
    )
}