import { FC } from 'preact/compat';
import clsx from 'clsx';

import PanelGroup from 'rsuite/esm/PanelGroup/PanelGroup';
import Panel from 'rsuite/esm/Panel/Panel';

import { Post } from '../posts';

import mfsThumb from '../images/MapForSuccess/mfs-thumb.png';
import mfs1 from '../images/MapForSuccess/mfs-1.jpg';
import mfs2 from '../images/MapForSuccess/mfs-2.png';
import mfs3 from '../images/MapForSuccess/mfs-3.jpeg';
import mfs4 from '../images/MapForSuccess/mfs-4.png';
import mfs5 from '../images/MapForSuccess/mfs-5.webp';
import mfs6 from '../images/MapForSuccess/mfs-6.webp';
import mfs7 from '../images/MapForSuccess/mfs-7.jpeg';
import mfs8 from '../images/MapForSuccess/mfs-8.webp';
import mfs9 from '../images/MapForSuccess/mfs-9.webp';
import mfs10 from '../images/MapForSuccess/mfs-10.webp';
import mfs11 from '../images/MapForSuccess/mfs-11.png';

import { Content, Detail } from '@/utils/generateContent';

import { ArrowRightCircle, UpRightFromSquare } from '@/components/bases/SVG';
import { Video } from '@/components/apps/Content/Video';

import { useBreakPoint } from '@/hooks/useBreakPoint';
import { details as coach } from "@/constants/coach";

const mfsBase = [
    <><strong>60%</strong> là bộ môn nghiên cứu khoa học về các con số (Numerology – Việt Nam thường gọi là Thần số học)</>,
    <><strong>30%</strong> ứng dụng các bộ công cụ khoa học hiện đại để giúp nhận diện rõ về bản thân mình như NLP (lập trình ngôn ngữ tư duy); MBTI (công cụ kiểm tra tính cách); DISC (công cụ nhận diện tính cách, hành vi)</>,
    <>Và <strong>10%</strong> còn lại là thực chứng của những người thành công nhất trên toàn thế giới.</>
]

const mfsResult = [
    'Được xuất Tấm Bản Đồ Cá Nhân VIP bao gồm 17 chỉ số quyết định cuộc đời bạn',
    'Được chuyên gia coaching 1-1 trong 3 giờ đồng hồ (GEIN đang đi đầu về coaching này)',
    'Được cung cấp bản thiết kế cuộc đời thịnh vượng cho bạn, giúp bạn lên kế hoạch trong tương lai',
    'Được tham gia vào các cộng đồng chuyển hóa: cộng đồng đọc sách, cộng đồng thiền, cộng đồng thực hành lòng biết ơn',
    'Thấu hiểu được những điểm mạnh và năng lực tiềm ẩn trong bạn để phát huy tối đa khả năng của bạn giúp bạn đạt được những gì mình muốn',
    'Giúp bạn có định hướng rõ ràng trong cuộc sống và xác định được con đường đúng cho mình (lựa chọn đúng – lựa chọn quan trọng hơn nỗ lực)',
    'Giúp bạn nắm bắt được cơ hội sắp đến đến với mình và chủ động chuẩn bị để đón nhận mọi thứ',
    'Được chuyên gia đồng hành ít nhất 90 ngày, được hỗ trợ bất cứ khi nào bạn cần để giúp bạn ứng dụng triệt để Map For Success vào cuộc sống.'
]

const mfsPrices = [
    'Nhận 1 cuốn sách Map For Success của riêng mình – trị giá 300.000đ',
    'Coaching chuyên sâu 3 tiếng – trị giá 5.999.000đ',
    'Hỗ trợ liên tục trong 90 ngày – hỏi bất cứ điều gì, bất cứ khi nào bạn cần – trị giá 30.000.000đ',
    'Tham gia nhóm học tập, phát triển riêng cho khách hàng – trị giá 10.000.000đ',
    'Được tham gia các cộng đồng về thiền, thực hành lòng biết ơn, chữa lành nội tâm – mối quan hệ do GEIN tổ chức',
]

const mfsReviews = [
    {
        src: 'https://www.youtube.com/embed/g4zqFgnwSkc?feature=oembed',
        author: 'Anh Tony Dũng – HBR Holding'
    },
    {
        src: 'https://www.youtube.com/embed/E2y8SgNRwYA?feature=oembed',
        author: 'Anh Nguyễn Tất Kiểm – Taki Academy'
    },
    {
        src: 'https://www.youtube.com/embed/nKnLVSe39P0?feature=oembed',
        author: 'Anh Adam Thiên – Adam Group'
    }
]

const mfsFAQs = [
    {
        Q: 'Map For Success lừa đảo có thật không?',
        A: (
            <>
                <p>Chắc chắn là KHÔNG! Map For Success là bộ sản phẩm/công cụ được nghiên cứu vào tạo ra sau 5 năm nghiên cứu của 3 nhà sáng lập CÔNG TY CỔ PHẦN SÁNG KIẾN GIÁO DỤC TOÀN CẦU – Tiếng Anh: GLOBAL EDUCATION INITIATIVES.,JSC – Viết tắt: GEIN).</p>
                <p>Và Map For Success được luận giải chi tiết bởi các chuyên gia tại GEIN có đầy đủ thông tin liên lạc nên bạn hoàn toàn có thể yên tâm.</p>
                <p>Tất cả những tin đồn thổi Map For Success là lừa đảo hiện nay đều được tung ra bởi những đối thủ cạnh tranh trên thị trường về bộ môn Thần Số Học nên bạn hoàn toàn có thể yên tâm.</p>
            </>
        )
    },
    {
        Q: 'Map For Success có phải là đa cấp không?',
        A: 'Là Không bạn nhé. Map For Success chỉ là một công cụ/sản phẩm được tạo ra bởi GEIN bao gồm 17 bộ số giúp bạn thấu hiểu bản thân và định hướng cuộc sống qua bộ môn thần số học. Bên cạnh đó, GEIN tự hào là công ty giáo dục đầu tiên tại Việt Nam đưa mô hình kinh doanh giáo dục trở thành kinh doanh hệ thống với tốc độ phát triển đối tác và khách hàng lớn nhất tại Việt Nam. Tính đến thời điểm hiện tại, GEIN đã luận giải bản đồ cho hơn 100.000 khách hàng vào có hơn 10.000 đối tác (chuyên gia) hợp tác.'
    },
    {
        Q: 'Tôi thấy giá MFS cao quá',
        A: (
            <>
                <p>Điều quan trọng khi so sánh đó là: Cao thì cao so với cái gì?</p>
                <p>Bạn có thể mua 1 cái điện thoại giá 4.000.000đ (4 triệu) và dùng được tầm 3 năm. Tính ra mỗi năm tiêu hết hơn 1 triệu.</p>
                <p>Hoặc bạn có điều kiện hơn, bạn mua đôi giày 3 triệu dùng được tầm 1 năm. Thậm chí mua 1 cái iPhone 30 triệu dùng 2 năm (tính ra 15 triệu 1 năm)</p>
                <p>Vậy mà bạn lại tiếc 2.990.000đ cho một tấm bản đồ MFS có giá trị bằng cả cuộc đời bạn. Bởi nó theo bạn suốt cuộc đời mãi về sau.</p>
                <p>Tính ra thì quá rẻ chứ không hề cao.</p>
                <p>So với giá trị nó mang lại, MFS giúp bạn định hướng được cuộc đời. Giúp bạn có cuộc sống tốt hơn, kiếm được nhiều tiền hơn, sự nghiệp thăng tiến hơn, các mối quan hệ tốt đẹp hơn và đời sống viên mãn hơn. Như vậy là quá rẻ.</p>
            </>
        )
    },
    {
        Q: 'Tôi đã đăng ký thì bao lâu sẽ nhận được tấm bản đồ và được coaching?',
        A: (
            <>
                <p>Khi nhận được thông tin đăng ký và khoản thanh toán của bạn, chuyên gia tại GEIN sẽ liên hệ lại để xác nhận đúng thông tin Họ & Tên, Ngày tháng năm sinh và Địa chỉ để xuất tấm bản đồ MFS cho bạn.</p>
                <p>Quá trình này sẽ diễn ra trong vòng 7 ngày bởi vì số lượng khách hàng rất lớn, và phải xuất bản đồ trên phần mềm của Hoa Kỳ nên sẽ phải chờ một chút. Bởi vì sự cẩn thận, chất lượng cho khách hàng được đặt lên hàng đầu.</p>
            </>
        )
    },
    {
        Q: 'Tôi ở xa thì cách thức để gặp mặt coaching là gì?',
        A: (
            <>
                <p>Hiện nay, các công cụ hỗ trợ online đang phát triển rất mạnh, nếu ở xa và chỉ có điện thoại, các chuyên gia vẫn có thể coaching cho bạn.</p>
                <p>Chỉ cần bạn dùng smart phone hoặc có máy tính kết nối internet, cài đặt phần mềm Zoom (nếu không biết sẽ được hướng dẫn).</p>
                <p>Chuyên gia luận giải bản đồ thành công sẽ tư vấn onine cho bạn và vẫn cam kết đảm bảo chất lượng 100% về hiệu quả.</p>
                <p>Thêm vào đó, bạn vẫn được hỗ trợ suốt thời gian sau khi coaching xong (ít nhất là 90 ngày), được hỏi trực tiếp, được học tập, phát triển cùng GEIN.</p>
                <p>Vì sự tiện lợi này, có thể làm mọi lúc mọi nơi nên trở thành Life Coach tại GEIN đang giúp rất nhiều người phát triển sự nghiệp sau mùa dịch rất tốt.</p>
            </>
        )
    },
    {
        Q: 'Nếu có thắc mắc thì tôi có được hỏi trực tiếp không?',
        A: (
            <>
                <p>Chắc chắn CÓ! Sau khi coaching xong, chuyên gia vẫn sẽ tiếp tục đồng hành cùng bạn trong suốt 90 ngày tiếp theo để nhắc nhở bạn, định hướng thêm cho bạn, giải đáp các thắc mắc của bạn, giúp bạn thực sự thay đổi và chuyển hóa.</p>
                <p>Bạn có thể liên hệ trực tiếp với chúng tôi nếu có bất cứ thắc mắc nào.</p>
                <p>Sau đó, bạn và chuyên gia có thể đặt lịch để coaching thêm lần 2, lần 3 phụ thuộc vào sự tiến bộ, chuyển hóa và ứng dụng Map For Success của bạn.</p>
            </>
        )
    },
    {
        Q: 'Tôi nên làm gì sau khi được coaching xong để đạt được điều tôi muốn?',
        A: (
            <>
                <p>Việc bạn nên làm là tin tưởng theo định hướng của chuyên gia và năng lượng các con số.</p>
                <p>Hãy làm theo từng bước mà chuyên gia đã hướng dẫn bạn. Bởi vì với mỗi người mỗi hoàn cảnh, mỗi năng lực và mong muốn khác nhau sẽ có các cách thức, phương pháp để thực hiện khác nhau.</p>
                <p>Bạn chỉ cần: TIN TƯỞNG & HÀNH ĐỘNG!</p>
            </>
        )
    }
]

const Reviews: FC = () =>
{
    const isMobile = useBreakPoint('mobile');

    return (
        <div className={clsx('flex gap-4 mb-4', isMobile && 'flex-col')}>
            {mfsReviews.map((value, key) => (
                <div key={key} className='flex-1'>
                    <Video content={[value.src]} alt={value.author} />
                </div>
            ))}
        </div>
    )
}

const ContactToBuy: Detail = {
    type: Content.ct,
    content: ['Đăng Ký Mở Bản Đồ Ngay', 'THẤU HIỂU BẢN THÂN NGAY HÔM NAY', <UpRightFromSquare width={20} height={20} fill='white'/>],
}

export const MapForSuccess: Post = {
    title: 'Map For Success là gì? Bản đồ thành công lừa đảo, đa cấp có thật không?',
    description: 'Trong xã hội ngày càng phát triển nhanh như hiện nay, việc thấu hiểu bản thân là điều cực kỳ quan trọng. Hiểu mình thì mới biết được cách để đạt được những thành công trong cuộc sống nhanh nhất, có những mối quan hệ hòa hợp chất lượng và […]',
    thumbnail: mfsThumb,
    createdDate: '22/08/2023',
    to: `/gein/map-for-success`,
    author: coach.name,
    details: [
        {
            type: Content.m,
            content: [`Trong xã hội ngày càng phát triển nhanh như hiện nay, việc thấu hiểu bản thân là điều cực kỳ quan trọng. Hiểu mình thì mới biết được cách để đạt được những thành công trong cuộc sống nhanh nhất, có những mối quan hệ hòa hợp chất lượng và có sức khỏe, trí tuệ đỉnh cao. Và Map For Success là bộ sản phẩm – công cụ được ra đời để giúp cho mỗi chúng ta có thể thấu hiểu bản thân mình, và thấu hiểu được người khác. Vậy cụ thể, “Map For Success là gì?” ngay dưới đây ${coach.name} và Nghề Life Coach sẽ chia sẻ chi tiết cho bạn!`],
            mark: ['Map For Success', 'Nghề Life Coach']
        },
        {
            type: Content.l,
            content: [
                <><strong>Xem thêm:</strong> <a href='/course'>Khóa học Thiết Kế Bản Đồ Thành Công Map For Success</a></>
            ]
        },
        {
            type: Content.s,
            content: ['Bản đồ Map For Success là gì?']
        },
        {
            type: Content.q,
            content: ['Map For Success (Bản Đồ Thành Công) là một công cụ khoa học ứng dụng Thần số học của GEIN giúp bất cứ ai ngay lập tức thấu hiểu bản thân, xác định con đường sự nghiệp đúng đắn và xây dựng được những kế hoạch cho cuộc đời một cách rõ ràng.']
        },
        {
            type: Content.v,
            content: ['https://www.youtube.com/embed/xdNYfnJF6-o?feature=oembed'],
            alt: 'Video giới thiệu Map For Success'
        },
        {
            type: Content.c,
            content: [
                <div className='mb-4'>
                    <p className='italic'><strong>MAP FOR SUCCESS được <span className='color-primary'>GEIN Academy</span> nghiên cứu trong vòng hơn 5 năm với nền tảng dựa trên cơ sở khoa học gồm:</strong></p>
                    {mfsBase.map((value, key) => (
                        <div key={key} className='flex items-center gap-4 mb-2'>
                            <ArrowRightCircle
                                className='flex-none'
                                fill='var(--primary-color)'
                                width={16}
                                height={16}
                            />
                            <div>{value}</div>
                        </div>
                    ))}
                </div>
            ]
        },
        {
            type: Content.p,
            content: ['Map For Success có chứa 17 nhóm số nói lên cuộc đời bạn và khi luận giải chi tiết sẽ là hơn 30 số cho cả cuộc đời. Một “bức tranh toàn cảnh” để giúp bạn có cuộc sống hạnh phúc, đạt được sự hài lòng như mình mong muốn (tài chính, mối quan hệ, sức khỏe, nội tâm). Chỉ cần bạn tin tưởng và làm theo chỉ dẫn.']
        },
        ContactToBuy,
        {
            type: Content.v,
            content: ['https://www.youtube.com/embed/8Lb5pvkR0BM?feature=oembed'],
            alt: 'Lý do nên mở ngay Bản đồ Map For Success'
        },
        {
            type: Content.ss,
            content: ['Đây là toàn bộ những gì bạn sẽ nhận được khi sở hữu tấm bản đồ thành công'],
        },
        {
            type: Content.c,
            content: [(
                <div className='mb-8'>
                    {mfsResult.map((value, key) => (
                        <div key={key} className='flex items-center gap-4 mb-2'>
                            <ArrowRightCircle
                                className='flex-none'
                                fill='#0170B9'
                                width={20}
                                height={20}
                            />
                            <div>{value}</div>
                        </div>
                    ))}
                </div>
            )]
        },
        {
            type: Content.i,
            width: '50%',
            content: [mfs1]
        },
        {
            type: Content.ss,
            content: ['Nếu bạn đang gặp nỗi đau nào đó']
        },
        {
            type: Content.b,
            content: ['Thì Map For Success chính là thứ dành cho bạn ngay bây giờ!'],
            style: 'italic'
        },
        {
            type: Content.ss,
            content: ['Map For Success sẽ giúp bạn:']
        },
        {
            type: Content.b,
            content: ['Thấu hiểu tường tận về bản thân:']
        },
        {
            type: Content.l,
            content: ['Điểm mạnh, điểm yếu của mình là gì, những cơ hội trong cuộc sống sẽ đến và những thách thức mình cần vượt qua để đạt được thành công trong cuộc sống']
        },
        {
            type: Content.b,
            content: ['Nắm rõ hiện tại của mình:']
        },
        {
            type: Content.l,
            content: ['Trả lời được câu hỏi tại sao mình lại có cuộc sống, kết quả công việc hay sự nghiệp như hiện tại (tốt hoặc xấu)']
        },
        {
            type: Content.b,
            content: ['Bản thân đang ở đâu:']
        },
        {
            type: Content.l,
            content: ['Biết được mình đang ở nhóm nào trong 6 nhóm người trong xã hội']
        },
        {
            type: Content.b,
            content: ['Hiểu nội tâm của mình:']
        },
        {
            type: Content.l,
            content: ['Biết được cách thức để bình an trong nội tâm, biết cách yêu thương bản thân; chữa lành và hàn gắn mối quan hệ với người khác (có thể là bố mẹ, con cái, anh chị em hay bạn bè, đồng nghiệp)']
        },
        {
            type: Content.b,
            content: ['Rõ con đường nên đi:']
        },
        {
            type: Content.l,
            content: ['Biết được con đường mình nên đi, con người mình sẽ trở thành trong tương lai là ai (Trả lời câu hỏi: Tôi là ai?)']
        },
        {
            type: Content.b,
            content: ['Biết chọn nơi làm việc:']
        },
        {
            type: Content.l,
            content: ['Biết được phương hướng phát triển sự nghiệp nhanh chóng, cách chọn môi trường phù hợp để phát triển công việc và sự nghiệp']
        },
        {
            type: Content.b,
            content: ['Biết được mỗi năm nên tập trung vào đâu:']
        },
        {
            type: Content.l,
            content: ['Nắm bắt được năm nay và những năm tiếp theo mình nên làm gì, nên tập trung vào đâu, nên chú ý gì để đạt được thành công viên mãn']
        },
        {
            type: Content.b,
            content: ['Cách thức đạt được cuộc sống mơ ước:']
        },
        {
            type: Content.l,
            content: ['Một tấm bản đồ hay 1 bức tranh cho sự thành công và hạnh phúc trong cuộc sống, giúp bạn đạt được những điều mình mong muốn (tiền tài, mối quan hệ, sức khỏe, nội tâm) chỉ cần bạn tin tưởng và thực hành theo chỉ dẫn.']
        },
        {
            type: Content.b,
            content: ['Lãnh đạo toàn diện:']
        },
        {
            type: Content.l,
            content: ['Đối với chủ doanh nghiệp/leader, nhà lãnh đạo sẽ biết được phong cách lãnh đạo và phong cách bán hàng của mình là gì để đẫn dắt đội nhóm nghe theo và đạt kết quả tốt.']
        },
        {
            type: Content.i,
            content: [mfs2],
            alt: '17 chỉ số trong Map For Success'
        },
        {
            type: Content.ss,
            content: ['Các chỉ số có trong bản đồ thành công Map For Success (MFS)']
        },
        {
            type: Content.m,
            content: ['Trong bản đồ MFS tại GEIN được thiết kế với 17 nhóm chỉ số nói lên cuộc đời 1 con người. Với các số chính từ 1-9 và 3 số master (số chủ) 11, 22, 33.'],
            mark: ['GEIN']
        },
        {
            type: Content.p,
            content: ['Tại mỗi vị trí, năng lượng của các con số là như nhau – nhưng khác nhau ở ý nghĩa và cách ứng dụng các con số đó. Đấy chính là lý do mà chuyên gia đóng vai trò cực kỳ quan trọng giúp bạn hiểu và liên kết được các con số cuộc đời mình.']
        },
        {
            type: Content.b,
            content: ['17 nhóm chỉ số Numerology trong MFS bao gồm:']
        },
        {
            type: Content.c,
            content: [(
                <table className='numerology'><tbody><tr><td>✅Chỉ số đường đời</td><td>✅Chỉ số sứ mệnh</td></tr><tr><td>✅Chỉ số linh hồn</td><td>✅Chỉ số liên kết giữa đường đời và sứ mệnh</td></tr><tr><td>✅Chỉ số cân bằng</td><td>✅Chỉ số ngày sinh</td></tr><tr><td>✅Chỉ số nhân cách</td><td>✅Chỉ số kết nối linh hồn và nhân cách</td></tr><tr><td>✅Chỉ số trưởng thành</td><td>✅Chỉ số thiếu</td></tr><tr><td>✅Chỉ số tư duy lý trí</td><td>✅Chỉ số sức mạnh tiềm thức</td></tr><tr><td>✅Chỉ số đam mê</td><td>✅Chỉ số năm</td></tr><tr><td>✅Chỉ số tháng</td><td>✅Chỉ số chặng (gồm 4 chặng – 4 đỉnh cao cuộc đời mỗi người)</td></tr><tr><td>✅Chỉ số thách thức (gồm 4 thách thức tương ứng với 4 chặng)</td><td></td></tr></tbody></table>
            )]
        },
        {
            type: Content.p,
            content: ['Để hiểu và ứng dụng được các con số trong Map For Success, để thiết kế lên bản đồ thành công cho riêng mình hãy liên hệ ngay với chuyên gia bạn nhé.']
        },
        {
            type: Content.ss,
            content: ['Map For Success giá bao nhiêu?']
        },
        {
            type: Content.p,
            content: [
                'Map For Success là 1 bản đồ thành công giúp bạn đạt được những mong muốn trong cuộc sống, sống một cuộc đời có định hướng, có ý nghĩa và ngập tràn tình yêu thương. Tấm bản đồ theo bạn cả đời!',
                'Với tất cả những giá trị mà Map For Success trao cho khách hàng, sản phẩm có giá thành cực kỳ rẻ.'
            ],
        },
        {
            type: Content.c,
            content: [(
                <div className='mb-4'>
                    {mfsPrices.map((value, key) => (
                        <div key={key} className='flex items-center gap-4 mb-2'>
                            <ArrowRightCircle
                                className='flex-none'
                                width={20}
                                height={20}
                            />
                            <div>{value}</div>
                        </div>
                    ))}
                </div>
            )]
        },
        {
            type: Content.b,
            content: ['Tổng giá trị lên tới 46.300.000đ']
        },
        {
            type: Content.c,
            content: [(
                <p>Nhưng, tại đây hôm nay, <strong>bạn chỉ phải trả 2.990.000đ để được sở hữu tất cả những phần quà trên</strong>.</p>
            )]
        },
        {
            type: Content.p,
            content: [
                'Sở hữu tấm bản đồ theo mình định hướng cả cuộc đời với giá quá rẻ. Cứ thử tính với 90 ngày, thì mỗi ngày bạn chỉ cần 30K – tương đương 1 bát phở để sở hữu Map For Success ngay hôm nay.',
                'Nếu đến hôm nay bạn vẫn không có cho mình nổi 2.990.000đ để mở bản đồ thành công thì bạn càng phải mở nó. Bởi vì bạn đang đi không đúng với những năng lực thực sự của mình, điều đó dẫn tới đến bây giờ cuộc sống, sự nghiệp của bạn vẫn bất ổn, gặp quá nhiều vấn đề và không một xu dính túi.',
                'Chỉ 2.990.000đ để nhận về giá trị tới 46.300.000đ sẽ giúp bạn thay đổi cả cuộc đời sau này – thành công, hạnh phúc, thịnh vượng và viên mãn hơn.'
            ]
        },
        ContactToBuy,
        {
            type: Content.ss,
            content: ['Sự khác biệt của Map For Success so với những bên thần số học khác trên thị trường']
        },
        {
            type: Content.p,
            content: [
                'Mặc dù nhiều bên xuất cho bạn bản đồ Thần số học chỉ vài trăm nghìn nhưng hãy cẩn thận, rất nhiều người đã mất tiền oan với nó. Và Map For Success khác thần số học của các bên khác thế nào:',
                'Nhiều người chỉ vì bên khác xuất bản đồ rẻ hơn tại GEIN nhưng thực sự giá trị nhận lại gần như bằng không.',
                'Họ chỉ xuất bản đồ và gửi cho bạn bản pdf để tự đọc trên điện thoại hoặc máy tính. Nhưng thực sự, bạn đọc sẽ không thể hiểu được, bởi giá trị của thần số học nằm ở chuyên gia luận giải.',
                'Với kinh nghiệm thực tế, chuyên gia sẽ giúp bạn liên kết các con số với nhau, từ đó đưa ra cho bạn một tấm bản đồ – lộ trình để giúp bạn thay đổi. Đây là điều mà các bên khác không thể có được (bởi vì bán một bản đồ rẻ chỉ 200-300K) thì chẳng ai sẵn sàng bỏ ra thời gian 3 tiếng để coaching chuyên sâu cho bạn cả.',
                'Thêm nữa, giá trị của Map For Success nằm ở sự đồng hành liên tục 90 ngày và các nhóm rèn luyện, các chương trình để giúp khách hàng chuyển hóa.',
                'Bởi vì, chúng ta cần bối cảnh, cần môi trường để thực hành và ứng dụng các con số. Vì vậy mà những bên kia không thể giúp bạn 100% tốt hơn được.',
                'Tại GEIN và Map For Success tự tin cam kết sau khi mở bản đồ thành công MFS bạn sẽ thay đổi, sẽ chuyển hóa để tốt hơn.'
            ]
        },
        {
            type: Content.i,
            content: [mfs3],
            alt: 'Giá trị đối với bản thân nhận được khi mở bản đồ Map For Success'
        },
        {
            type: Content.p,
            content: [
                'Ngoài, ra MFS khác với những bên khác ở chỗ: những bên đó áp dụng thuần thần số học còn MFS chỉ áp dụng 60% thần số học, và 40% còn lại là những bộ môn khoa học khác để dẫn dắt và giúp đỡ con người đi đến sự thay đổi, thành công, hạnh phúc hơn.',
                'Đó chính là lý do tại sao tại GEIN không gọi là thần số học mà lại gọi là Bản Đồ Thành Công – Map For Success.',
                'Nếu bạn theo dõi, thần số học bắt nguồn từ ông Pythagos tại Hy Lạp – Châu Âu và được truyền bá vào Việt Nam.',
                'Còn bây giờ, Map For Success từ Việt Nam đã vươn mình ra các nước quốc tế và được đón nhận vô cùng nhiệt tình. Một số nước MFS đã có mặt: Nhật Bản, Hoa Kỳ, Canada, Đức, Hàn Quốc, Lào, Tây Ban Nha,…',
                'Bản đồ MFS đã có 2 ngôn ngữ Tiếng Việt và Tiếng Anh. Sắp tới sẽ có thêm tiếng Nhật, Hàn… đủ để thấy được sức mạnh của MFS so với các sản phẩm khác.'
            ]
        },
        ContactToBuy,
        {
            type: Content.ss,
            content: ['Hơn 110.000 người đã sở hữu Map For Success và có cuộc sống viên mãn hơn rất nhiều']
        },
        {
            type: Content.v,
            content: ['https://www.youtube.com/embed/IK3EX04vty0?feature=oembed'],
            alt: 'Đoàn Di Băng chia sẻ về Map For Success'
        },
        {
            type: Content.ss,
            content: ['Các chuyên gia và người nối tiếng đánh giá Map For Success']
        },
        {
            type: Content.c,
            content: [<Reviews />]
        },
        ContactToBuy,
        {
            type: Content.ss,
            content: ['Bản đồ thành công Map For Success đã lan tỏa đến khắp nơi trên thế giới']
        },
        {
            type: Content.i,
            content: [mfs4, mfs5, mfs6]
        },
        {
            type: Content.i,
            content: [mfs7, mfs8, mfs9]
        },
        ContactToBuy,
        {
            type: Content.ss,
            content: ['Map For Success là đa cấp có phải không?']
        },
        {
            type: Content.p,
            content: [
                'Hiện tại rất nhiều người đang lo ngại điều này và thắc mắc Map For Success có phải là đa cấp hay không?',
                'Mình xin chia sẻ như sau:',
                'Map For Success là một sản phẩm của công ty GEIN Academy (Công ty cổ phần Sáng Kiến Giáo Dục Toàn Cầu).',
                'Đây là công ty được cấp phép hoạt động bởi Sở Kế hoạch và Đầu tư Thành phố Hà Nội với mã số thuế 0109144190.',
                'Vì vậy mà đã rất xác thực GEIN Academy là một pháp nhân được thành lập theo đúng pháp luật.',
                'Ngoài ra, có thể bạn đang thắc mắc về cách hoạt động của Map For Success hay GEIN Academy.',
                'GEIN hoạt động theo hình thức là hệ thống – KHÁC HOÀN TOÀN so với đa cấp.'
            ]
        },
        {
            type: Content.b,
            content: ['Ví dụ:']
        },
        {
            type: Content.b,
            content: ['Bây giờ có 4 người A, B, C, D cùng tham gia vào một công ty M.']
        },
        {
            type: Content.l,
            content: [
                'Người A (cấp 1) mời người B (cấp 2) tham gia công ty M, người B mời người C (cấp 3) tham gia, người C mời người D (cấp 4) tham gia.',
                'Trường hợp đa cấp: thì người A vẫn được nhận hoa hồng từ người C, D nếu 2 người này có doanh số.',
                'Còn hệ thống: người A chỉ nhận được hoa hồng từ người B khi người B có doanh số, không được hưởng hoa hồng từ 2 người C, D và những người sau. Vì vậy mà GEIN không được gọi là đa cấp, đây cũng là hình thức văn mình được nhà nước cấp phép hoạt động cho GEIN.'
            ]
        },
        {
            type: Content.p,
            content: [
                'Chính vì vậy mới nói, GEIN là công ty đầu tiên đưa giao dục trở thành kinh doanh hệ thống tại Việt Nam.',
                'Một mô hình kinh doanh vô cùng nhân văn và giá trị được hàng loạt người nổi tiếng, các bộ ban ngành đều ủng hộ.',
                'Bạn hoàn toàn có thể an tâm nếu có ý định tham gia vào GEIN để học tập phát triển, hay là kinh doanh sản phẩm về giáo dục Map For Success.'
            ]
        },
        {
            type: Content.i,
            content: [mfs10],
            alt: 'Một chương trình học tập phát triển bản thân do GEIN tổ chức'
        },
        {
            type: Content.ss,
            content: ['Map For Success lừa đảo có thật không?']
        },
        {
            type: Content.p,
            content: [
                'Thực ra, hầu hết những tin đồn Map For Success lừa đảo đều do các bên đối thủ cung cấp thông tin không đúng nhằm cạnh tranh không lành mạnh. Bởi vì sự phát triển của GEIN rất nhanh và được khách hàng tin tưởng, ủng hộ, thế nên họ đã tung những tin đồn vậy nhằm hạ thấp uy tín và thương hiệu của GEIN.',
                'Thực tế thì Map For Success hay GEIN hoàn toàn là kinh doanh chân chính, hỗ trợ nhiệt tình.',
                'Thêm vào đó, điều này mới thực sự là khác biệt tại GEIN.',
                'Hầu hết những người sau khi mở bản đồ Map For Succeess, họ đã thấu hiểu bản thân và có sự thay đổi quá nhanh, sự phát triển vượt bậc sau một thời gian ngắn, những người xung quanh, đặc biệt là người thân không quen với con người mới của họ nên đã nghi ngờ họ bị lừa đảo, bị bùa ngải.',
                'Do đó nên mới có những thắc mắc Map For Success có lừa đảo không.',
                'Bởi thử tưởng tượng mà xem, nếu GEIN hay Map For Success lừa đảo thì với sự phát triển nhanh như vậy (hơn 110 nghìn người đã mở bản đồ tại GEIN) và từng đó người mà khiếu nại thì liệu GEIN có tồn tại được bao nhiêu năm qua hay không? Chắc chắn là các cơ quan chức năng sẽ vào cuộc rồi.',
                'Vậy nên, thông tin map for success lừa đảo chỉ là những tin đồn thứ thiệt từ những bên chơi xấu, và sự thắc mắc của những người thấy người thân của mình thay đổi quá nhanh, đạt được thành tựu quá nhanh (so với những gì trước đây).',
                'Bạn hoàn toàn có thể yên tâm nhé.'
            ]
        },
        {
            type: Content.i,
            content: [mfs11],
            alt: 'Map For Success được cả những ngân hàng ứng dụng'
        },
        {
            type: Content.ss,
            content: ['Câu hỏi thường gặp về Map For Success']
        },
        {
            type: Content.c,
            content: [(
                <PanelGroup className='mfs-faqs mb-4' accordion style={{ margin: '0 -20px' }}>
                    {mfsFAQs.map((faq, index) => (
                        <Panel
                            header={(
                                <strong className='title'>
                                    {faq.Q}
                                </strong>
                            )}
                            eventKey={index}
                            collapsible
                        >
                            {faq.A}
                        </Panel>
                    ))}
                </PanelGroup>
            )]
        },
        ContactToBuy,
    ]
}
