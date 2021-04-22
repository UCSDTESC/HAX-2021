import React from 'react';
import { withRouter } from 'react-router-dom';

import Hero from '../components/Home/Hero';

const HAXPage = () => {
    return (
        <>
            <Hero />
        </>
    );
};

export default withRouter(HAXPage);