import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const GradientButtonWrapper = ({ children, inverted, small, ...rest }) => {
    return (
        <Wrapper inverted={inverted} {...rest}>
            {children}
        </Wrapper>
    );
};

GradientButtonWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    inverted: PropTypes.bool,
    small: PropTypes.bool,
};

export default GradientButtonWrapper;

const Wrapper = styled.div`
    a, button {
        font-weight: 500;
        font-size: 20px;
        background: linear-gradient(to top left, #62baff, ${({ inverted }) => !inverted ? '#5466ef' : '#01bad7'});
        transition: .3s;
        border-radius: ${({ small }) => small ? '4px' : '8px'};
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    white-space: nowrap;
	    color: #fff;
        cursor: pointer;
        transition: .3s;
        &::before {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: '';
            border-radius: inherit;
            background: linear-gradient(to top left, #62baff, ${({ inverted }) => inverted ? '#5466ef' : '#01bad7'});
            opacity: 0;
            transition: .3s;
        }
        &:hover {
            &::before {
                opacity: 1;
            }
        }
    }
    * {
        position: relative;
    }
`;
