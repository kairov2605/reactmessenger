import React from 'react'
import { Block, Button } from '../../../components'
import { Form, Input } from 'antd';
import {  InfoCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
const RegisterForm = () => {
    const success = true
    return (

        <div>

            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>

            <Block className="auth__block">
                {success ? (<Form><Form.Item >
                    <Input
                        id="email"

                        size="large"
                        placeholder="E-Mail"
                    />
                </Form.Item>
                    <Form.Item >
                        <Input
                            id="user"

                            size="large"
                            placeholder="Ваше имя"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            id="password"

                            size="large"
                            type="password"
                            placeholder="Пароль"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            id="password"

                            size="large"
                            type="password"
                            placeholder="Повторить пароль"
                        />
                    </Form.Item>
                    < Button type="primary" size="large">Зарегистрироваться</Button>
                    <Link className="auth__register--link" to="/login">Войти в аккаунт</Link>
                </Form>
                ) : (<div className="auth__success-block">
                    <div><InfoCircleOutlined style={{ fontSize: '55px', color: '#08c' }} /></div>
                    <h1>Подтвердите свой аккаунт</h1>
                    <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                </div>)}



            </Block>
        </div >

    )
}



export default RegisterForm;
