import { FC } from "preact/compat";
import clsx from "clsx";

import { HomeSection } from "..";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Image } from "@/components/bases/Image/Image";

import { useBreakPoint } from "@/hooks/useBreakPoint";

import { details } from '@/constants/coach';
import coach from '@/assets/life-coach-2.png';

export const SectionB: FC<HomeSection> = ({ className }) =>
{
    const isMobile = useBreakPoint('mobile');

    return (
        <Wrapper className={clsx('flex', className, isMobile && 'flex-col')}>
            <div className='flex-1'>
                <Image src={coach}/>
                <div style={{ textAlign: 'center' }}>
                    <h5 className='my-2'>{details.name}</h5>
                    <p>Chuyên gia Life Coach</p>
                </div>
            </div>

            <div className='section-content head-line flex-1 px-12 mt-6'>
                <h2>
                    Giúp mọi người có cuộc sống tốt đẹp, hạnh phúc và viên mãn hơn mỗi ngày
                </h2>

                <p>Tôi từng là một người không biết mình là ai, không biết mình muốn gì, mất đi động lực và khát khao trong cuộc sống. Nhờ Map For Success và Life Coach tại GEIN đã giúp tôi tìm được ánh sáng và con người thật của mình, giúp tôi tự “sửa mình” để bây giờ tôi có được như ngày hôm nay. Tôi khao khát lan tỏa những giá trị tuyệt vời này đến tất cả mọi người!</p>

                <div>
                    <strong>“Trong cuộc đời này, bạn không thể thay đổi được bất kì ai ngoại trừ thay đổi chính bản thân mình!”</strong>
                </div>
            </div>
        </Wrapper>
    )
}