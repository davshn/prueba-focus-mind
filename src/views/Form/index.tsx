import { useState, useEffect } from "react";

import ErrorModal from "../../components/ErrorModal";
import SuccessModal from "../../components/SuccessModal";
import { Container, FormContainer, NoReqInput, InputComments, RadioContainer, CountriesSelect } from "./styles";
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

const countries = ["Pais", "Colombia", "Brasil", "Ecuador", "Argentina", "Chile", "Peru", "Venezuela"];

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
                    <input required type="text" value={input.firstName} placeholder={"Nombre"} onChange={(e) => hadleInputChange("firstName", e.target.value)} />
                    {errors?.firstName && <span>{errors.firstName}</span>}
                </section>
                <section>
                    <input required type="text" value={input.lastName} placeholder={"Apellido"} onChange={(e) => hadleInputChange("lastName", e.target.value)} />
                    {errors?.lastName && <span>{errors.lastName}</span>}
                </section>
                <NoReqInput type="date" value={input.date} placeholder={"Fecha Nacimiento"} onChange={(e) => hadleInputChange("date", e.target.value)} />
                <RadioContainer>
                    <span>Genero con el que te identificas</span>
                    <section>
                        <input type="radio" name="gender" value="Hombre" checked={input.gender === "male"} onChange={() => hadleInputChange("gender", "male")} />
                        <label>Hombre</label>
                    </section>
                    <section>
                        <input type="radio" name="gender" value="Mujer" checked={input.gender === "female"} onChange={() => hadleInputChange("gender", "female")} />
                        <label>Mujer</label>
                    </section>
                    <section>
                        <input type="radio" name="gender" value="Otro" checked={input.gender === "other"} onChange={() => hadleInputChange("gender", "other")} />
                        <label>Otro</label>
                    </section>
                </RadioContainer>
                <CountriesSelect name="country" onChange={(e) => hadleInputChange("country", e.target.value)}>
                    {countries.map((country) => <option key={country} value={country} >{country}</option>)}
                </CountriesSelect>
                <section>
                    <input required type="tel" value={input.phone as number} placeholder={"Telefono"} onChange={(e) => hadleInputChange("phone", parseInt(e.target.value))}></input>
                    {errors?.phone && <span>{errors.phone}</span>}
                </section>
                <section>
                    <input required type="email" value={input.mail} placeholder={"Email"} onChange={(e) => hadleInputChange("mail", e.target.value)} />
                    {errors?.mail && <span>{errors.mail}</span>}
                </section>
                <section>
                    <InputComments value={input.comments} placeholder={"Comentarios"} onChange={(e) => hadleInputChange("comments", e.target.value)} />
                </section>
                <input type="submit" />
                <input type="reset" value="Cancel" onClick={() => setInput(initialData)} />
            </FormContainer>
            {isError && <ErrorModal onClose={closeErrorModal} errors={errors}/>}
            {isSuccess && <SuccessModal onClose={closeSuccessModal} />}
        </Container>
    )
}