# curso-frontend
#### EBAC
## Commites
Informação de alteração
- após testado todo o codigo
- git add *
- git commit -m "mensagem"
- git push (enviar alterações para o repositório)
- git pull (baixar alterações para o repositório)

## GitFlow
fluxo de Git

### Branchs
são ramificações / versões paralelas

- main / master (vai para produção, quando o projeto é publicado)
- develop (testes)
- DOD (Definition of Done: cumpre os critérios de aceite)
- versionamento 0.2.11 (em desenvolvimento)
- versionamento 1.0.0 (vai para master)


git checkout -b dev (criar uma branch nome dev)
git checkout master (mudar de brach)

### Merge
mescla de branchs
você precisa resolver os conflitos manualmente

git marge main

### Pull Requests
Mescla de branchs no repositório
permite code review
O repositório resolve os conflitos automaticamente

### Configurar o GitFlow
git flow init
git flow feature start {nome-da-feature}
git flow feature finish {nome-da-feature}