
**Aplicação depende de api local para funcionamento, checar repositorio:

- [@API(https://github.com/meiraa13/company_management_bff)

Essa aplicação permite a qualquer usuário criar uma empresa no banco de dados, editar, visualizar e excluir.
No formulário de cadastro os campos cnpj, cep e telefone estão tratados para receber suas respectivas formatações 
e o campo cep busca na api externa "viacep" para preencher automaticamente o campo de endereço

## Tecnologias utilizadas

- Typescript
- React com vite
- Less
- Zod
- react-hook-form
- use-mask-input
- react-icons
- react-toastify

Após clonar o repositório para sua maquina rode o comando abaixo para instalar as dependencias do projeto:

```
npm install
```
com as dependencias instaladas rode o seguinte comando e já conseguirá acessar a aplicação no seu servidor local:

```
npm run dev
```

