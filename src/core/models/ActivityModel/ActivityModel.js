import { observable, action } from 'mobx';

import { SessionModel } from '../SessionModel';


class ActivityModel {
    @observable activeCooldowns = [];

    @observable logs = [];

    @observable jobTypes = {
        vip: {
            primaryCooldown: 60000,
            secondaryCooldown: 30000,
        },
        client: {
            primaryCooldown: 120000,
            secondaryCooldown: 60000,
        },
    };

    @observable jobs = {
        hh: {
            name: 'Headhunter',
            type: 'vip',
            cooldown: 0,
            unlockedAt: 0,
        },
        ss: {
            name: 'Sightseer',
            type: 'vip',
            cooldown: 0,
            unlockedAt: 0,
        },
        ds: {
            name: 'Diamond shopping',
            type: 'client',
            cooldown: 0,
            unlockedAt: 0,
        },
        rp: {
            name: 'Robbery in Progress',
            type: 'client',
            cooldown: 0,
            unlockedAt: 0,
        },
    };

    @action activityTick = async () => {
        if (this.activeCooldowns.length === 0) return;
        const currentTime = new Date().getTime();
        this.activeCooldowns.forEach(jobId => {
            const job = this.jobs[jobId];
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
        this.jobs[id].cooldown = cooldown;
        this.jobs[id].unlockedAt = new Date().getTime() + cooldown;
        this.activeCooldowns.push(id);
    }

    @action finishJob = (id, money) => {
        const finishedJob = this.jobs[id];
        if (!finishedJob || finishedJob.cooldown !== 0) return;

        const jobType = this.jobTypes[finishedJob.type];
        if (!jobType) return;

        const { primaryCooldown, secondaryCooldown } = jobType;

        SessionModel.addMoney(money);
        this.setCooldown(id, primaryCooldown);
        this.addLog(id, money);
        for (let jobId in this.jobs) {
            const job = this.jobs[jobId];
            if (job.type === finishedJob.type && job.cooldown === 0) {
                this.setCooldown(jobId, secondaryCooldown);
            }
        }
    }

    @action addLog(id, money) {
        this.logs.push({
            id,
            money,
            time: new Date().getTime(),
        });
    }
}

export default new ActivityModel();
