import {Button, Form, Input, Layout, message, notification} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import React from "react";
import {Authenticate} from "../../guard";
import {LocalStorageKey} from "../../constants";
import {ErrorCode} from "../../enums";

const {Content} = Layout;
export default class Login extends React.Component {
    componentDidMount() {
        let error = localStorage.getItem(LocalStorageKey.ERROR);

        if (error) {
            this.openNotificationError(error);
            localStorage.removeItem(LocalStorageKey.ERROR);
        }
    }

    render() {
        return (
            <Layout style={{minHeight: "100vh"}}>
                <div className="login-form-logo">
                    Payco Batch Manager
                </div>
                <Layout>
                    <Content>
                        <Form onFinish={this.onFinish} className="login-form">
                            <Form.Item
                                name="username"
                                rules={
                                    [
                                        {
                                            required: true,
                                            message: 'Please Input your username!'
                                        }
                                    ]
                                }
                            >
                                <Input
                                    maxLength={255}
                                    prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Username"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Input your Password!'
                                    }
                                ]}
                            >
                                <Input
                                    maxLength={255}
                                    prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </Content>
                </Layout>
            </Layout>
        );
    }

    onFinish = (values) => {
        const messageType = message.loading('Authenticating...', 0);

        if (values.username) {
            values.username = values.username.toUpperCase();
        }

        let authenticatePromise = Authenticate().authenticate(values.username, values.password);

        authenticatePromise.then(isConfirm => {
            setTimeout(messageType, 100);
            if (isConfirm) {
                if (localStorage.getItem(LocalStorageKey.REDIRECT_URL) && localStorage.getItem(LocalStorageKey.REDIRECT_URL) !== "/login") {
                    this.props.history.replace(localStorage.getItem(LocalStorageKey.REDIRECT_URL));
                } else {
                    this.props.history.replace("/");
                }

            } else {
                this.props.history.replace("/login");
                this.openCreatedAccountNotification();
            }
        });

        authenticatePromise.catch(() => {
            setTimeout(messageType, 100);
        })
    };

    openCreatedAccountNotification = () => {
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
                Confirm
            </Button>
        );
        notification.open({
            message: 'Your account is created!',
            description:
                'Your account is created. Please contact to administrator to active it.',
            btn,
            key,
        });
    };

    openNotificationError = (error) => {
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
                Confirm
            </Button>
        );

        if (error === ErrorCode.ACCESS_DENIED.message) {
            notification.open({
                message: 'Please login!',
                description:
                    'You need to login to access private resource!',
                btn,
                key,
            });
        } else if (error === ErrorCode.SESSION_EXPIRED.message) {
            notification.open({
                message: 'Your session is expired or Internet problem!',
                description:
                    'Your session is expired, please re-login or check our Internet connection!',
                btn,
                key,
            });
        } else {
            notification.open({
                message: 'Unknown Problem in Batch Manager. Automatically log out for safety!',
                description:
                    'Unknown problem is occurred. Please note what you did and send to Administrator.',
                btn,
                key,
            });
        }
    };
}