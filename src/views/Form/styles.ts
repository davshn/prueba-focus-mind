import styled from "styled-components";

export const Container = styled.main`
    background:#000028;
    padding:10%;
    position:fixed;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    @media (min-width: 992px) {
        padding:2%;
    }
`;

export const FormContainer = styled.form`
    width:80%;
    display:flex;
    flex-direction:column;
    gap:3rem;

    @media (min-width: 992px) {
        gap:0;
        display:grid;
        grid-template-columns:1fr 1fr;
    }
`;

export const NoReqInput = styled.input`
    display:none;

    @media (min-width: 992px) {
        display:block;
        width:90%;
        height:1rem;
        border-radius: 25px;
        background: #15161a;
        border:none;
        color:#afb2b7;
        padding:1rem;
        grid-column:1/span 2;
    }
`;

export const RadioContainer = styled.div`
    display:none;

    @media (min-width: 992px) {
        display:block;
    }
`;

export const InputComments = styled.textarea`
    resize: none;
    width:70%;
    height:7rem;
    border-radius: 25px;
    background: #15161a;
    border:none;
    color:#afb2b7;
    padding:1rem;
    @media (min-width: 992px) {
        grid-column:1/span 2;
        width:90%;
        height:3rem;
    }
`;

export const CountriesSelect = styled.select`
    display:none;

    @media (min-width: 992px) {
        display:block;
        width:85%;
        height:3rem;
        border-radius: 25px;
        background: #15161a;
        border:none;
        color:#afb2b7;
        padding:1rem;
    }
`;

export const TextError = styled.span`
    font-size:1rem;
    color:red;
    position:absolute;
    margin-top:1rem;
`;

export const InputForm = styled.input`
    display:block;
    width:70%;
    height:2rem;
    border-radius: 25px;
    background: #15161a;
    border:none;
    color:#afb2b7;
    padding:1rem;

    @media (min-width: 992px) {
        height:1rem;
        width:80%;
    }
`;

export const Text = styled.span`
    color:#afb2b7;
    padding-left:1rem;
`;

export const InputButtons = styled.input`
    width:41%;
    height:3rem;
    border-radius: 25px;
    background: #C38B54;
    color: #fff;
    border:none;
    box-shadow: 4px 4px 9px -4px #3F3524;
    margin:0.5rem auto;
    
    @media (min-width: 992px) {
        cursor: pointer;
        margin-right:3rem;
        &:hover {
            background:#3F3524;
            color:#fff;
            transition:0.5s;
        }
     }
`;

export const ButtonsContainer = styled.section`
     @media (min-width: 992px) {
        width:90%;
        grid-column:1/span 2;
        justify-self:center;
     }
`;