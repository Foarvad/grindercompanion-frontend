import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppModel, ActivityModel, SessionModel } from '@core/models';
import App from 'App';


const models = {
    App: AppModel,
    Activities: ActivityModel,
    Session: SessionModel,
};

ReactDOM.render((
    <Provider {...models}>
        <Router>
            <App/>
        </Router>
    </Provider>
), document.getElementById('root'));
