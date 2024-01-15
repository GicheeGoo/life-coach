import { FC } from "preact/compat";

import { Button, Content } from 'rsuite';

import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';

import geinGroup from '../../../assets/logo-gein-group.png';
import geinAcademy from '../../../assets/logo-gein-academy.png';
import beautySuccess from '../../../assets/logo-beauty-success.png'

export const SectionA: FC = props => {
    return (
        <>
            <Content className="home-section section-a">
                <div className='section-title'>TRUYỀN NGHỀ LIFE COACH</div>
                <div className='section-title main'>Nghề Life Coach</div>

                <div className='section-content'>
                    Bất cứ ai già trẻ – giàu nghèo đều có những nỗi sợ, những vấn đề riêng của họ. Trở thành LifeCoach giúp họ giải quyết các vấn đề trong cuộc sống, sự nghiệp, mối quan hệ, sức khỏe.
                    <br />
                    Học nghề life coach để giúp mình giúp đời!
                </div>

                <Button
                    appearance='primary'
                    color='red'
                    size='lg'
                    endIcon={<ArrowRightLineIcon />}
                >
                    Tìm hiểu ngay
                </Button>

                <div className='section-title' style={{ marginTop: '7rem' }}>AS FEATURED IN:</div>

                <img src={geinGroup} />
                <img src={geinAcademy} />
                <img src={beautySuccess} />

                <blockquote>
                    <p>
                        Life Coach (khai vấn) nghĩa là loại bỏ các trở ngại và khích lệ khách hàng vượt qua những rào cản đang cản trở họ đạt được ước mơ và hoài bão của mình
                    </p>

                    <p>
                        Người life coach khai thác sức mạnh của tinh thần cam kết giúp khách hàng của mình đạt được những kết quả mong muốn trong mọi lĩnh vực của cuộc sống
                    </p>
                </blockquote>
            </Content>
        </>
    )
}