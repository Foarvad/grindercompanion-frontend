import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import { GlobalStyles } from 'GlobalStyles';
import { DashboardPage } from '@pages/DashboardPage';
// import { LanguageProvider } from '@features/Language';


const propTypes = {

};

const mapStateToProps = ({ App }) => ({
    tick: App.tick,
});

const App = ({ tick }) => {
    useEffect(() => {
        setInterval(tick, 1000);
        console.log(`App initialized at ${new Date()}`);
    }, []);

    return (
        <>
            <GlobalStyles/>
            <DashboardPage/>
        </>
    );
};

App.propTypes = propTypes;

export default inject(mapStateToProps)(observer(App));
