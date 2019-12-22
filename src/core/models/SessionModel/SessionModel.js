import { observable, action , computed } from 'mobx';


class SessionModel {
    @observable totalMoney = 0;

    @computed get moneyPerHour() {
        const money = this.totalMoney / (this.playingTime / 1000 / 60 / 60) || 0;
        return Math.floor(money);
    }

    @observable startTime = new Date().getTime();

    @observable playingTime = 0;

    @action addMoney = (amount) => {
        this.totalMoney += amount;
    }

    @action sessionTick = async () => {
        this.playingTime = new Date().getTime() - this.startTime;
    }
}

export default new SessionModel();
