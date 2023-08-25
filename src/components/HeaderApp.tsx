import styled from 'styled-components'

// Definindo estilos do componente
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333; /* Cor de fundo do tema escuro */
  color: #fff; /* Cor do texto no tema escuro */
  padding: 20px;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const HeaderSubtitle = styled.p`
  margin: 0;
  font-size: 16px;
  opacity: 0.7;
`;

function HeaderApp() {
  return (
    <HeaderContainer>
      <HeaderTitle>Shot URL</HeaderTitle>
      <HeaderSubtitle> Free URL Shortner </HeaderSubtitle>
    </HeaderContainer>
  );
}

export default HeaderApp;