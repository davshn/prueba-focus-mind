export type FormData = {
    firstName: string;
    lastName: string;
    phone: number | string;
    mail: string;
    comments: string;
    date: string;
    country: string;
    gender: "male" | "female" | "other" | null;
};

export type Error = {
    firstName: string;
    lastName: string;
    phone: string;
    mail: string;
};