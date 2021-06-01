import React, {lazy} from "react";
import {HomeOutlined} from "@ant-design/icons";

const Home = lazy(() => import('./lazy/home'));

export default () => {
    return [
        {
            key: "/",
            component: Home,
            iconType: (<HomeOutlined/>),
            name: 'Home',
            description: 'Home Page',
            exact: true
        }
    ]
}


