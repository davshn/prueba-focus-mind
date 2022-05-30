import styled from "styled-components";
import { bgColor, ButtonsColor, TextColor, InputText } from "../../constants/theme";

export const BlackScreen = styled.aside`     
    width:100%;
    height:100%;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(5px) saturate(180%);
    position:fixed;
    display:flex;
    top:0;
    left:0;
    justify-content:center;
    align-items:center;
`;
export const ModalCont = styled.div`    
    background:${bgColor};
    width:20rem;
    border-radius: 12px;
    padding:0.5rem;
`;
export const CloseButton = styled.button`     
    float: right;
    background:${ButtonsColor};
    border-radius: 50%;
    color:${TextColor};
    border-color:#3F3524 solid;

    @media (min-width: 992px) {
        cursor: pointer;
        &:hover {
            background:${InputText};
            color:#fff;
            transition:0.5s;
        }
     }
`;

export const Accept = styled.button`    
    border-radius: 15px;
    background: ${ButtonsColor};
    color: ${TextColor};
    border:none;
    display:block;
    margin:1rem auto;

    @media (min-width: 992px) {
        cursor: pointer;
        &:hover {
            background:${InputText};
            color:#fff;
            transition:0.5s;
        }
     }
`;

export const Text = styled.span`  
    color:#afb2b7;
`;
