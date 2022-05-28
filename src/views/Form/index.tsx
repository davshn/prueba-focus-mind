import { useState, useEffect } from "react";

import { Container } from "./styles";
import { FormData, Error } from "./types";
import { validate } from "./validations";

const initialData: FormData = {
    firstName: "",
    lastName: "",
    phone: "",
    mail: "",
    comments: "",
    date: "",
    gender: null
}

export default function Form(): JSX.Element {
    const [input, setInput] = useState<FormData>(initialData);
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

    const handleSubmit = (e:any): void => {
        e.preventDefault();
        if (errors) console.log(errors);
        else {
            console.log(input);
            setInput(initialData);
        }
    }


    function onValidate(value: FormData): void {
        setErrors(validate(value));
    }

    return (
        <Container>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <section>
                    <input type="text" value={input.firstName} placeholder={"Nombre"} onChange={(e) => hadleInputChange("firstName", e.target.value)}></input>
                    {errors?.firstName && <span>{errors.firstName}</span>}
                </section>
                <section>
                    <input type="text" value={input.lastName} placeholder={"Apellido"} onChange={(e) => hadleInputChange("lastName", e.target.value)}></input>
                    {errors?.lastName && <span>{errors.lastName}</span>}
                </section>
                <input type="date" value={input.date} placeholder={"Fecha Nacimiento"} onChange={(e) => hadleInputChange("date", e.target.value)}></input>
                <section>
                    <input type="tel" value={input.phone as number} placeholder={"Telefono"} onChange={(e) => hadleInputChange("phone", parseInt(e.target.value))}></input>
                    {errors?.phone && <span>{errors.phone}</span>}
                </section>
                <section>
                    <input type="email" value={input.mail} placeholder={"Email"} onChange={(e) => hadleInputChange("mail", e.target.value)}></input>
                    {errors?.mail && <span>{errors.mail}</span>}
                </section>
                <input type="text" value={input.comments} placeholder={"Comentarios"} onChange={(e) => hadleInputChange("comments", e.target.value)}></input>
                <input type="submit" />
                <input type="reset" value="Cancel" onClick={() => setInput(initialData)} />
            </form>
        </Container>
    )
}