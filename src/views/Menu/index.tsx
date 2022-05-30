import { MenuButton, Container, LinkStyled, Title, Blue, ButtonsContainer, Anchor } from "./styles";

export default function Menu(): JSX.Element {

    return (
        <Container>
            <Title>Prueba tecnica <Blue>Focus Mind</Blue></Title>
            <Title>Hernan David Figueroa </Title>
            <ButtonsContainer>
                <LinkStyled to={'form'}>
                    <MenuButton>Formulario</MenuButton>
                </LinkStyled>
                <LinkStyled to={'design'}>
                    <MenuButton>Diseño</MenuButton>
                </LinkStyled>
            </ButtonsContainer>
            <Anchor href="https://github.com/davshn/prueba-focus-mind">Repositorio</Anchor>
        </Container>
    )
}