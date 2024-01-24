import { FC } from "preact/compat";
import clsx from "clsx";

import { CourseSectionProps } from "../Course";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Ratio } from "@/components/bases/Ratio/Ratio";
import { Image } from '@/components/bases/Image/Image';
import { RegisterForm } from "@/components/apps/RegisterForm/RegisterForm";

import introImg from '@/assets/course-intro.jpeg';

export const Intro: FC<CourseSectionProps> = ({ className }) =>
{
    return (
        <>
            <Wrapper className={clsx('intro', className)}>
                <Ratio width={1200} height={675}>
                    <Image src={introImg} />
                </Ratio>
            </Wrapper>

            <Wrapper wrapperClassName='intro bg bg-1' className={clsx(className, 'intro-form flex w-full py-12')}>
                <div className='flex-4'>
                    <Ratio width={1200} height={675}>
                        <iframe
                            src='https://www.youtube.com/embed/HePIJfAK-yE?si=SSWp--ip-tlVcmXz'
                            title='Giới thiệu về Gein Academy'
                            frameborder={0}
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowFullScreen
                            style={{ borderRadius: '.5rem' }}
                        />
                    </Ratio>
                </div>

                <div className='flex-3 flex flex-col items-center px-12'>
                    <h5 className='title'>ĐĂNG KÝ NGAY</h5>
                    <RegisterForm />
                </div>
            </Wrapper>
        </>
    )
}