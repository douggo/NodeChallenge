# Crediário Test (back end)

Abaixo estarão informações essenciais para executar o projeto Crediário Test, desenvolvido por Douglas Felipe da Silva como parte do desafio técnico proposto pela entrevista de emprego do Meu Crediário.

Para o desenvolvimento do projeto foram utilizadas as seguintes tecnologias:

1. Node.js (versão 20)
2. PostgreSQL (versão 16)

## Pré-requisitos para desenvolvimento

Para executar o projeto e desenvolver, antes de tudo, será necessário certificar-se de que o seu computador contém as tecnologias necessárias.

### Instalação do Docker

Clique [aqui](https://www.docker.com/get-started/) para ser levado diretamente à página de download do Docker. Não se preocupe, o site irá automaticamente selecionar a versão mais adequada de acordo com o seu Sistema Operacional. Caso necessário, terá também um botão ao lado que levará para a documentação do Docker, para entender o funcionamento da instalação.

Com o Docker instalado e rodando, será necessário agora realizar o pull das imagens do Dockerhub, imagens que forem necessárias para o desenvolvimento e será necessário para a execução do projeto na sua máquina.

### Instalação do PostgreSQL 16

Para isso, abra o terminal do seu editor de código, copie e cole os seguintes comandos:
`docker pull postgres:16`

Este comando irá realizar o download da imagem do PostgreSQL na versão 16 e será armazenada em seu computador. Caso este comando já foi executado anteriormente, passe para a próxima etapa.

### Instalação do Node.js 20

Primeramente realizar a instalação do NVM (Node Version Manager), seguindo os passos descritos neste [link](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

Após a instalação do gerenciador de versões do Node.js, iremos instalar a versão 20 do Node, através do seguinte comando:

`nvm install 20`

A partir disso o gerenciador irá baixar e irá instalar a versão 20, setando-a como a versão padrão utilizada para desenvolvimento no seu computador.

Se o nvm estiver setando outra versão, você pode usar o comando `nvm use 20` para setar a versão correta para este projeto.

## Para subir o projeto sem usar o docker-compose.yml

Com os pré-requisitos realizados, precisaremos iniciar o container do PostgreSQL, para que possamos interagir com o sistema e processar o desafio proposto.

Para isso, execute o seguinte comando no terminal:

```bash
#! Comando para rodar a imagem do PostgreSQL e criar um container
docker run -d \
  --name crediario_postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=crediario \
  -p 5432:5432 \
  postgres:16
```

Finalizada a inicialização do container, podemos agora prosseguir com a instalação das dependências necessárias do Node.js e a execução do projeto propriamente dito. Assim sendo, ainda com o terminal aberto, execute os seguintes comandos:

```bash
#! Instalar as dependências do Node e armazená-las no node_modules
npm install
#! Iniciar o projeto back end
npm run
```

Ao finalizar a execução dos comandos acima, teremos o sistema rodando localmente pronto para uso sem a utilização do docker-compose.yml.

## Para subir o projeto com o docker-compose.yml

Seção será desenvolvida assim que o desenvolvimento do back end for concluído, pois o docker-compose é indicado para o gerenciamento de múltiplos containers, sendo no caso um container contendo a aplicação do crediário e outro container com o banco de dados rodando.

## Informações adicionais

A partir de agora você pode utilizar um utilitário para enviar uma requisição POST para a URL `http://localhost:3000/bootup` informando no body o JSON presente no arquivo dentro deste projeto. Após a finalização do processamento do endpoint, será retornando um 200 contendo um body com o mês onde o usuário do json teve o maior valor em aberto e o valor correspondente.

A partir disso você poderá também verificar todos os dados disponíveis no banco de dados, como:

1. Cliente
2. Contratos
3. Parcelas dos Contratos

Para tal, abrir um terminal e executar os seguintes comando:

```bash
#! Abrir o container com o banco de dados
docker exec -it crediario_postgres bash
#! Entrar no banco através do pSQL
psql -U usuário -d crediario
```

Com isso você estará no banco do crediário, podendo realizar os SELECTS.
