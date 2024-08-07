import styled from 'styled-components';

const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
//   max-width: 500px;
  padding: 16px;

  .profileArea {
    display: none;
    @media(min-width: 860px){
      display:block;
    }
  }
  
  /* CONDIÇÃO PARA TAMANHO DA TELA */
  /* 1fr É UMA FRAÇÃO DO QUE TEM DISPONÍVEL NA TELA */
  @media(min-width: 860px){
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default MainGrid;