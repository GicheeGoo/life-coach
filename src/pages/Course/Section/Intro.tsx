import { FC } from "preact/compat";
import clsx from "clsx";

import { CourseSectionProps } from "../Course";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Ratio } from "@/components/bases/Ratio/Ratio";
import { Image } from '@/components/bases/Image/Image';
import { RegisterForm } from "@/components/apps/RegisterForm/RegisterForm";
import { Animate } from "@/components/bases/Animate/Animate";

import { Video } from "@/components/apps/Content/Video";

import { useBreakPoint } from "@/hooks/useBreakPoint";

import introImg from '@/assets/course-intro.jpeg';
import { ANIMATION_CONFIG } from "@/constants/animationConfig";

export const Intro: FC<CourseSectionProps> = ({ className }) =>
{
    const isMobile = useBreakPoint('mobile');

    return (
        <>
            <Wrapper className='intro'>
                <Animate
                    initial={{ y: -ANIMATION_CONFIG.initPosition, scale: 1 }}
                    animate={{ y: ANIMATION_CONFIG.animatePosition }}
                    whileHover={{ scale: 1.05 }}
                >
                    <Ratio width={1200} height={675}>
                        <Image src={introImg} />
                    </Ratio>
                </Animate>
            </Wrapper>

            <Wrapper wrapperClassName='intro bg bg-1' className={clsx(isMobile ? 'p-8' : className , 'intro-form w-full')}>
                <Animate initial={{ x: ANIMATION_CONFIG.initPosition }} animate={{ x: ANIMATION_CONFIG.animatePosition }}>
                    <h2 className='m-0 title'>
                        KHOÁ HỌC ĐÃ CHUYỂN HOÁ HƠN 15.000 NGƯỜI
                    </h2>
                </Animate>

                <Animate initial={{ x: -ANIMATION_CONFIG.initPosition }} animate={{ x: ANIMATION_CONFIG.animatePosition }}>
                    <p className='title'>
                        <strong>THIẾT KẾ BẢN ĐỒ THÀNH CÔNG MAP FOR SUCCESS</strong>
                    </p>
                </Animate>
                
                <div className={clsx('flex', isMobile && 'flex-col gap-4')}>
                    <div className='flex-4'>
                        <Video content={['https://www.youtube.com/embed/HePIJfAK-yE?si=SSWp--ip-tlVcmXz']} rounded/>
                    </div>

                    <div className={clsx('flex-3 flex flex-col items-center', !isMobile && 'px-12')}>
                        <h5 className='title'>ĐĂNG KÝ NGAY</h5>
                        <RegisterForm />
                    </div>
                </div>
            </Wrapper>
        </>
    )
}