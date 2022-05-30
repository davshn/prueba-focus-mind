import styled from "styled-components";
import { Link } from "react-router-dom";
import { bgColor, ButtonsColor, InputText } from "../../constants/theme";

export const Container = styled.main`
    height: 100%;
    width: 100%;
    position:fixed;
    background:${bgColor};
    padding-top:10%;

    @media (min-width: 992px) {
    padding-top:2%;
    }
`;

export const Title = styled.h1`
    font-size:1.5rem;
    text-align:center;
    color:#fff;
`;

export const Anchor = styled.a`
    width: 10rem;
    height: 11rem;
    border: 1px solid ${ButtonsColor};
    color: ${InputText};
    border-radius: 12px;
    font-size: 1.5rem;
    backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    text-decoration:none;
    display: flex;
    align-items:center;
    justify-content:center;
    margin: 10%;

    @media (min-width: 992px) {
        &:hover{
        transform: scale(1.1);
        background-color: ${ButtonsColor};
        color: #fff;
        }
     }

`;

export const LinkStyled = styled(Link)`
    margin: 10%;
`;

export const ButtonsContainer = styled.div`
    width:100%;
    height:60%;
    align-items:center;
    display:flex;
    flex-direction:column;
    margin-top:20%;

    @media (min-width: 992px) {  
        margin:0;
        flex-direction:row;
        justify-content:center;
    }
`;

export const MenuButton = styled.button`
    width: 10rem;
    height: 11rem;
    border: 1px solid ${ButtonsColor};
    color: ${InputText};
    border-radius: 12px;
    font-size: 1.5rem;
    backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);

    @media (min-width: 992px) {
        &:hover{
        transform: scale(1.1);
        background-color: ${ButtonsColor};
        color: #fff;
        }
     }
`;