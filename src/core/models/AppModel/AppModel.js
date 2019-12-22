import { observable, action } from 'mobx';

import { ActivityModel } from '../ActivityModel';
import { SessionModel } from '../SessionModel';


class AppModel {
    @action tick = async () => {
        ActivityModel.activityTick();
        SessionModel.sessionTick();
    }
}

export default new AppModel();
