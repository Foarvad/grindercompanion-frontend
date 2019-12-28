import { observable, action, computed } from 'mobx';

import { SessionModel } from '../SessionModel';


class ActivityModel {
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
        if (this.jobsWithCooldown === 0) return;
        const currentTime = new Date().getTime();
        this.jobsWithCooldown.forEach(job => {
            const cooldown = job.unlockedAt - currentTime;
            if (cooldown > 0) {
                job.cooldown = cooldown;
            } else {
                job.cooldown = 0;
            }
        });
    }

    @action setCooldown(id, cooldown) {
        const job = this.getJob(id);
        job.cooldown = cooldown;
        job.unlockedAt = new Date().getTime() + cooldown;
    }

    @action finishJob = (id, money) => {
        // Try to get finished job by id and insure that is has no cooldown
        const finishedJob = this.getJob(id);
        if (!finishedJob || finishedJob.cooldown !== 0) {
            console.error('Cannot get finished job by id');
            return;
        }

        // Try to get job type
        const jobType = this.jobType[finishedJob.type];
        if (!jobType) {
            console.error(`Job with id "${finishedJob.id}" has invalid job type`);
        }

        const { primaryCooldown, secondaryCooldown } = jobType;

        SessionModel.addMoney(money);
        this.setCooldown(id, primaryCooldown);
        this.addLog({
            id,
            name: finishedJob.name,
        }, money);

        // Set cooldowns for all jobs in group
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
        // Add activity data, money and timestamp to logs
        this.logs.push({
            ...activity,
            money,
            time: new Date().getTime(),
        });
    }

    @computed get jobsWithCooldown() {
        return this.jobs.filter(job => job.cooldown !== 0);
    }

    getJob = (id) => {
        return this.jobs.find((job) => job.id === id);
    }
}

export default new ActivityModel();
