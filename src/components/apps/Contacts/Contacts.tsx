import { FC } from "preact/compat";
import { Whisper, Tooltip } from "rsuite";

import { Image } from "@/components/bases/Image/Image";
import { FacebookAlt, Phone } from "@/components/bases/SVG";

import { details } from '@/constants/coach';
import { generateContact } from "@/helpers/contactLink";
import zalo from '@/assets/zalo-logo.webp';

import './Contacts.scss';

const size = 50;

const contacts = [
    {
        tooltip: 'Facebook',
        icon: (
            <a href={generateContact('facebook', details.facebook)}>
                <FacebookAlt className='contact' width={size} height={size} />
            </a>
        )
    },
    {
        tooltip: 'Chat với chúng tôi qua Zalo',
        icon: (
            <a href={generateContact('zalo', details.phone.number)}>
                <Image className='contact' src={zalo} width={size} height={size} />
            </a>
        )
    },
    {
        tooltip: details.phone.number,
        icon: (
            <a href={generateContact('phone', details.phone.number)}>
                <Phone className='contact' width={size} height={size} />
            </a>
        )
    },
]

export const Contacts: FC = props =>
{
    return (
        <div className='contacts flex flex-col gap-4'>
            {contacts.map((contact, index) => (
                <Contact
                    key={index}
                    tooltip={contact.tooltip}
                >
                    {contact.icon}
                </Contact>
            ))}
        </div>
    )
}

const Contact: FC<{ tooltip: string }> = ({ tooltip, children }) =>
{
    return (
        <Whisper
            trigger='hover'
            placement='right'
            speaker={(
                <Tooltip>{tooltip}</Tooltip>
            )}
        >
            {children}
        </Whisper>
    )
}