import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(properties) {
  return (
    <Box>
      {/* 
        - {} NO react MOSTRA O QUE O react DEVE IDENTIFICAR COMO js PARA INTERPRETAR 
      */}
      <img src={`https://github.com/${properties.githubUser}.png`} style={{ borderRadius: '8px' }} />

      <hr /> {/* QUEBRA DE LINHA ABAIXO DA FOTO DO PERFIL */}

      <p>
        <a className="boxLink" target="_blank" href={`https://github.com/${properties.githubUser}`}>
          @{properties.githubUser}
        </a>
      </p>

      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
};

export default function Home() {

  /*
  - HOOKS
  - GANCHOS DO REACT PARA FAZER ALTERAÇÕES
  */
  const [comunidades, setComunidades] = React.useState([{
    id: '0',
    title: 'Alura',
    image: 'https://scontent.fpoo3-1.fna.fbcdn.net/v/t1.6435-9/180044378_3910580335723181_2617999513361951911_n.png?_nc_cat=108&ccb=1-3&_nc_sid=973b4a&_nc_ohc=rXcctEpL1Q4AX_gvN_e&_nc_ht=scontent.fpoo3-1.fna&oh=406a7d84623318d1989e9cfd95b876ce&oe=60F53DAB'
  }]);

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
            <h1 className='smallTitle'> Bem vind*! </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className='subTitle'>O que você deseja fazer?</h2>

            {/*
            - onSubmit VAI INTERCEPTAR OS DADOS DO FORMULÁRIO EM ALGUM MOMENTO DA RENDERIZAÇÃO DA PÁGINA
            - 
            */}
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault(); // PREVINE O COMPORTAMENTO PADRÃO DO FOMULÁRIO

              /*
              - dadosForm CAPTURA OS DADOS DO FORMULÁRIO E RETORNA O ALVO DO EVENTO
              - O EVENTO É A SUBIMISSÃO DOS DADOS DO FORMULÁRIO
              - INTERCEPTANDO O EVENTO, E CAPTURANDO OS DADOS NO FormData, É POSSÍVEL PASSÁ-LO COMO ARGUMENTO
              */
              const dadosDoForm = new FormData(e.target);

              /*
              - comunidadesAtualizadas É IGUAL A COMUNIDADES + A NOVA QUE IRÁ SER ADICIONADA
              - O ARGUMENTO ... NO ARRAY INDICA QUE OCORRERÁ UM spread
              - spread PERMITE QUE UM OBJETO ITERÁVEL SEJA EXPANDIDO PARA SER USADO ONDE NOVOS ARGUMENTOS SAO ESPERADOS
              - NESSE CASO, comunidades SERÁ INCREMENTADO
              - ANTIGO ARRAY + ARRAY ATUALIZADO
              */

              const comunidade = {

                id: new Date().toISOString,
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image')
              }
              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);

            }}>
              <div>
                <input
                  name='title'
                  placeholder="Qual o nome da sua comunidade?"
                  aria-label="Qual o nome da sua comunidade?"
                />
              </div>

              <div>
                <input
                  name='image'
                  placeholder="Digite a URL da foto de capa da sua comunidade"
                  aria-label="Digite a URL da foto de capa da sua comunidade"
                />
              </div>

              <button> Criar comunidade </button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>

          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'> Comunidades </h2>
            {/* 
              - O .map VAI MAPEAR O ITEM ATUAL E RETORNAR O QUE ESTIVER PASSADO COMO ARGUMENTO DENTRO DA CONDIÇÃO DE RETURN
              - NO CASO, pessoasFavoritas SE TRATA DE UM ARRAY DE 6 ITEMS
              - ELE MAPEARÁ ESSA ESTRUTURA DA FORMA COMO ELA FOI CONSTRUÍDA
              - SE FOR UM ARRAY DE 5 ITENS, MAPEARÁ 5 ITENS
            */}
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    {/* (itemAtual) => { return (<li>{itemAtual}</li>) } */}
                    < a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'> Pessoas da Comunidade ({pessoasFavoritas.length}) </h2>
            {/* 
              - O .map VAI MAPEAR O ITEM ATUAL E RETORNAR O QUE ESTIVER PASSADO COMO ARGUMENTO DENTRO DA CONDIÇÃO DE RETURN
              - NO CASO, pessoasFavoritas SE TRATA DE UM ARRAY DE 6 ITEMS
              - ELE MAPEARÁ ESSA ESTRUTURA DA FORMA COMO ELA FOI CONSTRUÍDA
              - SE FOR UM ARRAY DE 5 ITENS, MAPEARÁ 5 ITENS
            */}
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
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