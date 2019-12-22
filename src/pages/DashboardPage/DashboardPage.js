import React from 'react';
import styled from 'styled-components';

import { media } from '@core/static';

import { SessionStats } from '@features/SessionStats';
import { VipWork, ClientJobs, OtherActivities } from '@features/JobGroup';
import { SessionHistory } from '@features/SessionHistory';


const DashboardPage = () => {
    return (
        <Wrapper className="center">
            <SessionWrapper>
                <SessionStats />
            </SessionWrapper>
            <JobsWrapper>
                <Job>
                    <VipWork />
                </Job>
                <Job>
                    <ClientJobs />
                </Job>
            </JobsWrapper>
            <OtherWrapper>
                <OtherActivities />
            </OtherWrapper>
            <HistoryWrapper>
                <SessionHistory />
            </HistoryWrapper>
        </Wrapper>
    );
};

export default DashboardPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: stretch;
`;

const SessionWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const JobsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    ${media.xs} {
        flex-direction: column;
    }
`;

const Job = styled.div`
    width: calc(50% - 10px);
    margin-bottom: 20px;
    ${media.xs} {
        width: 100%;
    }
`;

const OtherWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const HistoryWrapper = styled.div`
    display: flex;
`;
