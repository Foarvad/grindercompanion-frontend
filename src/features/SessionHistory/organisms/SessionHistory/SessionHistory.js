import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import { humanizeUnixTime } from '@lib';


const mapStateToProps = ({ Activities }) => ({
    logs: Activities.logs,
});

@inject(mapStateToProps)
@observer
class SessionHistory extends Component {
    render() {
        const { logs } = this.props;

        return (
            <Wrapper>
                <Title>History</Title>
                <Body>
                    {logs.map(({ name, money, time }, index)=> (
                        <Log key={index}>Name: {name}, Money: {money}, Time: {humanizeUnixTime(time, 'HH:mm:ss')}</Log>
                    ))}
                </Body>
            </Wrapper>
        );
    }
}

export default SessionHistory;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    width: 100%;
    color: #fff;
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

const Log = styled.div`
    margin: 5px 0;
`;
