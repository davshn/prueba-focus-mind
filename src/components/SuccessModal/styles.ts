import styled from "styled-components";

export const BlackScreen = styled.aside`     
    width:100%;
    height:100%;
    background-color: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(5px) saturate(180%);
    position:fixed;
    display:flex;
    top:0;
    left:0;
    justify-content:center;
    align-items:center;
`;
export const ModalCont = styled.div`    
    background:#F8F5F0;
    width:20rem;
    border-radius: 12px;
    padding:0.5rem;
`;
export const CloseButton = styled.button`     
    float: right;
    background:#423116;
    border-radius: 50%;
    color:#F8F5F0;
    border-color:#3F3524 solid;
    
    @media (min-width: 992px) {
        cursor: pointer;
        &:hover {
            background:#F8F5F0;
            color:#423116;
            transition:0.5s;
        }
     }
`;
export const Accept = styled.button`    
    border-radius: 25px;
    background: #dabeb0;
    color: #3F3524;
    border:none;
    box-shadow: 4px 4px 9px -4px #3F3524;
    display:block;
    margin:1rem auto;
    
    @media (min-width: 992px) {
        cursor: pointer;
        &:hover {
            background:#3F3524;
            color:#dabeb0;
            transition:0.5s;
        }
     }
`;

export const Text = styled.span`  

`;
