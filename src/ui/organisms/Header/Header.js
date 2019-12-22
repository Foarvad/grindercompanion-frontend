import React from 'react';
import styled from 'styled-components';

import { ButtonWrapper } from '@ui';

import { ReactComponent as LogoSVG } from '@assets/img/logo.svg';
import { ReactComponent as FacebookSVG } from '@assets/img/facebook.svg';
import { ReactComponent as TwitterSVG } from '@assets/img/twitter.svg';
import { ReactComponent as InstagramSVG } from '@assets/img/instagram.svg';
import { ReactComponent as TelegramSVG } from '@assets/img/telegram.svg';


const Header = () => {
    return (
        <Wrapper>
            <Logo>
                <LogoSVG />
            </Logo>
            <Socials>
                <a href="#facebook"><FacebookSVG /></a>
                <a href="#twitter"><TwitterSVG /></a>
                <a href="#instagram"><InstagramSVG /></a>
                <a href="#telegram"><TelegramSVG /></a>
            </Socials>
            <Separator />
            <Links>
                <a href="#start">Start an STO</a>
                <a href="#faq">FAQ</a>
                <a href="#contact">Contact</a>
                <a href="#contact">Navigation</a>
            </Links>
            <SignIn>
                <ButtonWrapper inverted>
                    <a className="link-button">Sign in</a>
                </ButtonWrapper>
            </SignIn>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    height: 50px;
    max-width: 1340px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    margin-right: 80px;
    width: 82px;
    svg {
        width: 100%;
    }
`;

const Socials = styled.div`
    height: 20px;
    width: 140px;
    display: flex;
    justify-content: space-between;
    a {
      display: block;
    }
`;

const Separator = styled.div`
    height: 30px;
    width: 2px;
    background: #ffffff;
    opacity: 0.2;
    margin: 0 40px;
`;

const Links = styled.div`
    width: 360px;
    display: flex;
    justify-content: space-between;
    a {
        font-size: 16px;
        font-weight: 400;
        color: white;
        line-height: 20px;
        transition: .3s;
        &:hover {
            opacity: 0.6;
        }
    }
`;

const SignIn = styled.div`
    width: 100px;
    height: 100%;
    margin-left: auto;
    a {
        background: #5466ef;
        line-height: 50px;
        color:  #fff;
        border: 0;
        font-size: 16px;
    }
`;
