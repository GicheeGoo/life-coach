import { FC } from "preact/compat";

import { Button, Content } from 'rsuite';

import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';

import geinGroup from '../../../assets/logo-gein-group.png';
import geinAcademy from '../../../assets/logo-gein-academy.png';
import beautySuccess from '../../../assets/logo-beauty-success.png'

export const SectionA: FC = props => {
    return (
        <>
            <Content className="home-section">
                <div style={{ width: 1200, maxWidth: '100%', margin: 'auto', padding: '10rem 1rem 1rem' }}>
                    <div style={{ width: 550, maxWidth: '100%' }}>
                        <div className='section-title'>TRUYỀN NGHỀ LIFE COACH</div>
                        <div className='section-title main'>Nghề Life Coach</div>

                        <div className='section-content'>
                            Bất cứ ai già trẻ – giàu nghèo đều có những nỗi sợ, những vấn đề riêng của họ. Trở thành LifeCoach giúp họ giải quyết các vấn đề trong cuộc sống, sự nghiệp, mối quan hệ, sức khỏe.
                            <br />
                            Học nghề life coach để giúp mình giúp đời!
                        </div>

                        <Button
                            className='section-btn'
                            appearance='primary'
                            color='red'
                            size='lg'
                        >
                            Tìm hiểu ngay
                            <svg
                                width={15}
                                height={15}
                                viewBox="0 0 448 512"
                            >
                                <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                            </svg>
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
                    </div>
                </div>
            </Content>
        </>
    )
}