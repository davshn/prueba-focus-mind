import { useState, useEffect } from "react";

import ErrorModal from "../../components/ErrorModal";
import SuccessModal from "../../components/SuccessModal";
import {
    Container,
    FormContainer,
    NoReqInput,
    InputComments,
    RadioContainer,
    CountriesSelect,
    TextError,
    InputForm,
    InputButtons,
    ButtonsContainer,
    Text
} from "./styles";
import { FormData, Error } from "./types";
import { validate } from "./validations";

const initialData: FormData = {
    firstName: "",
    lastName: "",
    phone: "",
    mail: "",
    comments: "",
    date: "",
    country: "",
    gender: null
}

const countries = ["Colombia", "Brasil", "Ecuador", "Argentina", "Chile", "Peru", "Venezuela"];

export default function Form(): JSX.Element {
    const [input, setInput] = useState<FormData>(initialData);
    const [isError, setIsError] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [errors, setErrors] = useState<Error | null>();

    useEffect(() => onValidate(input), [input]);

    function hadleInputChange(name: string, value: string | number): void {
        if (!(name === "phone")) {
            setInput({ ...input, [name]: value });
            return;
        }

        else if (!isNaN(value as number)) {
            setInput({ ...input, [name]: value });
        }
        else setInput({ ...input, [name]: "" });
    }

    const handleSubmit = (e: any): void => {
        e.preventDefault();
        if (errors) setIsError(true);
        else {
            console.log(input);
            setIsSuccess(true);
            setInput(initialData);
        }
    }

    function onValidate(value: FormData): void {
        setErrors(validate(value));
    }

    const closeErrorModal = (): void => setIsError(false);
    const closeSuccessModal = (): void => setIsSuccess(false);
    return (
        <Container>
            <FormContainer onSubmit={(e) => handleSubmit(e)}>
                <section>
                    <InputForm required type="text" value={input.firstName} placeholder={"Nombre*"} onChange={(e) => hadleInputChange("firstName", e.target.value)} />
                    {errors?.firstName && <TextError>{errors.firstName}</TextError>}
                </section>
                <section>
                    <InputForm required type="text" value={input.lastName} placeholder={"Apellido*"} onChange={(e) => hadleInputChange("lastName", e.target.value)} />
                    {errors?.lastName && <TextError>{errors.lastName}</TextError>}
                </section>
                <NoReqInput type="date" value={input.date} placeholder={"Fecha Nacimiento"} onChange={(e) => hadleInputChange("date", e.target.value)} />
                <RadioContainer>
                    <Text>Genero con el que te identificas</Text>
                    <section>
                        <input type="radio" name="gender" value="Hombre" checked={input.gender === "male"} onChange={() => hadleInputChange("gender", "male")} />
                        <Text>Hombre</Text>
                    </section>
                    <section>
                        <input type="radio" name="gender" value="Mujer" checked={input.gender === "female"} onChange={() => hadleInputChange("gender", "female")} />
                        <Text>Mujer</Text>
                    </section>
                    <section>
                        <input type="radio" name="gender" value="Otro" checked={input.gender === "other"} onChange={() => hadleInputChange("gender", "other")} />
                        <Text>Otro</Text>
                    </section>
                </RadioContainer>
                <CountriesSelect name="country" onChange={(e) => hadleInputChange("country", e.target.value)}>
                    <option value="" disabled selected hidden>Pais</option>
                    {countries.map((country) => <option key={country} value={country} >{country}</option>)}
                </CountriesSelect>
                <section>
                    <InputForm required type="tel" value={input.phone as number} placeholder={"Telefono*"} onChange={(e) => hadleInputChange("phone", parseInt(e.target.value))}/>
                    {errors?.phone && <TextError>{errors.phone}</TextError>}
                </section>
                <section>
                    <InputForm required type="email" value={input.mail} placeholder={"Email*"} onChange={(e) => hadleInputChange("mail", e.target.value)} />
                    {errors?.mail && <TextError>{errors.mail}</TextError>}
                </section>
                    <InputComments value={input.comments} placeholder={"Comentarios"} onChange={(e) => hadleInputChange("comments", e.target.value)} />
                <ButtonsContainer>
                    <InputButtons type="submit" />
                    <InputButtons type="reset" value="Cancel" onClick={() => setInput(initialData)} />
                </ButtonsContainer>
            </FormContainer>
            {isError && <ErrorModal onClose={closeErrorModal} errors={errors} />}
            {isSuccess && <SuccessModal onClose={closeSuccessModal} />}
        </Container>
    )
}