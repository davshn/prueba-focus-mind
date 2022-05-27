import { Link } from "react-router-dom";

export default function Menu(): JSX.Element{

    return (
        <div>
            <Link to={'form'}>
                <button>Formulario</button>
            </Link>
            <Link to={'design'}>
                <button>Diseño</button>
            </Link>
        </div>
    )
}