import React, {Suspense} from "react";
import {Layout, Space, Spin, Typography} from "antd";
import "./common.css"
import {LazyRouterConfig} from "../router";
import {Switch} from "react-router-dom";
import {HeaderNavigation, SideNavigation} from "../component";

const {Content, Footer, Sider} = Layout;
const {Text, Link} = Typography;

export default class CommonLayout extends React.Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
        <Layout style={{minHeight: "100vh"}}>
          <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
              breakpoint="lg"
              collapsedWidth="0"
              onCollapse={(collapsed, type) => {
                this.setState({collapsed});
              }}
              theme={"dark"}
              width={210}
          >
            <div className="logo">Payco Batch Manager</div>
            <SideNavigation/>
          </Sider>
          <Layout>
            <HeaderNavigation onTriggerClick={this.toggle}
            />
            <Content style={{margin: "0 16px"}}>
              <div style={{margin: "16px 0"}}>

              </div>
              <div style={{background: '#fff', padding: 24, minHeight: "80vh"}}>
                <Suspense
                    fallback={
                      <Spin spinning={true} tip={<span>Pulling component. This happens in first load...<br/>If you can read this statement, it means you should call internet provider.</span>}>
                        <div style={{
                          width: "100vw",
                          height: "100vh",
                          background: "rgba(64,203,245,0.2)"
                        }}/>
                      </Spin>}
                >
                  <Switch>
                    <LazyRouterConfig/>
                  </Switch>
                </Suspense>
              </div>
            </Content>
            <Footer style={{textAlign: "center"}}>
              NHN PAYCO ©2021
            </Footer>
          </Layout>
        </Layout>
    );
  }
}

