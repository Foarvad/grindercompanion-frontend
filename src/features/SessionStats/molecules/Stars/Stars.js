import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as StarSVG } from '@assets/img/star.svg';



const Stars = ({ count }) => {
    return (
        <Wrapper>
            <Star isActive={count >= 1} />
            <Star isActive={count >= 2}/>
            <Star isActive={count >= 3}/>
            <Star isActive={count >= 4}/>
            <Star isActive={count === 5}/>
        </Wrapper>
    );
};

Stars.propTypes = {
    count: PropTypes.number.isRequired,
};

export default Stars;

const Wrapper = styled.div`
    z-index: 1;
`;

const Star = styled(StarSVG)`
    width: 16px;
    height: 16px;
    fill: ${({ isActive }) => isActive ? '#FFA462' : 'white'};
`;
