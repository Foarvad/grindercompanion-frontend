import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const GradientBorderButtonWrapper = ({ children, ...rest }) => {
    return (
        <Wrapper {...rest}>
            {children}
        </Wrapper>
    );
};

GradientBorderButtonWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GradientBorderButtonWrapper;

const Wrapper = styled.div`
    a, button {
        font-weight: 500;
        font-size: 20px;
        background: linear-gradient(to top left,#62baff,#5466ef);
        transition: .3s;
        border-radius: 8px;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    white-space: nowrap;
	    color: #5466ef;
        cursor: pointer;
        transition: .3s;
        &::before {
            position: absolute;
            top: 2px;
            left: 2px;
            bottom: 2px;
            right: 2px;
            background: #fff;
            opacity: 1;
            border-radius: 6px;
            content: '';
            transition: .3s;
        }
        &:hover {
            color: #fff;
            &::before {
                opacity: 0;
            }
        }
    }
    * {
        position: relative;
    }
`;
