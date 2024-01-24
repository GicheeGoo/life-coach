import { FC } from 'preact/compat';

import Form from 'rsuite/esm/Form/Form';
import ButtonToolbar from 'rsuite/esm/ButtonToolbar/ButtonToolbar';

import { Button } from '@/components/bases/Button/Button';

import './RegisterForm.scss';

export const RegisterForm: FC = props =>
{
    return (
        <Form className='register-form'>
            <Form.Group controlId='name'>
                <Form.Control name='name' placeholder='Tên của bạn'/>
                <Form.HelpText tooltip>Vui lòng nhập tên của bạn</Form.HelpText>
            </Form.Group>

            <Form.Group controlId='phoneNumber'>
                <Form.Control name='phoneNumber' placeholder='Số điện thoại của bạn (Zalo)'/>
                <Form.HelpText tooltip>Vui lòng nhập số điện thoại</Form.HelpText>
            </Form.Group>
                
            <Form.Group controlId='email'>
                <Form.Control name='email' type='email' placeholder='Email của bạn' />
                <Form.HelpText tooltip>Vui lòng nhập email</Form.HelpText>
            </Form.Group>
                
            <Form.Group className='flex justify-center'>
                <ButtonToolbar>
                    <Button appearance='primary' color='red'>ĐĂNG KÝ NGAY</Button>
                </ButtonToolbar>
            </Form.Group>
      </Form>
    )
}