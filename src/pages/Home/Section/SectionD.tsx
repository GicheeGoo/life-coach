import { FC } from "preact/compat";
import clsx from "clsx";

import { HomeSection } from "..";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";
import { Image } from "@/components/bases/Image/Image";

import { useBreakPoint } from "@/hooks/useBreakPoint";

import listing1 from '@/assets/imageWithCustomer/customer-9.jpg';
import listing2 from '@/assets/imageWithCustomer/customer-18.jpg';
import listing3 from '@/assets/imageWithCustomer/customer-16.jpg';
import listing4 from '@/assets/imageWithCustomer/customer-8.jpg';
import listing5 from '@/assets/imageWithCustomer/customer-2.jpg';

const list = [
    'Định hướng công việc, sự nghiệp phù hợp',
    'Chữa lành, hàn gắn và kết nối các mối quan hệ hôn nhân, tình yêu, tình bạn, đồng nghiệp, cấp trên – cấp dưới',
    'Làm rõ điểm mạnh, điểm yếu, cơ hội và thách thức của bản thân để dễ dàng phát huy',
    'Bản đồ lộ trình từng năm, từng chặng đường đỉnh cao trong cuộc sống mình nên làm gì và bồi đắp điều gì'
]

export const SectionD: FC<HomeSection> = ({ className }) =>
{
    const isMobile = useBreakPoint('mobile');

    return (
        <Wrapper className={className}>
            <div className={clsx('flex gap-24 items-center', isMobile && 'flex-col')}>
                <div className='head-line flex-1 h-max'>
                    <h2>Đến với Nghề Life Coach bạn được gì?</h2>
                    <p>Nghề Life Coach là một blog tôi và trợ lý lập ra để chia sẻ, lan tỏa và giúp đỡ những người đang muốn thoát khỏi vũng lầy của cuộc sống để đón nhận cuộc đời mới tốt đẹp hơn</p>

                    {list.map(item => (
                        <ListItem key={item}>
                            {item}
                        </ListItem>
                    ))}
                </div>
                <div className='flex flex-1 gap-8'>
                    <ListImage srcs={[listing1, listing2, listing5]} />
                    <ListImage srcs={[listing3, listing4]} />
                </div>
            </div>
        </Wrapper>
    )
}

export const ListItem: FC = ({ children }) =>
(
    <div className='flex items-center mb-2'>
        <div className='listing-item mr-3 flex-none' />
        <div>
            <strong>{children}</strong>
        </div>
    </div>
)

export const ListImage: FC<{ srcs: string[] }> = ({ srcs }) =>
(
    <div className='flex flex-col flex-1 gap-8'>
        {srcs.map((src, index) => (
            <Image
                key={index}
                className='listing-img w-full'
                src={src}
            />
        ))}
    </div>
)