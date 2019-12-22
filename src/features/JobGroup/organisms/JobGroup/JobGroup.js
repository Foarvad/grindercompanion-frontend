import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import { Job } from '../../molecules';
import { Section, Title, Body } from '@ui';


const mapStateToProps = ({ Activities }) => ({
    finishJob: Activities.finishJob,
});

@inject(mapStateToProps)
@observer
class JobGroup extends Component {
    render() {
        const { jobs, title, finishJob } = this.props;

        return (
            <Section>
                <Title>{title}</Title>
                <Body>
                    {jobs.map((job, index) => <Job key={index} job={job} finishJob={finishJob} />)}
                </Body>
            </Section>
        );
    }
}

export default JobGroup;
