import { FC } from "preact/compat";
import clsx from "clsx";
import { Panel, PanelGroup } from "rsuite";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";

import { CourseSectionProps } from "../Course";
import { details } from "@/constants/coach";

const FAQs = [
    {
        title: 'Tôi sẽ nhận đc gì sau khi học?',
        content: (
            <>
                Như đã chia sẻ ở trên, dưới đây là một số giá trị mà bạn sẽ nhận được khi đăng ký học và trở thành đối tác tại GEIN
                <br/>
                – Học chuyên sâu 3 ngày về các chỉ số Numerology: năng lượng chuẩn, quá ngược, các cấp độ của các con số
                <br/>
                – Tặng 30 bản đồ Map For Success trị giá 2.990.000đ/bộ, bạn có thể dùng để tặng cho người thân hoặc kinh doanh lại
                <br/>
                – Hơn 100+ khoá học online về các chủ đề phát triển bản thân, marketing, bán hàng, xây dựng thương hiệu cá nhân, kỹ năng coaching,…
                <br/>
                – Tham dự các khoá họconline và offline liên tục trong 1 năm không mất phí
                <br/>
                – Được đào tạo kỹ năng trở thành nhà Life Coach, luận giải bản đồ Map For Success
                <br/>
                – Được sinh hoạt trong môi trường Tam bảo: Thầy hiền trí – Tủ sách hay – Nhóm bạn tốt và rèn luyện đủ 3 gốc Đạo đức – Nghị lực – Trí tuệ
                <br/>
                – Thấu hiểu bản thân, thay đổi nhận thức của bản thân ngay trong khoá học qua những con số
                <br/>
                – Có khả năng tự chữa lành và hàn gắn lại những mối quan hệ đang rạn nứt
                <br/>
                – Nếu đang kinh doanh thì sẽ biết nên đặt tầm nhìn, sứ mệnh ra sao cho khớp với năng lượng của mình, đánh giá năng lực của nhân viên để sắp xếp đúng người đúng việc.
                <br/>
                <br/>
                Giá trị mà khoá học mang lại thực sự lớn hơn rất nhiều so với giá tiền mà bạn chi ra.
            </>
        )
    },
    {
        title: 'Địa điểm học ở đâu?',
        content: (
            <>
                – Khóa học được tổ chức hàng tháng offline xen kẽ tại Hà Nội và Hồ Chí Minh.
                <br/>
                – Nếu bạn ở xa, ở nước ngoài hoặc không tiện học offline có thể học online qua Zoom và vẫn đảm bảo chất lượng sự hỗ trợ cao nhất.
            </>
        )
    },
    {
        title: 'Thời gian học như thế nào?',
        content: (
            <>
                Khóa học diễn ra từ 8h00 – 18h00 (đôi khi lâu hơn tới 19:00 do hay quá học viên bảo dạy thêm)
                <br/>
                Khóa học được tổ chức 3 ngày liên tục hàng tháng nha, số lượng thường là từ 1.200 – 1.500 người trong đó 500 người học offline còn lại là học online.
            </>
        )
    },
    {
        title: 'Thanh toán thế nào?',
        content: (
            <>
                Bạn chuyển khoản thanh toán qua số tài khoản:
                <br/>
                – Ngân hàng: {details.bank.name}
                <br/>
                – STK: {details.bank.number}
                <br/>
                – Chủ TK: {details.bank.owner}
                <br/>
                Bạn có thể đóng học phí 100% là 25 triệu hoặc đặt cọc giữ chỗ tối thiểu 2 triệu nhé.
            </>
        )
    },
    {
        title: 'Sao học phí đắt quá?',
        content: (
            <>
                Đúng vậy, bạn muốn học chỉ để biết, học vì tò mò gì 25 triệu là cái giá rất đắt.
                <br/>
                Nhưng nếu học để chuyển hoá bản thân, để hiểu mình hiểu người, để hàn gắn và nâng cấp mối quan hệ, để có cuộc sống tốt hơn, để có môi trường tốt sinh hoạt, để có thêm một kỹ năng mới hay để có một nghề mới – một sự nghiệp mới (life coach) hay để ứng dụng phát triển doanh nghiệp thì giá đó không hề đắt so với những gì bạn sẽ nhận được.
                <br/>
                Đắt thì đắt so với cái gì?
                <br/>
                Cái giá đó có xứng đáng để đánh đổi với những gì bạn muốn có trong tương lai hay không?
                <br/>
                Nó phụ thuộc vào mong muốn của bạn là gì!
            </>
        )
    },
    {
        title: 'Đối tượng không phù hợp với khóa học này',
        content: (
            <>
                – Những người mê làm giàu nhanh chỉ sau 3 ngày học
                <br/>
                – Những người chỉ tò mò, muốn xem muốn biết như thế nào
                <br/>
                – Những người không có mục đích gì khi đăng ký học, không biết học để làm gì
            </>
        )
    },
]

export const FAQ: FC<CourseSectionProps> = ({ className }) =>
{
    return (
        <Wrapper className={clsx('faq', className)}>
            <h2 style={{ color: 'var(--section-fourth-color)' }}>Câu hỏi thường gặp</h2>
            <p className='title'>Giải đáp những thắc mắc nhiều người hỏi</p>
            <div className='separator' />

            <PanelGroup accordion style={{ margin: '0 -20px' }}>
                {FAQs.map((faq, index) => (
                    <Panel
                        header={(
                            <strong className='title'>
                                {faq.title}
                            </strong>
                        )}
                        eventKey={index}
                        collapsible
                    >
                        {faq.content}
                    </Panel>
                ))}
            </PanelGroup>
        </Wrapper>
    )
}