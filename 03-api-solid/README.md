## App

Gympass style app.

## RF (Requisitos funcionais)

- [ ] Deve ser possivel se cadastrar;
- [ ] Deve ser possivel se autenticar;
- [ ] Deve ser possivel obter um perfil de um usuário logado;
- [ ] Deve ser possivel obter o numero de check-ins realizados pelo usuário logado;
- [ ] Deve ser possivel o usuário obter seu histórico de check-ins;
- [ ] Deve ser possivel o usuário buscar academias proximas;
- [ ] Deve ser possivel o usuario buscar academias pelo nome;
- [ ] Deve ser possivel o usuário realizar check-in em uma academia;
- [ ] Deve ser possivel validar o check-in de um usuário;
- [ ] Deve ser possivel cadastrar uma academia

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um email duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto da academia;
- [ ] O check-in só pode ser validado em até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário deve estar criptografada.
- [ ] Os dados da aplicação precisam estar persistindos em um banco PostgreSQL
- [ ] Todas as listas de dados precisam estar paginadas.
- [ ] O usuário deve ser identificado por um JWT.