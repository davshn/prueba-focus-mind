import { FormData, Error } from "./types";

export function validateFirstName(input: string):string | undefined{
    if (!input) return "Nombre requerido";
    if (!(/^[a-z ,.'-]+$/i).test(input)) return "El nombre solo puede contener letras";
    if (input.length < 3) return "Nombre demasiado corto";
}

export function validateLastName(input: string): string | undefined {
    if (!input) return "Apellido requerido";
    if (!(/^[a-z ,.'-]+$/i).test(input)) return "El apellido solo puede contener letras";
    if (input.length < 3) return "Apellido demasiado corto";
}

export function validateMail(input: string): string | undefined {
    if (!input) return "Email requerido";
    if (!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i).test(input)) return "No es un Email valido";
}

export function validatePhone(input: number|string): string | undefined {
    if (!input) return "Telefono requerido";
    if (!(/^\d{10}$/i).test(input.toString())) return "El telefono debe tener 10 numeros";
}

export function validate(input: FormData): Error | null {
    let errors: Error = {} as Error;
    if (validateFirstName(input.firstName)) errors.firstName = validateFirstName(input.firstName)!;
    if (validateLastName(input.lastName)) errors.lastName = validateLastName(input.lastName)!;
    if (validateMail(input.mail)) errors.mail = validateMail(input.mail)!;
    if (validatePhone(input.phone)) errors.phone = validatePhone(input.phone)!;
    if (Object.keys(errors).length === 0) return null;
    else return errors;
}