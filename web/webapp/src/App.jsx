import React, {Component, lazy, Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
import {Login} from "./page/login";
import {PrivateRoute} from "./guard";
import {Spin} from "antd";
import './App.less';
const CommonLayout = lazy(() => import('./layout/CommonLayout'));


class App extends Component {
  render() {
    return (
        <Suspense fallback={<Spin spinning={true} tip={<span>Batch Manager Loading...</span>}>
          <div style={{
            width: "100vw",
            height: "100vh",
            background: "rgba(17,144,208,0.2)"
          }}/>
        </Spin>}>
          <Switch>
            <Route extract path="/login" component={Login}/>
            <PrivateRoute extract path="/">
              <CommonLayout/>
            </PrivateRoute>
          </Switch>
        </Suspense>
    )
  }
}

export default App;
