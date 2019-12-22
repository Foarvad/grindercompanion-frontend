import React from 'react';
import styled from 'styled-components';

import { SessionStats } from '@features/SessionStats';


const DashboardPage = () => {
    return (
        <Wrapper className="center">
            <SessionStats />
        </Wrapper>
    );
};

export default DashboardPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: stretch;
`;
