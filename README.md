### Tecnologias usadas
1. Fastify https://fastify.dev/ => Framework para criar a API
2. Typescript => A linguaguem de programação
3. Node => Plataforma que executa o Typescript/Javascript

### Dependencias

1. Instalar o **node** (ferramenta que permite executar código js/ts): https://nodejs.org/pt
2. Instalar o **postman** (ferramenta top para testar os endpoints da API): https://www.postman.com/
3. Instalar o **yarn** (ferramenta para gerenciar os pacotes do node) : https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable

---

### Clonando o projeto
1. Abra o terminal e execute o seguinte código `git clone https://github.com/lucasdonato/api-farmacia.git`
2. Execute `cd api-farmacia` (comando que vai entrar dentro da pasta do projeto)
3. Execute `yarn install` (comando que vai instalar todas as depencias necessárias para rodar o projeto)

---

### Como executar o projeto
1. Dito que estamos dentro da pasta **api-farmacia** execute o comando `yarn start:dev` esse comando vai colocar a API no ar/online/disponível

---

### Como testar?
Existem várias maneiras de testar uma API, mas o POSTMAN é uma das ferramentas que mais uso para testar API, então:
1. Abra o **POSTMAN**
2. Na barra de URL do postman digite: `http://localhost:8080/remedios`

Esse comando deve retornar a listagem de remedios.

---

### Endpoints
Veja os endpoints que eu criei:

1. http://localhost:8080/remedios vai listar **todos os remedios**
2. http://localhost:8080/remedios/1000 vai listar apenas o remedio que tem o **id = 1000**
3. http://localhost:8080/remedios/pesquisar?nome=Ibuprofeno vai listar apenas os remedios que tem o **nome = Ibuprofreno**