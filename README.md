# Teste Automatizado com Cypress e Cucumber

Este projeto de teste automatizado utiliza o Cypress como ferramenta de automação e adota o plugin Cucumber para melhorar a legibilidade e estrutura dos cenários de teste. O objetivo é testar diferentes funcionalidades de uma [aplicação web de comércio eletrônico](http://www.automationpractice.pl/).

## Uso do Cucumber Preprocessor

O **Cucumber Preprocessor** é um plugin que permite escrever os cenários de teste no formato Gherkin e vinculá-los aos passos de teste em JavaScript. Isso facilita a leitura e compreensão dos cenários por não-técnicos e torna os testes mais organizados e reutilizáveis.

Os arquivos de teste estão escritos em Gherkin, como mostrado abaixo:

```gherkin
Feature: Product search filters

Scenario: Show products on screen
    Given the user is on the homepage
    When the user clicks on the woman option in the menu
    Then the webpage shows all the products

Scenario: Filter by Top Category
    Given the user is on products page
    When the user clicks on the top option in the category filter
    Then the webpage only shows products from the top category

Scenario: Filter by S Size
    Given the user is on products page
    When the user clicks on the S option in the size filter
    Then the webpage only shows products from the S Size

Scenario: Filter by Blue Color
    Given the user is on products page
    When the user clicks on the Blue option in the Color filter
    Then the webpage only shows blue color products
```

# Como Criar Novos Testes
O padrão do [Cypress Cucumber Preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) é organizar os arquivos de teste da seguinte forma:

`Crie um novo arquivo .feature`: **Na pasta integration, crie um novo arquivo com a extensão .feature para definir um novo cenário de teste**. Esse arquivo terá os cenários descritos usando o formato Gherkin.

`Organize em pastas`: **Para cada arquivo .feature, crie uma pasta com o mesmo nome (sem a extensão) e coloque o arquivo dentro dela**. Isso ajuda a manter os testes organizados e facilita a identificação de cenários relacionados.

Exemplo:
```
cypress/
  ...
  integration/
    search_products.feature
    search_products/
      search_products.js
```

# Links úteis:
- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress Cucumber Preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
- [Faker.js](https://fakerjs.dev/)

Sinta-se à vontade para explorar os links acima para obter mais informações sobre as ferramentas utilizadas neste projeto.

## Configuração e Execução

Antes de executar os testes, certifique-se de ter o Node.js instalado em seu ambiente. Em seguida, siga os passos abaixo:

1. Clone o repositório para o seu computador.
2. Navegue até o diretório raiz do projeto.
3. Instale as dependências executando o comando `npm install`.
4. Execute os testes com o comando `npx cypress run` para rodar os testes em modo headless (sem interface gráfica) ou `npx cypress open` para abrir a interface do Cypress e selecionar os testes manualmente.