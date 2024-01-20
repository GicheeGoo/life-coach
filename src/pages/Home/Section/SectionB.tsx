import { FC } from "preact/compat";

import coach from '@/assets/life-coach-2.png'
import { Wrapper } from "@/components/bases/Wrapper/Wrapper";

export const SectionB: FC = props => {
    return (
        <div className='home-section sec-b'>
            <Wrapper className="flex pt-40 px-4 pb-4">
                <img className='flex-1' src={coach} width={600} />

                <div className='section-content flex-1 px-16 mt-6 pt-6'>
                    <h2>
                        Giúp mọi người có cuộc sống tốt đẹp, hạnh phúc và viên mãn hơn mỗi ngày
                    </h2>

                    <div className='mb-5'>Tôi từng là một người không biết mình là ai, không biết mình muốn gì, mất đi động lực và khát khao trong cuộc sống. Nhờ Map For Success và Life Coach tại GEIN đã giúp tôi tìm được ánh sáng và con người thật của mình, giúp tôi tự “sửa mình” để bây giờ tôi có được như ngày hôm nay. Tôi khao khát lan tỏa những giá trị tuyệt vời này đến tất cả mọi người!</div>

                    <div>
                        <strong>“Trong cuộc đời này, bạn không thể thay đổi được bất kì ai ngoại trừ thay đổi chính bản thân mình!”</strong>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}