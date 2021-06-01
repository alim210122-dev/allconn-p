import {Menu} from "antd";
import React from "react";
import {renderMenu} from "./menu"
import {withRouter, matchPath} from 'react-router-dom';
import routeData from "../../router/lazyRouteData";
import PropTypes from "prop-types";

const bfs = (tree, collection) => {
    return tree.forEach(item => {
        if (item.component) {
            let obj = {
                key: item.key,
                path: item.path,
                component: item.component,
                exact: !!item.exact,
                hidden: item.hidden,
                presentKey: item.presentKey
            };
            collection.push(obj);
        }
        if (item.children != null) {
            bfs(item.children, collection);
        }
    });
};

const flattenMenu = [];

class SideNavigation extends React.Component {
    rootSubmenuKeys = [];
    state = {
        collapsed: false,
        openKeys: [],
        selectedKeys: [],
        menuData: [],
    };

    async componentDidMount() {
        this.setNavigationState();
        bfs(routeData(), flattenMenu);

        const menuData = await renderMenu();

        this.setState({
            menuData,
            selectedKeys: [this.getActiveKey()],
        });

        this.setInitOpenKeys();
        //
        // renderMenu().then(data => {
        //     this.setState({
        //         menuData: data,
        //         selectedKeys: [this.getActiveKey()],
        //     });
        //     this.setInitOpenKeys();
        // });
    };

    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                onSelect={this.menuOnSelect}
                selectedKeys={this.state.selectedKeys}
            >
                {this.state.menuData}
            </Menu>
        );
    }

    setInitOpenKeys = () => {
        if (this.state.openKeys == null || (this.rootSubmenuKeys != null && this.rootSubmenuKeys.length > 0 && this.state.openKeys.length <= 0)) {
            if (this.rootSubmenuKeys != null && this.props.location.pathname != null && this.props.location.pathname !== "/") {
                let openKeys = [];
                routeData().filter(sub => sub.children != null).forEach(sub => {
                    if (sub.children.filter(child => child.key !== '' && this.props.location.pathname.match(new RegExp("^" + child.key + ".*"))).length) {
                        openKeys.push(sub.key);
                    }
                });

                if (openKeys.length > 0) {
                    this.setState({
                        openKeys,
                    })
                }
            }
        }
    };

    setNavigationState = () => {
        const itemSidebars = routeData();
        itemSidebars.forEach((item) => {
            if (item.children != null) {
                this.rootSubmenuKeys.push(item.key);
            }
        });
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({
                openKeys: openKeys,
            });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    menuOnSelect = (itemSelected) => {
        this.setState({
            selectedKeys: [itemSelected.key]
        })
    };

    getActiveKey = () => {
        const currentLocation = this.props.location.pathname;
        for (let route of flattenMenu) {
            if (matchPath(currentLocation, {
                path: route.key,
                exact: route.exact,
            })) {
                if (route.hidden) {
                    return route.presentKey
                } else {
                    return route.key;
                }
            }
        }
        return "";
    }
}

SideNavigation.propTypes = {
    collapsed: PropTypes.bool
}

export default withRouter(SideNavigation);
