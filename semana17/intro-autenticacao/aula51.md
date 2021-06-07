## Aula 51 — Introdução a Autenticação

### Exercicio 1

a. Definitivamente, como string podemos incluir letras, o que aumenta a segurança.

####

b.

```typescript
export function generateId(): string {
    return v4()
}
```

### Exercicio 2

a. Recebe um id, email e password e então insere o usuario na tabela.

####

b.

```mysql
CREATE TABLE Users_51
(
    id       VARCHAR(255) NOT NULL PRIMARY KEY,
    email    VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```

### Exercicio 3

a. Garante que o token gerado será tipado como string. 
O token gerado pelo JWT contem numeros e letras.
