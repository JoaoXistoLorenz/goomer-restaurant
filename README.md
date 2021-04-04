# front

## Project setup
```
npm install
```

### Run
```
npm run serve
```
### IMPORTANTE
```
    O Front deve rodar após a api, senão acaba operando na porta 8080 e vai ocorrer conflito.
```
#### Sobre

1. O arquivo index.vue refere-se à Lista dos Restaurantes.
2. O arquivo restaurant.vue refere-se à página individual do restaurante.
3. O diretório templates contém o cabeçalho do sistema.
4. O diretório restaurant contém:
    * O componente miniCardRestaurant que representa o card de cada restaurante.
    * O componente timeCard que representa os horários do restaurante.
5. O diretório product contém: 
    * O componente miniCardProduct que refere-se ao card de cada produto.
    * O componente BigCardProduct que refere-se ao card do produto ampliado.
6. Dentro do diretório plugins encontram-se:
    * O arquivo que realiza a importação do vue-bootstrap.
    * O arquivo que realiza as requisições http.



