import React from "react";
import {Button, Layout, Menu} from "antd";
import {Authenticate} from "../../guard"
import {LocalStorageKey} from "../../constants";
import "./style.css";
import {MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined} from '@ant-design/icons'

export default class HeaderNavigation extends React.Component {
    state = {
        collapsed: false
    };

    render() {
        return (
            <Layout.Header
                style={{
                    background: '#fff',
                    padding: '0'
                }}
            >
                {this.state.collapsed ?
                    <MenuUnfoldOutlined
                        className="trigger"
                        onClick={this.toggle}/> :
                    <MenuFoldOutlined
                        className="trigger"
                        onClick={this.toggle}/>}
                <Menu
                    theme="light"
                    mode="horizontal"
                    style={{lineHeight: '60px', float: "right"}}
                >
                    {this.renderLogout()}
                </Menu>
            </Layout.Header>
        )
    }

    toggle = () => {
        this.setState({collapsed: !this.state.collapsed});

        this.props.onTriggerClick();
    }

    handleLogout() {
        Authenticate().logOut("/");
    }

    renderLogout = () => {
        return (
            <Menu.Item
                style={{
                    float: 'right',
                    display: 'flex',
                    justifyContent: "space-around",
                    alignItems: 'center',
                    width: "auto"
                }}
                title={"Logout"}
                onClick={this.handleLogout}
            >
                <strong> {localStorage.getItem(LocalStorageKey.LOGGED_USER)}</strong>&nbsp;&nbsp;
                <Button type="link"
                        icon={<LogoutOutlined/>}>
                    Logout
                </Button>
            </Menu.Item>
        )
    };
}
