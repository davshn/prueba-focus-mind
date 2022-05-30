import { BlackScreen, ModalCont, CloseButton, Accept,Text } from "./styles"

export default function SuccessModal({ onClose }: any) {

    return (
        <BlackScreen>
            <ModalCont>
                <CloseButton onClick={onClose}>X</CloseButton>
                <Text>Formulario enviado con exito</Text>
                <Accept onClick={onClose}>Aceptar</Accept>
            </ModalCont>
        </BlackScreen>
    )
}





  
