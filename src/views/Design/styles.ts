import styled from "styled-components";
import backgroundImage from "../../assets/header.png";

export const Container = styled.main`
    height: 100vh;
    width: 100%;
    background:url(${backgroundImage});
    background-size: cover;

    @media (min-width: 992px) {
        background:#000028;
     }
`;

export const Title = styled.p`
    margin:0 11%;
    padding-top:58%;
    color:#fff;
    font-size:38px;
    text-align: justify;
    font-family:'Roboto';
    font-weight: 800;
    width:65%;

    @media (min-width: 992px) {
        margin:0;
        font-size:53px;
        padding-left:14%;
        padding-top:5%;
        width:50%;
    }
`;

export const Text = styled.p`
    margin:0 11%;
    color:#fff;
    font-size:26px;
    width:65%;
    font-family:'Roboto';
    font-weight: 400;
    padding-top:13%;

    @media (min-width: 992px) {
        margin:0;
        font-size:35px;
        font-weight: 600;
        width:45%;
        padding-left:14%;
        padding-top:5%;
    }
`;

export const ButtonGold = styled.button`
    display: flex;
    background:#C38B54;
    color:#fff;
    font-size:18px;
    border-radius:8px;
    padding-block:0.9rem;
    padding-inline:3rem;
    margin: 17% auto;
    font-family:'Roboto';
    font-weight: 400;
    
    @media (min-width: 992px) {
        margin: 3% auto;
        font-weight: 800;
        padding-block:0.5rem;
    }
`;