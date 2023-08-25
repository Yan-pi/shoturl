
import styled from 'styled-components'

const StyledImput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Cor de fundo do tema escuro */
  color: #fff; /* Cor do texto no tema escuro */
`;

const ImputBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333; /* Cor de fundo do tema escuro */
  color: #fff; /* Cor do texto no tema escuro */
  padding: 20px;
`;


function ImputUrl() {
  return (
    <>
    <StyledImput>
      <div>
        <ImputBox type="text" name="" id="" />
        <button type="submit">submit</button>
      </div>

    </StyledImput>
    </>
  )
}

export default ImputUrl