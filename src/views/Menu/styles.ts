import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
    height: 100%;
    width: 100%;
    position:fixed;
    padding:5%;
    @media (min-width: 992px) {

    }
`;

export const Title = styled.h1`
    font-size:1.5rem;
    text-align:center;
`;

export const Anchor = styled.a`
    font-size:1rem;
    text-decoration:none;
    border: 1px solid #2A5230;
    border-radius: 12px;
    padding:5%;

`;

export const Blue = styled.span`
    color:blue;
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
    margin-bottom:10%;
`;

export const MenuButton = styled.button`
    width: 10rem;
    height: 8rem;
    border: 1px solid #2A5230;
    color: #2A5230;
    border-radius: 12px;
    font-size: 1.5rem;

    @media (min-width: 992px) {
        &:hover{
        transform: scale(1.1);
        background-color: #2A5230;
        color: #fff;
        }
     }
`;