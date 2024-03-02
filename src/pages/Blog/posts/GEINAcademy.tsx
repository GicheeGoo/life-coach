import { Post } from '../posts';

import { details as company } from "@/constants/company";
import { details as coach } from "@/constants/coach";

import gaThumb from '../images/GEINAcademy/ga-thumb.webp'
import ga2 from '../images/GEINAcademy/ga-2.webp'
import ga3 from '../images/GEINAcademy/ga-3.jpeg'
import ga4 from '../images/GEINAcademy/ga-4.png'
import ga5 from '../images/GEINAcademy/ga-5.jpeg'
import ga6 from '../images/GEINAcademy/ga-6.jpeg'
import ga7 from '../images/GEINAcademy/ga-7.jpeg'
import ga8 from '../images/GEINAcademy/ga-8.webp'
import ga9 from '../images/GEINAcademy/ga-9.jpg'
import ga10 from '../images/GEINAcademy/ga-10.png'
import ga11 from '../images/GEINAcademy/ga-11.jpg'

import { Content, Detail } from '@/utils/generateContent';
import { Facebook } from '@/components/bases/SVG';

const ContactToBuy: Detail = {
    type: Content.ct,
    content: ['Kết nối Facebook', `KẾT NỐI VỚI ${coach.name.toUpperCase()} TRÊN FACEBOOK`, <Facebook width={20} height={20} fill='white'/>],
}

export const GEINAcademy: Post = {
    title: 'GEIN Academy là gì? Sự thật Numerology tại GEIN Group',
    description: 'Mấy năm gần đây, GEIN Academy hay GEIN Group (đọc tương tự: GHÊN) đang nổi lên như một hiện tượng trong giới kinh doanh – đặc biệt là kinh doanh giáo dục. Mới sự phát triển, lan tỏa mạnh mẽ ấy rất nhiều người đang thắc mắc GEIN Academy là',
    createdDate: '20/04/2023',
    to: '/gein/gein-academy',
    thumbnail: gaThumb,
    author: coach.name,
    details: [
        {
            type: Content.m,
            content: ['Mấy năm gần đây, GEIN Academy hay GEIN Group (đọc tương tự: GHÊN) đang nổi lên như một hiện tượng trong giới kinh doanh – đặc biệt là kinh doanh giáo dục. Mới sự phát triển, lan tỏa mạnh mẽ ấy rất nhiều người đang thắc mắc GEIN Academy là gì? Cũng có rất nhiều thông tin đồn đoán rằng GEIN Academy lừa đảo, đa cấp. Vậy sự thật về GEIN là gì, hãy xem hết bài này!'],
            mark: ['GEIN Academy', 'GEIN Group']
        },
        {
            type: Content.s,
            content: ['GEIN Academy là gì?']
        },
        {
            type: Content.v,
            content: ['https://www.youtube.com/embed/HePIJfAK-yE?si=4b_rpHbSqzBAffhN'],
            alt: 'Video giới thiệu GEIN Academy'
        },
        {
            type: Content.p,
            content: ['GEIN là viết tắt bởi các từ Tiếng Anh trong tên quốc tế của công ty.'],
        },
        {
            type: Content.l,
            content: [
                <>Tên công ty: {company.name}</>,
                `Mã số thuế: ${company.taxCode}`,
                `Nơi cấp: ${company.issuedBy}`,
                `Trụ sở chính: ${company.headquarter}`,
            ]
        },
        {
            type: Content.p,
            content: [
                'GEIN hoạt động trong lĩnh vực giáo dục – đào tạo – phát triển con người. Hiện nay, GEIN Academy đang ứng dụng một công cụ khoa học thấu hiểu con người là Numerology (đọc là Niu mơ ro lo ri) kết hợp với MBTI, NLP, DISC để giúp con người thấu hiểu bản thân, phát triển sự nghiệp tương lai.',
                <p>Ngoài ra, GEIN còn được gọi là <strong>Học viện Life coach Quốc tế</strong></p>,
                'GEIN Academy là một trong những đơn vị đầu tiên, tiên phong mang những tinh hoa tri thức quốc tế về nghề life coach để đào tạo tại Việt Nam, từ đó góp phần giúp cho hàng triệu người chuyển hóa tích cực và đạt được kết quả mong muốn trong cuộc sống.',
                'Khi học tập và làm việc tại GEIN, bạn cũng sẽ được thi và cấp chứng chỉ Life Coach Quốc Tế!'
            ]
        },
        {
            type: Content.i,
            content: [ga2],
            alt: 'Chương trình GEIN Academy tổ chức cùng John Maxwell tại Trung tâm Hội nghị Quốc gia với hơn 3.500 người',
        },
        {
            type: Content.ss,
            content: ['Sứ mệnh:'],
        },
        {
            type: Content.p,
            content: ['Chuyển hóa con người trong môi trường Tam Bảo: người thầy hiền trí + người bạn tốt + tủ sách hay,x góp phần xây dựng cộng đồng sống cống hiến và có ý nghĩa.'],
        },
        {
            type: Content.ss,
            content: ['Tầm nhìn:']
        },
        {
            type: Content.p,
            content: ['Trở thành Vườn ươm đội ngũ nhân tài có đầy đủ ba gốc rễ: Đạo Đức + Nghị Lực + Trí Tuệ. Kiến tạo thế hệ lãnh đạo xây dựng nên một xã hội phát triển bền vững.'],
        },
        {
            type: Content.ss,
            content: ['Giá trị cốt lõi']
        },
        {
            type: Content.p,
            content: ['GEIN Academy là nơi vun bồi 3 năng lực cốt lõi cho mỗi thành viên, khách hàng của mình:']
        },
        {
            type: Content.b,
            content: ['Nuôi dưỡng đạo đức']
        },
        {
            type: Content.l,
            content: [
                'Sống có lòng biết ơn, bao dung và độ lượng.',
                'Trung thực đến tận cùng.',
                'Phụng sự và cho đi vô điều kiện.'
            ]
        },
        {
            type: Content.b,
            content: ['Rèn luyện nghị lực']
        },
        {
            type: Content.l,
            content: [
                'Bình tĩnh trước khó khăn.',
                'Dám vượt khó, ra khỏi vùng an toàn để tiến bộ và giúp người.',
                'Kiên trì, bền bỉ và làm tới cùng những việc thiện.'
            ]
        },
        {
            type: Content.b,
            content: ['Trau dồi trí tuệ']
        },
        {
            type: Content.l,
            content: [
                'Học tập không ngừng, chủ động trong việc học, biết phân biệt thiện ác, tìm ra nhân quả của từng vấn đề.',
                'Phát triển năng lực phân biệt đúng đắn từng vấn đề, hoàn thiện mình mỗi ngày và nhiệt tâm đóng góp cho cộng đồng.'
            ]
        },
        {
            type: Content.s,
            content: ['Người sáng lập ra GEIN Group']
        },
        {
            type: Content.p,
            content: ['GEIN Academy được thành lập bởi 3 người như 3 chân kiềng vững chắc, mỗi người một điểm mạnh, mỗi người một tài năng đã tạo nên GEIN GROUP mạnh mẽ như ngày nay. Họ là hiện thân cho 3 gốc: Đạo Đức – Nghị Lực – Trí Tuệ']
        },
        {
            type: Content.ss,
            content: ['CEO Nguyễn Thị Thu – Diệu Thu']
        },
        {
            type: Content.i,
            content: [ga3],
            alt: 'Cô Thu trong một buổi đào tạo sản phẩm'
        },
        {
            type: Content.p,
            content: ['Cố Diệu Thu được coi là biểu tượng của Nghị Lực, chỉ số đường đời 8, linh hồn 2. Nếu bạn tiếp súc và gặp cô Thu thì sẽ thấy năng lượng và sức ảnh hưởng cực lớn. Đặc biệt, nếu đọc cuốn sách “Hành trình khắc tên mình lên đá” thì bạn sẽ càng cảm thấy yêu quý cô Thu, khâm phục và đồng cảm thêm nghị lực vượt khó của cô ấy. Từ con của một người nhặt ve chai, tự ti bản thân, bị người đời hắt hủi, chà đạp đã vươn mình trở thành chủ của 2 doanh nghiệp như hiện tại.']
        },
        {
            type: Content.b,
            content: ['Thành tựu của cô Diệu Thu'],
        },
        {
            type: Content.l,
            content: [
                'Nhà sáng lập GEIN GROUP',
                'Nhà sáng lập SAVARY YOGA & DANCE',
                'Nhà huấn luyện chuyên nghiệp về đào tạo và định hướng sự nghiệp',
                '10 năm kinh nghiệp điều hành, quản trị và kinh doanh trong lĩnh vực giáo dục',
                'Tác giả cuốn sách bán chạy: “Hành trình khắc tên mình lên đá”',
                'Nhà lãnh đạo, diễn giả truyền cảm hứng đến hàng nghìn người',
                'Sở hữu chứng chỉ MBTI Practitioner Quốc tế.'
            ]
        },
        {
            type: Content.ss,
            content: ['Co-Founder Nguyễn Thị Thạch Thảo']
        },
        {
            type: Content.i,
            content: [ga4],
            alt: 'Cô Thạch Thảo đào tạo sản phẩm'
        },
        {
            type: Content.p,
            content: ['Cô Thảo được ví như Tượng đài Trí tuệ tại GEIN mang đường đời 1, linh hồn 7. Một người có học vấn uyên thâm, sâu rộng ở nhiều lĩnh vực. Nếu được nghe cô Thảo chia sẻ bạn sẽ cảm nhận được Tri thức chính là con đường dẫn tới thành công. Phong cách chia sẻ rất nhẹ nhàng nhưng cực kỳ cuốn hút, mang chiều sâu đến gốc dễ của câu chuyện.']
        },
        {
            type: Content.b,
            content: ['Thành tựu của cô Thảo']
        },
        {
            type: Content.l,
            content: [
                'Nhà đồng sáng lập GEIN GROUP',
                'Có kinh nghiệm 10 năm lãnh đạo, điều hành tại các tổ chức và công ty đa quốc gia trong lĩnh vực giáo dục',
                'Người kiến tạo ra những chương trình đào tạo quốc tế tại GEIN',
                'Người đầu tiên tại Việt Nam được nhận chứng chỉ hành thiền Ho’oponopono do Joe Vitale trực tiếp cấp',
                'Sở hữu chứng chỉ NLP Practitioner, MBTI Practitioner và chứng chỉ về Tâm lý học Hành vi Trẻ em cấp bởi đại học Stanford (Hoa Kỳ).'
            ]
        },
        {
            type: Content.ss,
            content: ['Co-Founder Lang Công Đạt']
        },
        {
            type: Content.i,
            content: [ga5],
            alt: 'Thầy Lang Công Đạt trong một khóa đào tạo của GEIN'
        },
        {
            type: Content.p,
            content: ['Thầy Đạt với đường đời 9, linh hồn 8 được mọi người ngưỡng mộ với gốc Đạo Đức của mình. Một chàng trai cực kỳ nồng ấm, yêu thương và đặc biệt được rất nhiều người trong GEIN yêu quý (cả nam và nữ). Nếu gặp thầy bạn sẽ cảm nhận được năng lượng yêu thương này, mọi người có xu hướng muốn được ôm và nhận năng lượng yêu thương từ thầy Đạt.']
        },
        {
            type: Content.b,
            content: ['Dù còn rất trẻ nhưng thầy Lang Công Đạt cũng đã có những thành tựu rất nổi bật:']
        },
        {
            type: Content.l,
            content: [
                'Nhà đồng sáng lập GEIN GROUP',
                'Đã có 8 năm kinh nghiệm quản lý và điều hành các hệ thống đào tạo về giáo dục tại Việt Nam',
                'Trở thành một trong những giám đốc trẻ nhất ở tuổi 22',
                'Diễn giả truyền cảm hứng trong nhiều chương trình đào tạo hàng nghìn người',
                'Sở hữu chứng chỉ MBTI Practitioner và nhiều chứng chỉ khác.'
            ]
        },
        {
            type: Content.m,
            content: ['Qua 3 con người này mới thấy, không phải tự dưng mà GEIN Academy có thể phát triển nhanh chóng và lan tỏa mạnh mẽ đến như vậy. Mỗi người như một mảnh ghép với nhau, tạo nên kiềng 3 chân vững chắc. Theo Map For Success, thì tạo lên 1 tam giác vàng 1-8-9 (bộ số lãnh đạo toàn năng).'],
            mark: ['Map For Success']
        },
        {
            type: Content.i,
            content: [
                ga6,
                ga7,
            ]
        },
        {
            type: Content.s,
            content: ['GEIN Group kinh doanh gì?']
        },
        {
            type: Content.p,
            content: [
                'Một điều rất nhiều người khi mới nghe đến GEIN đều rất thắc mắc rằng công ty này kinh doanh sản phẩm gì, làm về lĩnh vực gì mà mọi người lại yêu quý như vậy.',
                'Công ty GEIN Academy là một công ty về giáo dục, vì vậy mà lĩnh vực kinh doanh cũng là giáo dục.',
                'Hiện nay, GEIN đang là công ty đầu tiên tại Việt Nam phát triển kinh doanh hệ thống cho lĩnh vực về giáo dục – life coach.',
            ]
        },
        {
            type: Content.m,
            content: ['Sản phẩm của GEIN Academy rất nhiều bao gồm: Map For Success (Bản đồ thành công), Kid Talent Map (Bản đồ thấu hiểu con) sách và các khóa học chuyên sâu về luận giải bản đồ Map For Success, Life Coach, các chương trình đào tạo quốc tế.'],
            mark: ['Bản đồ thành công', 'Kid Talent Map']
        },
        {
            type: Content.ads
        },
        {
            type: Content.m,
            content: ['Đặc biệt, GEIN Academy đang là nơi đào tạo ra nhiều người làm Nghề Life Coach và thành công với nghề này nhiều nhất tại Việt Nam. Những thành tích cực kỳ đáng nể sẽ được nói tới phần dưới.'],
            mark: ['Nghề Life Coach'],
        },
        {
            type: Content.p,
            content: [
                'Bởi vì kinh doanh trong lĩnh vực giáo dục – đào tạo giúp con người thấu hiểu bản thân – chuyển hóa cuộc đời, cực kỳ nhân văn và ý nghĩa nên GEIN được rất nhiều người ủng hộ, giúp sức.',
                'Từ đó mà càng ngày càng phát triển hơn nữa.',
                'Bất cứ ai trở thành khách hàng của GEIN thì đều có cuộc sống tốt đẹp hơn, đặc biệt trở thành thành viên của Gia Đình GEIN, đối tác của Gein Academy thì chắc chắn cuộc sống, mối quan hệ và sự nghiệp đều vượt trội so với trước đây.'
            ]
        },
        {
            type: Content.i,
            content: [ga8],
            alt: 'Một chương trình đào tạo của GEIN ACADEMY với Tiến sĩ Alok',
        },
        {
            type: Content.s,
            content: ['Các khóa học tại học viên GEIN']
        },
        {
            type: Content.p,
            content: [
                'Tại GEIN thì có nhiều khóa học được tổ chức định kỳ hàng tháng và các khóa học được tổ chức theo nhu cầu của học viên.',
                'Nổi bật nhất phải kể đến là Khóa học sản phẩm: Luận giải bản đồ thành công Map For Success được tổ chức 2 lần mỗi tháng tại Hà Nội và Hồ Chí Minh, những người ở xa có thể học qua ứng dụng Zoom online.',
                'Mỗi khóa học luôn có hơn 1.000 người cùng học offline và online.',
                'Đủ thấy sức nóng và sức hút của khóa học này (bởi vì hiệu quả của nó đã được hàng trăm nghìn người chứng nhận)',
                'Thêm vào đó là các khóa học được dạy từ các chuyên gia quốc tế.'
            ]
        },
        {
            type: Content.i,
            content: [ga9]
        },
        ContactToBuy,
        {
            type: Content.p,
            content: [
                'Nổi bật gần đây nhất là 2 có 2 diễn giả Alox và John.C Maxwell về Việt Nam dạy tạo tiếng vang, sự bất ngờ rất lớn cho những người trong ngành giáo dục, kinh doanh.',
                'Ngoài ra, GEIN Academy thường xuyên có các khóa học cực hay cho khách hàng như Khóa học thiền định, khóa học thiền Ho’oponopono, khóa học về lòng biết ơn, khóa học về chữa lành, khóa học gieo hạt – cho đi, khóa học thấu hiểu con, khóa học vợ chồng, khóa học về tài chính, khóa học rèn luyện thói quen dậy sớm, đọc sách, thể dục – chạy bộ – yoga…',
                'Mục đích của tất cả những khóa học này là giúp khách hàng chuyển hóa tối đa cả 3 gốc Đạo Đức – Nghị Lực – Trí Tuệ, để thay đổi cuộc đời tích cực hơn.'
            ]
        },
        {
            type: Content.s,
            content: ['Numerology tại GEIN có tốt không?'],
        },
        {
            type: Content.p,
            content: ['Thực tế thì ở GEIN Academy không được gọi là Numerology mà gọi là Map For Success. Bởi vì MFS không chỉ có thuần Numerology mà còn ứng dụng cả các môn khoa học hiện đại khác để giúp định hướng con người – đưa ra một lộ trình để giúp con người đạt được những mục tiêu trong cuộc sống, sử dụng đúng và tối đa năng lực thiên bẩm của mình.']
        },
        {
            type: Content.i,
            content: [ga10],
            alt: 'Bản đồ Map For Success với 17 chỉ số tại GEIN'
        },
        {
            type: Content.p,
            content: [
                'Numerology đã tốt, nay với MFS còn tốt hơn.',
                'Đặc biệt, khi đã biết được năng lực của mình, điểm mạnh, điểm yếu ra sao, những cơ hội sẽ đến với mình để bạn chuẩn bị sẵn sàng, tại GEIN Academy còn có các khóa học giúp bạn đi đúng với điểm mạnh của bản thân, rèn luyện và chuyển hóa bản thân mình.',
                'Mọi kết quả mình nhận được trong cuộc sống đều xuất phát từ chính mình. Do đó mà điều đầu tiên mình cần phải thay đổi chính là thay đổi mình – vì thực tế mình cũng không thay đổi người khác được.',
                'Numerology hay Map For Success cũng như một kim chỉ nam cho chỉ dẫn cho bạn đi, như một bản đồ từ điểm A (hiện tại) đi tới điểm B (thành công, hạnh phúc). Nhưng việc có đi theo hay không là ở bạn – do chính bạn. Bạn có chịu học tập, rèn luyện hay không.',
                'Ví dụ bạn đang gặp vấn đề về mối quan hệ gia đình – bạn biết được tại sao lại bị như vậy, bạn biết được cách thức để mối quan hệ tốt đẹp hơn. Nhưng bạn không thay đổi lời nói, không thay đổi hành vi, không rèn luyện thì liệu mối quan hệ này có tốt được hay không?',
                'Vì vậy mà GEIN phải tổ chức các chương trình đào tạo, có chuyên gia coaching và theo sát hướng dẫn bạn suốt 90 ngày để giúp bạn thiết lập những thói quen mới tốt đẹp hơn trong cuộc sống.',
                'Đây cũng chính là điểm khác biệt của Map For Success GEIN so với những bên Numerology khác.',
                'Bạn có thể đọc chi tiết bài viết Map For Success để hiểu sâu sắc hơn nhé.'
            ]
        },
        {
            type: Content.s,
            content: ['Một vài thành tựu mà GEIN đã đạt được?']
        },
        {
            type: Content.p,
            content: ['Một vài thành tựu nhỏ mà GEIN Academy đã đạt được thời gian qua có thể kể đến như:'],
        },
        {
            type: Content.l,
            content: [
                'Lan tỏa Map For Success đến hơn 17 nước trên thế giới: Nhật Bản, Hàn Quốc, Hoa Kỳ, Pháp, Malysia, Anh Quốc,..',
                'Công ty giáo dục có lượng học viên học 1 khóa học đông nhất tại Việt Nam',
                <>Phát hành riêng 2 cuốn sách: Hành trình khắc tên mình lên đá, <a>Chuyển hóa bản thân sống đời ngoại hạng</a> và dịch một vài cuốn sách quốc tế độc quyền khác</>,
                'Hơn 110.000 khách hàng đã mở bản đồ Map For Success',
                'Hơn 10.000 đối tác – Nhà Life Coach, chuyên gia luận giải Map For Sucess'
            ]
        },
        {
            type: Content.s,
            content: ['Câu hỏi thường gặp']
        },
        {
            type: Content.ss,
            content: ['GEIN Academy lừa đảo có thật không?']
        },
        {
            type: Content.p,
            content: [
                'Thực ra, với sự phát triển nhanh của GEIN, những bên đối thủ đã “ghen ghét” và tung tin đồn nhảm rằng GEIN lừa đảo, thực ra thì không phải vậy. Ở Việt Nam, công ty mà lừa đảo tới hơn 110 nghìn khách hàng thì chắc chắn sẽ không thể tồn tại được đến bây giờ. Nên bạn hoàn toàn yên tâm rằng GEIN Academy là người thật việc thật nhé.',
                'Thêm vào đó, nhiều người thấy người thân (anh chị em, bạn bè, bố mẹ, con cái) có sự thay đổi và chuyển hóa quá nhanh sau khi vào GEIN nên sợ hãi (thậm chí là đố kị vì họ tốt hơn mình) nên đã có những lo lắng và sinh nghi.',
                'Thực ra, bất cứ ai khi nhận thức được nâng lên thì đều sẽ thay đổi cả. Đó chính là sức mạnh của Giáo dục – Trí tuệ. Nên bạn có thể yên tâm và hoàn toàn tin tưởng nếu có ý định làm việc tại Gein hoặc có người thân làm việc tại đây.'
            ]
        },
        {
            type: Content.ss,
            content: ['GEIN Academy đa cấp phải không?']
        },
        {
            type: Content.p,
            content: [
                'Chắc chắn là KHÔNG nhé bạn. Đa cấp ở Việt Nam rất khó để được cấp phép hoạt động và nhà nước quản lý rất chặt chẽ. GEIN chỉ đơn giản là một công ty bình thương như bao công ty khác, nhưng sức hút và số lượng người tham gia rất lớn nên nhiều người lo sợ đấy là đa cấp lôi kéo.',
                'Bởi vì mô hình kinh doanh giáo dục của GEIN rất hiện đại, phát triển nghề life coach, có thể làm online mọi lúc mọi nơi không bị giới hạn bởi không gian làm việc nên mọi người làm việc rất nhiều.',
                'Có những người đang là chủ doanh nghiệp vẫn tham gia vào GEIN để học tập phát triển bản thân và mở rộng thêm 1 lĩnh vực kinh doanh mới.',
                'Bạn hoàn toàn yên tâm, cũng như ý trên, nếu là đa cấp trái phép thì theo luật pháp Việt Nam chắc chắn đã bị vùi dập từ lâu rồi.'
            ]
        },
        {
            type: Content.i,
            content: [ga11],
            alt: 'Coaching chỉ số đường đời và linh hồn'
        },
        ContactToBuy,
        {
            type: Content.ads
        }
    ]
};