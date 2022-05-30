import { MenuButton, Container, LinkStyled, Title, ButtonsContainer, Anchor } from "./styles";

export default function Menu(): JSX.Element {

    return (
        <Container>
            <Title>Prueba tecnica Focus Mind</Title>
            <ButtonsContainer>
                <LinkStyled to={'form'}>
                    <MenuButton>Formulario</MenuButton>
                </LinkStyled>
                <LinkStyled to={'design'}>
                    <MenuButton>Diseño</MenuButton>
                </LinkStyled>
                <Anchor href="https://github.com/davshn/prueba-focus-mind">Repositorio</Anchor>
            </ButtonsContainer>
           
        </Container>
    )
}