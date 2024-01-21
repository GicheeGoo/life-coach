import { FC } from "preact/compat";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Image } from "@/components/bases/Image/Image";
import { HomeSection } from "..";

import { details } from '@/constants/coach';

const reviews = [
    {
        src: '',
        review: `“Biết ơn ${details.gender} ${details.name} rất nhiều vì đã coaching cho em, giúp em biết được mình tài giỏi thế nào và con đường mình đang đi. Tìm hiểu thần số học 2 năm rồi nhưng khi được chị coach Map For Success cho nó như một bầu trời mới, mở ra con đường đi tới thành công và hạnh phúc mà em muốn!”`,
        signal: 'LAN ANH'
    },
    {
        src: '',
        review: `“Cảm ơn ${details.lastName} đã coaching map for success cho anh và nhân viên của anh, giúp anh hiểu mình và công việc mình đang làm ý nghĩa như thế nào và định hướng công ty của mình. Từ đó mà cảm thấy mỗi ngày đều yêu công ty và nhân sự của mình hơn, truyền tới họ năng lượng và tình yêu theo đúng con người của mình.”`,
        signal: 'ANH VIỆT'
    },
    {
        src: '',
        review: `${details.gender} ${details.lastName} là một người thật tuyệt vời, nhờ chị Lý mở bản đồ Map for success và coaching rất sâu giúp em tự tin lựa chọn con đường mới, tự tin đi trên con đường mới bởi vì nó phù hợp với điểm mạnh và cơ hội của em theo đúng hành trình mà map đã chỉ ra. Liên kết được tất cả lại với nhau như một bức tranh tổng thế”`,
        signal: 'LƯƠNG MAI'
    },
]

export const SectionE: FC<HomeSection> = ({ className }) =>
{
    return (
        <Wrapper className={className}>
            <div className='flex justify-center head-line head-line-center'>
                <h2>Reviews</h2>
            </div>
            <div className='flex'>
                {reviews.map((review, index) => (
                    <Review
                        key={index}
                        {...review}
                    />
                ))}
            </div>
        </Wrapper>
    )
}

const Review: FC<(typeof reviews)[number]> = props =>
{
    const { src, review, signal } = props;

    return (
        <div className='review px-14'>
            <Image className='mb-4' src={src} />
            <p><strong>{review}</strong></p>
            <div className='section-title'>{signal}</div>
        </div>
    )
}