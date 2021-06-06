import React, {PureComponent} from "react";
import applicationRoutes from "./lazyRouteData";
import {Route} from "react-router-dom";
import {MenuService} from "../service";

export default class LazyRouterConfig extends PureComponent {
    state = {
        routes: []
    };

    componentDidMount() {
        let route = applicationRoutes();
        let flattenedCollection = [];

        MenuService.getAccessibleMenuList()
            .then(accessibleMenu => {
                if (accessibleMenu) {
                    this.bfs(route, flattenedCollection);

                    flattenedCollection = flattenedCollection.filter(item => accessibleMenu.includes(item.key));

                    this.setState({
                        routes: this.renderRoute(flattenedCollection)
                    });
                }
            })
    }

    render() {
        return (<div>{this.state.routes}</div>);
    }

    renderRoute = (flattenedCollection) => {
        return flattenedCollection.map((item) => {
                if (item.component !== null)
                    return (<Route
                        key={item.key}
                        path={item.key}
                        component={item.component}
                        exact={!!item.exact}
                    />);
                return "";
            }
        );
    };

    bfs = (tree, collection) => {
        return tree.forEach(item => {
            if (item.component) {
                let obj = {
                    key: item.key,
                    path: item.path,
                    component: item.component,
                    exact: !!item.exact
                };
                collection.push(obj);
            }
            if (item.children != null) {
                this.bfs(item.children, collection);
            }
        });
    };
};
