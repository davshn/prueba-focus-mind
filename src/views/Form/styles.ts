import styled from "styled-components";

export const Container = styled.main`
    background:#6063A0;
    padding:10%;
    position:fixed;
    width:100%;
    height:100%;
`;

export const FormContainer = styled.form`
    display:grid;
    grid-template-columns:1fr;
    width:70%
`;

export const NoReqInput = styled.input`
    display:none;

    @media (min-width: 992px) {
        display:block;
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
`;

export const CountriesSelect = styled.select`
    display:none;

    @media (min-width: 992px) {
        display:block;
    }
`;