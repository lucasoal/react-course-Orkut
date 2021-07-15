import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(properties) {
  return (
    <Box>
      {/* 
        - {} NO react MOSTRA O QUE O react DEVE IDENTIFICAR COMO js PARA INTERPRETAR 
      */}
      <img src={`https://github.com/${properties.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
};

export default function Home() {

  const githubUser = 'lucasoal';
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'rafaballerini', 'lucasmontano', 'felipefialho', 'marcobrunodev'];

  return (
    // <> É UM COMPONENTE QUE PERMITE COLOCAR NOVAS TAGS html EM UM MESMO return...FUNCIONA COMO UM AGRUPAMENTO
    <>
      <AlurakutMenu />
      {/* 
        - A TELA GERALMENTE É DIVIDIDA EM 3 PARTES
        - ESQUERDA, CENTRO E DIREITA
        - ESSAS 3 divs SÃO PREENCHIDAS COM ELEMENTOS DO css E html...
        - POR ISSO TEMOS UMA BOX DENTRO DE CADA DIV
      */}
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className='smallTitle'>
              Bem vind*!
            </h1>
            <OrkutNostalgicIconSet/>
          </Box>
        </div>


        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <Box>
            <h2 className='smallTitle'>
              Meus Amigos
            </h2>
          </Box>

          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>
            {/* 
              - O .map VAI MAPEAR O ITEM ATUAL E RETORNAR O QUE ESTIVER PASSADO COMO ARGUMENTO DENTRO DA CONDIÇÃO DE RETURN
              - NO CASO, pessoasFavoritas SE TRATA DE UM ARRAY DE 6 ITEMS
              - ELE MAPEARÁ ESSA ESTRUTURA DA FORMA COMO ELA FOI CONSTRUÍDA
              - SE FOR UM ARRAY DE 5 ITENS, MAPEARÁ 5 ITENS
            */}
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    {/* (itemAtual) => { return (<li>{itemAtual}</li>) } */}
                    < a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid >
    </>
  )
};