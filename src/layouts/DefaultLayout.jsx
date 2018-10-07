import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';

import './layouts.css';

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
           <Layout>
              <Component {...matchProps} />
           </Layout>
        )}/>
    )
};

export default DefaultLayout
