import { BlackScreen, ModalCont, CloseButton, Accept, Text } from "./styles"

export default function ErrorModal({ onClose, errors }: any) {
    return (
        <BlackScreen>
            <ModalCont>
                <CloseButton onClick={onClose}>X</CloseButton>
                {errors.firstName && <div><Text>{errors.firstName}</Text></div>}
                {errors.lastName && <div><Text>{errors.lastName}</Text></div>}
                {errors.phone && <div><Text>{errors.phone}</Text></div>}
                {errors.mail && <div><Text>{errors.mail}</Text></div>}
                <Accept onClick={onClose}>Aceptar</Accept>
            </ModalCont>
        </BlackScreen>
    )
}


  
