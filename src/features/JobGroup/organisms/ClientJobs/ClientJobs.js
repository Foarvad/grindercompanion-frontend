import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import { JobGroup } from '../JobGroup';


const mapStateToProps = ({ Activities }) => ({
    jobs: Activities.jobs.filter(({ type }) => type === 'client'),
});

@inject(mapStateToProps)
@observer
class ClientJobs extends Component {
    render() {
        const { jobs } = this.props;

        return (
            <JobGroup jobs={jobs} title="Client" />
        );
    }
}

export default ClientJobs;
