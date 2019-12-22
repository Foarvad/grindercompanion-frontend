import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import { JobGroup } from '../JobGroup';


const mapStateToProps = ({ Activities }) => ({
    jobs: Activities.jobs.filter(({ type }) => type === 'vip'),
});

@inject(mapStateToProps)
@observer
class VipWork extends Component {
    render() {
        const { jobs } = this.props;

        return (
            <JobGroup jobs={jobs} title="CEO" />
        );
    }
}

export default VipWork;
