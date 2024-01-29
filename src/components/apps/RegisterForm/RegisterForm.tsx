import { FC, useState } from 'preact/compat';
import emailjs from '@emailjs/browser';

import Form from 'rsuite/esm/Form/Form';
import ButtonToolbar from 'rsuite/esm/ButtonToolbar/ButtonToolbar';

import { Button } from '@/components/bases/Button/Button';

import './RegisterForm.scss';
import { Callout } from '@/components/bases/Callout/Callout';
import { details } from '@/constants/coach';

type FormData = { name: string, phoneNumber: string, email: string }

const message = {
    success: `Đăng ký thành công, coach ${details.name} sẽ sớm liên hệ với bạn.`,
    error: `Đăng ký thất bại, xin vui lòng thử lại.`
}

export const RegisterForm: FC = props =>
{
    const [success, setSuccess] = useState<boolean>()

    const handleSubmit = (checkStatus: boolean, event: React.FormEvent<HTMLFormElement>) =>
    {
        const formData = new FormData(event.target as HTMLFormElement);
        let form: FormData = { name: '', phoneNumber: '', email: '' };

        const keys = Object.keys(form);
        keys.forEach(key =>
        {
            form[key] = formData.get(key);  
        })

        const SERVICE_ID = 'lifecoach';
        const TEMPLATE_ID = 'lifecoach-template';
        const PUBLIC_KEY = 'eQ-qT6oYDgE0DkPu-'

        emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
            .then(res => setSuccess(res.status === 200));
    }

    return (
        <Form<FormData> className='register-form w-full px-8' onSubmit={handleSubmit}>
            {typeof success === 'boolean' && (
                <Callout
                    type={success ? 'success' : 'danger'}
                    title={success ? message.success : message.error}
                />
            )}

            <Form.Group controlId='name'>
                <Form.Control name='name' placeholder='Tên của bạn' required/>
                <Form.HelpText tooltip>Vui lòng nhập tên của bạn</Form.HelpText>
            </Form.Group>

            <Form.Group controlId='phoneNumber'>
                <Form.Control name='phoneNumber' placeholder='Số điện thoại của bạn (Zalo)' required/>
                <Form.HelpText tooltip>Vui lòng nhập số điện thoại</Form.HelpText>
            </Form.Group>
                
            <Form.Group controlId='email'>
                <Form.Control name='email' type='email' placeholder='Email của bạn' />
                <Form.HelpText tooltip>Vui lòng nhập email</Form.HelpText>
            </Form.Group>
                
            <Form.Group className='flex justify-center'>
                <ButtonToolbar>
                    <Button appearance='primary' color='red' type='submit'>ĐĂNG KÝ NGAY</Button>
                </ButtonToolbar>
            </Form.Group>
      </Form>
    )
}