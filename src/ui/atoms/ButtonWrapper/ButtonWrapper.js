import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ButtonWrapper = ({ children, inverted, small, ...rest }) => {
    return (
        <Wrapper inverted={inverted} {...rest}>
            {children}
        </Wrapper>
    );
};

ButtonWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    inverted: PropTypes.bool,
    small: PropTypes.bool,
};

export default ButtonWrapper;

const Wrapper = styled.div`
    a, button {
        font-weight: 500;
        font-size: 20px;
        background: ${({ inverted }) => inverted ? 'transparent' : '#fff'};
        border: 2px solid #ffffff;
        transition: .3s;
        border-radius: ${({ small }) => small ? '4px' : '8px'};
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    white-space: nowrap;
	    color: ${({ inverted }) => inverted ? '#fff' : '#5466ef'};
        font-size: 20px;
        cursor: pointer;
        transition: .3s;
        &:hover {
          color: ${({ inverted }) => inverted ? '#5466ef' : '#fff'};
          background: ${({ inverted }) => inverted ? '#fff' : 'transparent'};
        }
    }
`;
