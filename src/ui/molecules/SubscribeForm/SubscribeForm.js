import React from 'react';
import styled from 'styled-components';

import { GradientButtonWrapper } from '@ui';

import { ReactComponent as TelegramSVG } from '@assets/img/telegram-online.svg';
import { ReactComponent as ChattingSVG } from '@assets/img/chatting.svg';


const SubscribeForm = () => {
    return (
        <Wrapper>
            <Subscribe>
                <input type="text" placeholder="Sign up for new project updates" />
                <GradientButtonWrapper>
                    <button><span>Subscribe</span></button>
                </GradientButtonWrapper>
            </Subscribe>
            <Telegram>
                <a href="https://t.me/sto1stx">
                    <TelegramSVG />
                </a>
                <TextWrapper>
                    <span className="join">Join our telegram</span>
                    <Online>
                        <ChattingSVG />
                        <span className="investors">5 investors</span>
                        <span className="chatting">chatting now!</span>
                    </Online>
                </TextWrapper>
            </Telegram>
        </Wrapper>
    );
};

export default SubscribeForm;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    background: #f2f5f9;
    padding: 50px 48px;
    border-radius: 8px;
`;

const Subscribe = styled.div`
    display: flex;
    width: 607px;
    input {
        margin-right: 20px;
        height: 60px;
        line-height: 20px;
        border-radius: 8px;
        padding: 20px;
        font-size: 16px;
        color: #4a4b5c;
        width: 100%;
        font-family: inherit;
        position: relative;
        appearance: none;
        display: block;
        filter: none;
        border: solid 2px #e5ebf3;
        background-color: #fff;
        &::placeholder {
            color: #a4a9be;
        }
    }
    button {
        padding: 0 30px;
        height: 60px;
    }
`;

const Telegram = styled.div`
    display: flex;
    align-items: center;
    margin-left: 40px;
    padding-left: 40px;
    border-left: 2px solid #e5ebf3;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    .join {
        font-size: 16px;
        line-height: 1.25;
        color: #4a4b5c;
    }
`;

const Online = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    span {
        font-size: 12px;
        line-height: 22px;
        white-space: nowrap;
    }
    .investors {
        font-weight: 500;
        color: #41b654;
        padding: 0 3px 0 7px;
        line-height: 22px;
    }
    .chatting {
        color: #a4a9be;
        padding-left: 3px;
    }
`;
