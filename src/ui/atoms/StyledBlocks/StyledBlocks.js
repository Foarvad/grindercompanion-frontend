import styled from 'styled-components';


export const Section = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    width: 100%;
    color: #fff;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 40px;
    background: linear-gradient(to right, #0a3e7c, #346cb9);
    padding: 20px;
`;

export const Body = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const TextInput = styled.input`
    height: 30px;
    padding: 15px 0;
    border: 1px solid #fff;
    padding: 0 5px;
    color: #fff;
    font-size: 14px;
`;
