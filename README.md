# Adopt Marlis

O Adopt Marlis é uma plataforma web criada para aproximar gatos que precisam de um novo lar de pessoas interessadas em adotá-los. O projeto busca ser uma alternativa ao abandono de animais, facilitando o contato entre quem deseja doar um gato e quem procura um animal de estimação.

## O que o projeto faz

- Permite cadastrar pessoas interessadas em adotar gatos.
- Permite cadastrar gatos disponíveis para doação.
- Exibe uma lista de gatos cadastrados para facilitar a busca por um animal.
- Apresenta informações individuais de cada gato.
- Permite editar os cadastros de gatos e de pessoas.
- Oferece uma área de login para acesso ao sistema.

## Público-alvo

O sistema é destinado a:

- Pessoas que desejam adotar um gato.
- Pessoas ou responsáveis que precisam encontrar um novo lar para um gato.

## Objetivo

Conectar doadores e adotantes de forma simples, contribuindo para a adoção responsável e para a redução do abandono de gatos nas ruas.

## Rotas da aplicação

| Rota | Descrição |
| --- | --- |
| `/` | Página inicial com o objetivo do projeto e acesso às principais áreas do sistema. |
| `/gatos` | Lista de gatos cadastrados e acesso ao cadastro de um novo gato para doação. |
| `/gato/cadastro` | Formulário para cadastrar um gato disponível para doação. |
| `/gato/[id]` | Página com os dados de um gato específico. |
| `/gato/[id]/editar` | Formulário para editar os dados de um gato cadastrado. |
| `/pessoas` | Área de pessoas interessadas em adotar e visualização dos gatos disponíveis. |
| `/pessoa/cadastro` | Formulário para cadastrar uma pessoa interessada em adotar. |
| `/pessoa/[id]/editar` | Formulário para editar os dados de uma pessoa. |
| `/pessoas/login` | Página de login para acesso ao sistema. |

Nas rotas dinâmicas, `[id]` deve ser substituído pelo identificador do gato ou da pessoa que será consultado ou editado.

