import { observable, action } from 'mobx';

import { SessionModel } from '../SessionModel';


class ActivityModel {
    @observable activeCooldowns = [];

    @observable logs = [];

    @observable jobType = {
        vip: {
            primaryCooldown: 600000,
            secondaryCooldown: 300000,
        },
        client: {
            primaryCooldown: 1800000,
            secondaryCooldown: 300000,
        },
    };

    @observable jobs = [
        {
            id: 'hh',
            name: 'Headhunter',
            type: 'vip',
            cooldown: 0,
            unlockedAt: 0,
        },
        {
            id: 'ss',
            name: 'Sightseer',
            type: 'vip',
            cooldown: 0,
            unlockedAt: 0,
        },
        {
            id: 'ds',
            name: 'Diamond shopping',
            type: 'client',
            cooldown: 0,
            unlockedAt: 0,
        },
        {
            id: 'rp',
            name: 'Robbery in Progress',
            type: 'client',
            cooldown: 0,
            unlockedAt: 0,
        },
    ];

    @action activityTick = async () => {
        if (this.activeCooldowns.length === 0) return;
        const currentTime = new Date().getTime();
        this.activeCooldowns.forEach(jobId => {
            const job = this.getJob(jobId);
            const cooldown = job.unlockedAt - currentTime;
            if (cooldown > 0) {
                job.cooldown = cooldown;
            } else {
                job.cooldown = 0;
                this.removeCooldown(jobId);
            }
        });
    }

    @action removeCooldown = (id) => {
        this.activeCooldowns = this.activeCooldowns.filter(_id => _id !== id);
    }

    @action setCooldown(id, cooldown) {
        const job = this.getJob(id);
        job.cooldown = cooldown;
        job.unlockedAt = new Date().getTime() + cooldown;
        this.activeCooldowns.push(id);
    }

    @action finishJob = (id, money) => {
        const finishedJob = this.getJob(id);
        if (!finishedJob || finishedJob.cooldown !== 0) return;

        const jobType = this.jobType[finishedJob.type];
        if (!jobType) return;

        const { primaryCooldown, secondaryCooldown } = jobType;

        SessionModel.addMoney(money);
        this.setCooldown(id, primaryCooldown);
        this.addLog({
            id,
            name: finishedJob.name,
        }, money);
        this.jobs.forEach(({ id, type, cooldown }) => {
            if (type === finishedJob.type && cooldown === 0) {
                this.setCooldown(id, secondaryCooldown);
            }
        });
    }

    @action finishOtherActivity = (money) => {
        SessionModel.addMoney(money);
        this.addLog({
            id: 'other',
            name: 'Other activity',
        }, money);
    }

    @action addLog(activity, money) {
        this.logs.push({
            ...activity,
            money,
            time: new Date().getTime(),
        });
    }

    getJob = (id) => {
        return this.jobs.find(({ id : _id }) => id === _id);
    }
}

export default new ActivityModel();
