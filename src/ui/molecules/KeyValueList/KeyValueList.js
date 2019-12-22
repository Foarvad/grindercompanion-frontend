import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const KeyValueList = ({ data, centered }) => {
    return (
        <Wrapper>
            {data.map(({ name, value }, index) => (
                <Item key={index} centered={centered}>
                    <Label>{name}</Label>
                    <Value>{value}</Value>
                </Item>
            ))}
        </Wrapper>
    );
};

KeyValueList.propTypes = {
    data: PropTypes.array.isRequired,
    centered: PropTypes.bool,
};

export default KeyValueList;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

const Item = styled.div`
    font-size: 16px;
    line-height: 20px;
    color: #4A4B5C;
    padding: 5px 10px;
    width: 50%;
    text-align: ${({ centered }) => centered ? 'center' : 'left'};
`;

const Label = styled.div`
    font-weight: 300;
`;

const Value = styled.div`
    font-weight: bold;
`;
