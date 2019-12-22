import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import { Section, Title, Body, TextInput } from '@ui';


const mapStateToProps = ({ Activities }) => ({
    finishOtherActivity: Activities.finishOtherActivity,
});

@inject(mapStateToProps)
@observer
class OtherActivities extends Component {
    state = {
        money: 0,
    };

    render() {
        const { money } = this.state;

        return (
            <Section>
                <Title>Other Activities</Title>
                <StyledBody>
                    <TextInput type="text" placeholder="Money earned" value={money} onChange={this.handleMoneyChange}/>
                    <StyledButton onClick={this.handleFinishOther}>Save</StyledButton>
                </StyledBody>
            </Section>
        );
    }

    handleMoneyChange = (e) => {
        if (Number.isNaN(+e.target.value)) return;
        this.setState({ money: +e.target.value });
    }

    handleFinishOther = () => {
        const { finishOtherActivity } = this.props;
        const { money } = this.state;
        finishOtherActivity(money);
        this.setState({ money: 0 });
    }
}

export default OtherActivities;


const StyledBody = styled(Body)`
    flex-flow: row nowrap;
    align-items: stretch;
    justify-content: center;
`;

const StyledButton = styled.button`
    background: #fff;
    color: #000;
    padding: 0 20px;
`;
