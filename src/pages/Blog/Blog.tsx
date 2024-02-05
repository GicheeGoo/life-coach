import { FC } from "preact/compat";

import { ShortPost } from "./ShortPost";
import { posts } from "./posts";

import './Blog.scss';

export const Blog: FC = () => {
    const handleChangeSearchKey = (event) => {

    }

    return (
        <div class={'blog w-full'}>
            <div class={'site-content'}>
                <div class="ast-container">
                    <div class={'flex-container'}>
                        <div id="primary" class="content-area primary ast-grid-2">
                            <main id="main" class="site-main">
                                <div class="ast-row gap-4">
                                    {posts.map((blog, index) => {
                                        return (
                                            <ShortPost
                                                key={index + ''}
                                                title={blog.title}
                                                description={blog.description}
                                                image={blog.thumbnail}
                                                datePublished={blog.createdDate}
                                                link={blog.to}
                                                imageAlt={blog.title}
                                            />
                                        )
                                    })}

                                </div>
                            </main>
                        </div>
                        <div class="widget-area secondary" id="secondary" itemtype="https://schema.org/WPSideBar">
                            <div class="sidebar-main">

                                <aside id="search-2" class="widget widget_search"><form role="search" method="get" class="search-form" action="https://nghelifecoach.com/">
                                    <label>
                                        <span class="screen-reader-text">Search for:</span>
                                        <input type="search" class="search-field" placeholder="Search..." value="" name="s" autoComplete='off' onChange={handleChangeSearchKey} />
                                        <button class="search-submit ast-search-submit" aria-label="Search Submit">
                                            <span>Search</span>
                                            <i><span class="ast-icon icon-search"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-893 488 142 142" enable-background="new -888 480 142 142">
                                                <path d="M-787.4,568.7h-6.3l-2.4-2.4c7.9-8.7,12.6-20.5,12.6-33.1c0-28.4-22.9-51.3-51.3-51.3  c-28.4,0-51.3,22.9-51.3,51.3c0,28.4,22.9,51.3,51.3,51.3c12.6,0,24.4-4.7,33.1-12.6l2.4,2.4v6.3l39.4,39.4l11.8-11.8L-787.4,568.7  L-787.4,568.7z M-834.7,568.7c-19.7,0-35.5-15.8-35.5-35.5c0-19.7,15.8-35.5,35.5-35.5c19.7,0,35.5,15.8,35.5,35.5  C-799.3,553-815,568.7-834.7,568.7L-834.7,568.7z"></path>
                                            </svg></span></i>
                                        </button>
                                    </label>
                                    <input type="submit" class="search-submit" value="Search" />
                                </form>
                                </aside>
                                <aside id="recent-posts-2" class="widget widget_recent_entries">
                                    <h2 class="widget-title">Bài viết mới</h2><nav aria-label="Bài viết mới">
                                        <ul>
                                            <li>
                                                <a href="/gein/kid-talent-map/">Kid Talent Map là gì? Bản đồ thấu hiểu con có tốt không?</a>
                                            </li>
                                            <li>
                                                <a href="/gein/gein-academy/">GEIN Academy là gì? Sự thật Numerology tại GEIN Group</a>
                                            </li>
                                            <li>
                                                <a href="/gein/map-for-success/">Map For Success là gì? Bản đồ thành công lừa đảo, đa cấp có thật không?</a>
                                            </li>
                                        </ul>

                                    </nav></aside><aside id="recent-comments-2" class="widget widget_recent_comments"><h2 class="widget-title">Phản hồi gần đây</h2><nav aria-label="Phản hồi gần đây"><ul id="recentcomments"></ul></nav></aside><aside id="archives-2" class="widget widget_archive"><h2 class="widget-title">Lưu trữ</h2><nav aria-label="Lưu trữ">
                                        <ul>
                                            <li><a href="/2023/08/">Tháng Tám 2023</a></li>
                                            <li><a href="/2023/04/">Tháng Tư 2023</a></li>
                                            <li><a href="/2023/03/">Tháng Ba 2023</a></li>
                                        </ul>

                                    </nav></aside><aside id="categories-2" class="widget widget_categories"><h2 class="widget-title">Chuyên mục</h2><nav aria-label="Chuyên mục">
                                        <ul>
                                            <li class="cat-item cat-item-17"><a href="/gein/">GEIN</a>
                                            </li>
                                        </ul>

                                    </nav></aside><aside id="meta-2" class="widget widget_meta"><h2 class="widget-title">Meta</h2><nav aria-label="Meta">
                                        <ul>
                                            <li><a rel="nofollow" href="/wp-login.php">Đăng nhập</a></li>
                                            <li><a href="/feed/">RSS bài viết</a></li>
                                            <li><a href="/comments/feed/">RSS bình luận</a></li>

                                            <li><a href="https://vi.wordpress.org/">WordPress.org</a></li>
                                        </ul>

                                    </nav></aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}