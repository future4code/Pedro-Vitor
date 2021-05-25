### Exercicio 1
~~~sql
ALTER TABLE Actor DROP COLUMN salary;
~~~
####1. Deleta a coluna "salary".
~~~sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
~~~
####2. Muda a coluna "gender" para "sex" com limite de caracteres 6.
~~~sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
~~~
####3. Troca o tipo de gender para VARCHAR(255).
~~~sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~
####4. Troca gender para aceitar strings de até 100 caracteres.

### Exercicio 2
~~~sql
UPDATE Actor
SET name = "Rodrigo Lombardi", birth_date = "1976-10-15"
WHERE id = 3;
~~~
##### 1. Atualiza o nome e a da de nascimento do elemento id 3.
~~~sql
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";
~~~
##### 2. Atualiza o nome da Juliana Paes para upper case.
~~~sql
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";
~~~
##### 2. Atualiza o nome da Juliana Paes para lower case.
~~~sql
UPDATE Actor
SET name = "Ju Paes",
salary = 720000,
birth_date = "1979-06-03",
gender = "male",
hometown = "RJ"
WHERE id = "005";
~~~
##### 3. Atualizando todos os dados da Juliana Paes.
~~~sql
UPDATE Actor
SET eye_color = "Green"
WHERE id = "005";
~~~
##### [1054] Unknown column 'eye_color' in 'field list'
##### 4. Não existe a coluna "eye_color".

### Exercico 3
~~~sql
DELETE FROM Actor
WHERE name = "Rodrigo Lombardi";
~~~
##### 1. Deleta a coluna em que o elemento tem o name "Rodrigo Lombardi".
~~~sql
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;
~~~
##### 2. Deleta os atores com genero "male" e salario maior que 1m.

### EXERCICIO 4
~~~sql
SELECT MAX(salary)
FROM Actor;
~~~
##### 1. Retorna o salario mais alto da table.
~~~sql
SELECT MIN(salary)
FROM Actor
WHERE gender = "female";
~~~
##### 2. Retorna o salario mais baixo do gender female.
~~~sql
SELECT COUNT(*) FROM Actor
WHERE gender = "female";
~~~
##### 3. Retorna a quantidade de atrizes.
~~~sql
SELECT SUM(salary) from Actor;
~~~
##### 4. Retorna a soma de todos os salarios da table.

### Exercicio 5
~~~sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
~~~
##### 1. Retornou a quantia de atores por genero.
~~~sql
SELECT name, id FROM Actor
ORDER BY name DESC;
~~~
##### 2. Retorna name e id dos actores em ordem decrescente.
~~~sql
SELECT * FROM Actor
ORDER BY salary DESC;
~~~
##### 3. Retorna a tabela organizando o maior salario para o menor.
~~~sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
~~~
##### 4. Retorna a tabela com os 3 maiores salarios.
~~~sql
SELECT gender, AVG(salary) FROM Actor
GROUP BY gender;
~~~
##### 5. Retorna a media salarial separada por genero.

### Exercicio 6
~~~sql
ALTER TABLE Movies
ADD COLUMN playing_limit_date VARCHAR(255) NOT NULL;
~~~
##### 1. Adiciona a column playing_limit_date na table Movies.
~~~sql
ALTER TABLE Movies
CHANGE score score FLOAT;
~~~
##### 2. Altera o tipo de INT para FLOAT.
~~~sql
UPDATE Movies
SET Movies.playing_limit_date = "2021-05-25"
WHERE id = 1;

UPDATE Movies
SET Movies.playing_limit_date = "2021-04-25"
WHERE id = 2;
~~~
##### 3. Atualizado dois filmes, um já saiu de cartaz e o outro ainda está.
~~~sql
DELETE FROM Movies
WHERE id = 3;

UPDATE Movies
SET synopsis = "owo"
WHERE id = 3;
~~~
##### 4. Filme deletado, o workbenc ainda atualiza a synopse do ID 3 por mais que ele nao exista mais.

### Exercicio 7
~~~sql
SELECT COUNT(*) FROM Movies
WHERE score > 7.5;
~~~
##### 1. Resposta, 2.
~~~sql
SELECT AVG(score) FROM Movies;
~~~
##### 2. 8.66.
~~~sql
SELECT COUNT(*) FROM Movies
WHERE playing_limit_date > CURDATE();
~~~
##### 3. Nenhum.
~~~sql
SELECT COUNT(*) FROM Movies
WHERE release_date > CURDATE();
~~~
##### 4. Nenhum, todos já lançaram.

SELECT MAX(score) FROM Movies;
##### 5. 10.
~~~sql
select MIN(score) FROM Movies;
~~~
##### 6. 7.

### Exercicio 8
~~~sql
SELECT * FROM Movies
ORDER BY name;
~~~
##### 1. Retorna os filmes em ordem alfabetica
~~~sql
SELECT * FROM Movies
ORDER BY name DESC
LIMIT 5;
~~~
##### 2. Retorna os 5 primeiros filmes em ordem DESC alfabetica

##### 3. TODO
~~~sql
SELECT * FROM Movies
ORDER BY score DESC
LIMIT 3;
~~~
##### 4. Retorna os 3 filmes mais bem avaliados.

