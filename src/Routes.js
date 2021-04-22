import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HAXLayout from './layouts/AppLayout';
import HAXPage from './pages/App';

class Routes extends React.Component {
    withLayout(Layout, Children) {
        return () => (
            <Layout>
                <Children />
            </Layout>
        );
    }

    render() {
        return (
            <Switch>
                <Route
                    path="/"
                    component={this.withLayout(HAXLayout, HAXPage)}
                    exact
                />
            </Switch>
        );
    }
}

export default Routes;
