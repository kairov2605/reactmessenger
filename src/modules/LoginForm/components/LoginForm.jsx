import React from 'react'
import { Block, Button } from '../../../components'
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom'

//import '../../../pages/Auth/Auth.scss'

const LoginForm = () => {
    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block className="auth__block">

                <Form.Item >
                    <Input
                        id="email"

                        size="large"
                        placeholder="E-Mail"
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
                <Button type="primary" size="large">Войти в аккаунт</Button>
                <Link className="auth__register--link" to="/register">Зарегистрироваться</Link>
            </Block></div>

    )
}



export default LoginForm;
