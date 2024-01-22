# Employee Management System

Este projeto é um Sistema Simples de Gerenciamento de Funcionários que permite aos usuários cadastrar, visualizar, atualizar e excluir registros de funcionários. Ele é construído utilizando HTML, CSS e JavaScript para o frontend, e Node.js com Express para o backend. O PostgreSQL é utilizado como o banco de dados para armazenar as informações dos funcionários
## Recursos

- **Cadastrar Funcionário:** Usuários podem adicionar novos funcionários ao sistema fornecendo nome, cargo e CPF.

- **Visualizar Funcionários:** Exibe uma tabela com a lista de todos os funcionários, incluindo seu ID, nome e cargo.

- **Atualizar Funcionário:** Busque um funcionário por ID, visualize seus detalhes e atualize seu nome, cargo ou CPF.
  
- **Deletar Funcionário:** Busque um funcionário por ID e exclua seu registro do sistema.

## Como executar

1. Clone o repositório em sua máquina local.
2. Instale as dependências necessárias utilizando 'npm install'.
3. Configure o banco de dados PostgreSQL e atualize os detalhes de conexão no arquivo 'config.js'.
4. Acesse a pasta `server/` utilizando 'cd server'
5. Inicie o servidor utilizando 'node server.js'.
6. Abra o aplicativo em seu navegador da web.

## Dependências

- Node.js
- Express
- PostgreSQL

## Estrutura do Projeto

- `src/`
  - `scripts/`:  Arquivos JavaScript para o frontend.
  - `styles/`: Folhas de estilo em CSS.
  - `view/`: Arquivos HTML e JavaScript relacionados à interface do usuário.
  - `controllers/`: Controladores backend para diferentes ações.
  - `config.js`: Configuração do banco de dados.
