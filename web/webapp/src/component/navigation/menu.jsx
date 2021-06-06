import {Menu} from "antd";
import {Link} from "react-router-dom";
import menuItems from "../../router/lazyRouteData";
import React from "react";
import {MenuService} from "../../service";

const {SubMenu} = Menu;
export let availableItems = [];

const renderChild = (item) => {
    return item.children.map((child) => {
        return renderItem(child);
    });
};

const renderIcon = (iconType) => {
    if (iconType != null) {
        return iconType
    }
};

const renderItem = (item) => {
    if (availableItems.includes(item.key) && !item.hidden) {
        if (!item.hidden) {
            if (item.children == null || item.children.length === 0) {
                return (
                    <Menu.Item
                        key={item.key}
                        theme={"dark"}
                    >
                        <Link to={item.component !== null ? item.key : '#'}>
                            {renderIcon(item.iconType)}
                            <span>{item.name}</span>
                        </Link>
                    </Menu.Item>
                );
            } else {
                return (
                    <SubMenu
                        key={item.key}
                        theme={"dark"}
                        title={
                            <span>
                        {renderIcon(item.iconType)}
                                <span>{item.name}</span>
                    </span>
                        }
                    >
                        {
                            renderChild(item)
                        }
                    </SubMenu>
                );
            }
        }
    }
};

export const renderMenu = async () => {
    let itemSidebars = menuItems();

    return await MenuService.getAccessibleMenuList()
        .then(accessibleMenus => {
            availableItems = accessibleMenus;

            return itemSidebars.map((item, index) => {
                return renderItem(item, index)
            })
        });

    // availableItems = menuItems();
    //
    // return Promise.resolve(itemSidebars.map((item, index) => {
    //     return renderItem(item, index);
    // }).filter(item => item));
};
