import { FC } from "preact/compat";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Button } from "@/components/bases/Button/Button";
import { ArrowRight } from '@/components/bases/SVG';
import { Image } from '@/components/bases/Image/Image';
import { HomeSection } from "..";

import geinGroup from '@/assets/logo-gein-group.png';
import geinAcademy from '@/assets/logo-gein-academy.png';
import beautySuccess from '@/assets/logo-beauty-success.png'


const imgs = [geinGroup, geinAcademy, beautySuccess];

export const SectionA: FC<HomeSection> = ({ className }) => {
    return (
            <Wrapper wrapperClassName='section-a' className={className}>
                <div style={{ width: 550, maxWidth: '100%' }}>
                    <div className='section-title'>TRUYỀN NGHỀ LIFE COACH</div>
                    <h1>Nghề Life Coach</h1>

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
                        TÌM HIỂU NGAY
                        <ArrowRight className='ml-4'/>
                    </Button>

                    <h6 className='section-title' style={{ marginTop: '5rem' }}>AS FEATURED IN:</h6>

                    <div className='my-8'>
                        {imgs.map((img, index) => (
                            <Image key={index} src={img} />
                        ))}
                    </div>

                    <blockquote>
                        <p>
                            Life Coach (khai vấn) nghĩa là loại bỏ các trở ngại và khích lệ khách hàng vượt qua những rào cản đang cản trở họ đạt được ước mơ và hoài bão của mình
                        </p>

                        <p>
                            Người life coach khai thác sức mạnh của tinh thần cam kết giúp khách hàng của mình đạt được những kết quả mong muốn trong mọi lĩnh vực của cuộc sống
                        </p>
                    </blockquote>
                </div>
            </Wrapper>
    )
}