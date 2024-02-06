import { FC } from "preact/compat";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Image } from "@/components/bases/Image/Image";
import { HomeSection } from "..";

import { details } from '@/constants/coach';

const reviews = [
    {
        src: '',
        review: `“Sau khi nghe ${details.gender} ${details.name} luận giải thì chị đã hiểu hơn về tính cách của con, điểm mạnh, điểm yếu của con, và đã giải đáp được những thắc mắc của mẹ về khía cạnh bướng bỉnh của con. Giúp mẹ có định hướng tốt hơn trong việc tạo môi trường giúp con mình phá triển toàn diện hơn. Cảm ơn em đã giải thích cặn kẽ, rất chi tiết về đường đời của con cũng như những thắc mắc của chị về con. Giúp chị hiểu con mình hơn và có định hướng ”`,
        signal: 'Trần Dung'
    },
    {
        src: '',
        review: `“Cảm ơn Giám đốc xinh đẹp ${details.name} của Gein Academy đã mở bản đồ Map For Success cho 2 mẹ con chị và đã dành gần 2h để luận giải bản đồ, đã giúp chị nắm được những điểm yếu cần khắc phục và những điểm mạnh cần phát huy, giúp chị biết sứ mệnh của mình là gì, nên làm gì. Tấm bản đồ Map For Success này không những có thể giúp mình dự đoán tương lai, biết được những khó khăn, thách thức có thể xảy đến mà nó còn tái hiện hành trình mà mình đã đi, những sự việc mình đã trải qua trong quá khứ, và thật ngạc nhiên là nó trung hợp đến bất ngờ. Biết ơn Map For Success!”`,
        signal: 'Hà Nguyễn'
    },
    {
        src: '',
        review: `${details.gender} ${details.lastName} là một người thật tuyệt vời, nhờ chị mở bản đồ Map for success và coaching rất sâu giúp em tự tin lựa chọn con đường mới, tự tin đi trên con đường mới bởi vì nó phù hợp với điểm mạnh và cơ hội của em theo đúng hành trình mà map đã chỉ ra. Liên kết được tất cả lại với nhau như một bức tranh tổng thế”`,
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