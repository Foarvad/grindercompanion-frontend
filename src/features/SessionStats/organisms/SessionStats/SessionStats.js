import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import { humanizeDuration } from '@lib';


const mapStateToProps = ({ App, Activities, Session }) => ({
    playingTime: Session.playingTime,
    totalMoney: Session.totalMoney,
    moneyPerHour: Session.moneyPerHour,
    jobs: Activities.jobs,
    finishJob: Activities.finishJob,
    logs: Activities.logs,
});

@inject(mapStateToProps)
@observer
class SessionStats extends Component {
    render() {
        const { playingTime, totalMoney, moneyPerHour, jobs, logs } = this.props;

        return (
            <Wrapper>
                <Title>Session stats</Title>
                <Body>
                    <span className="playingTime">Playing time: {humanizeDuration(playingTime, 'hh:mm:ss')}</span>
                    <span className="totalMoney">Total money: <span className="money">${totalMoney}</span></span>
                    <span className="moneyPerHour">Money per hour: <span className="money">${moneyPerHour}</span></span>
                    {logs.map(({ id, money, time }, index)=> <div key={index}>id: {id}, money: {money}, time: {time}</div>)}
                </Body>
            </Wrapper>
        );
    }
}

export default SessionStats;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    span {
        font-size: 20px;
        margin-bottom: 10px;
    }
    .money {
        font-weight: bold;
        color: #b8f1b8
    }
`;

const Title = styled.div`
    text-align: center;
    font-size: 40px;
    background: linear-gradient(to right, #0a3e7c, #346cb9);
    padding: 20px;
`;

const Body = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;
