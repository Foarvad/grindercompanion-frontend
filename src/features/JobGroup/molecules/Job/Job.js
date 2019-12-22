import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { humanizeDuration, useOnClickOutside } from '@lib';
import { TextInput } from '@ui';


const Job = ({ job, finishJob }) => {
    const { id, name, cooldown } = job;
    const [isOpened, setOpened] = useState(false);
    const [moneyEarned, setMoney] = useState('');

    const handleToggleOpen = () => {
        setOpened(!isOpened);
        inputRef.current.focus();
    };

    const handleHide = () => {
        setOpened(false);
    };

    const handleMoneyChange = (e) => {
        if (Number.isNaN(+e.target.value)) return;
        setMoney(+e.target.value);
    };

    const handleFinishJob = () => {
        handleHide();
        finishJob(id, moneyEarned);
        setMoney(0);
    };

    const inputRef = useRef(null);
    const wrapperRef = useRef(null);
    useOnClickOutside(wrapperRef, handleHide);

    return (
        <Wrapper ref={wrapperRef}>
            <Info>
                <span>{name}</span>
                {cooldown ? <span>{humanizeDuration(cooldown, 'mm:ss')}</span> : <StyledButton onClick={handleToggleOpen}>Finish</StyledButton>}
            </Info>
            {!cooldown && (
                <FinishForm isOpened={isOpened}>
                    <div className="inner">
                        <TextInput type="text" placeholder="Money earned" value={moneyEarned} onChange={handleMoneyChange} ref={inputRef} />
                        <StyledButton onClick={handleFinishJob}>Save</StyledButton>
                    </div>
                </FinishForm>
            )}
        </Wrapper>
    );
};

export default observer(Job);

const Wrapper = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: 30px;
    span {
        display: flex;
        align-items: center;
    }
`;

const StyledButton = styled.button`
    padding: 0 20px;
    background: #fff;
`;

const FinishForm = styled.div`
    transition: .3s;
    max-height: ${({ isOpened }) => isOpened ? '100px' : 0};
    overflow: hidden;
    .inner {
        width: 100%;
        padding: 20px 0 15px;
        display: flex;
        align-items: stretch;
    }
`;
