import { FC } from "preact/compat";

import { Wrapper } from "@/components/bases/Wrapper/Wrapper";

import { details } from "@/constants/coach";

import './Copyright.scss'

export const Copyright: FC = props => (
    <Wrapper wrapperClassName='copyright' className='flex items-center justify-center h-16 my-4' >
        Copyright © 2024 {details.department}
    </Wrapper>
)