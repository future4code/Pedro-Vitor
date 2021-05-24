### Exercicio 1
# Criação da table de atores
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
    );
# Varchar(255) -> Uma string com um valor máximo de caracteres.
# Date -> Representa uma data.

SHOW DATABASES; # Mostra todos os databases no server sql.
SHOW TABLES; # Retorna as tables atuais do database.

DESCRIBE Actor; # Checa a estrutura de uma tabela especifica .

### Exercicio 2
# Adiciona um ator a tabela.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
	"female"
);

INSERT INTO Actor ()
VALUES(
	"002",
    "Cláudia Raia",
    240000,
    "1966-12-23",
    "female"
);
# Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'.
# Não podemos ter um elemento com uma Primary Key que já foi usada, precisa ser unica.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
# Error Code: 1136. Column count doesn't match value count at row 1.
# Estamos passando apenas 3 colunas porém nos valores temos 5. 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
# Error Code: 1364. Field 'name' doesn't have a default value.
# Name foi setado com NOT NULL o que significa que é obrigatorio passar ele.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
# Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1.
# Para passar um date é preciso que esteja em string, e siga YYYY--MM-DD.

INSERT INTO Actor ()
VALUES (
	"006",
    "Camila Queiroz",
    50000,
    "1993-06-27",
    "female"
);

### Exercicio 3
SELECT * FROM Actor WHERE gender = "female";
# Retorna somente as atrizes do database.

SELECT salary from Actor where name = "Tony Ramos";
# Retorna o salario do ator especificado -> Tony Ramos.

SELECT * FROM Actor WHERE gender = "invalid";
# Retornou a tabela vazia, indicando que deu tudo certo porém nenhum ator consta como invalid.

SELECT id, name, salary from Actor WHERE salary < 500000;
# Retorna o ID, nome e slario dos atores que recebem menos de 500k.

SELECT id, name from Actor WHERE id = "002";
# Error Code: 1054. Unknown column 'nome' in 'field list'
# Passamos a coluna "nome" não existe, o correto é name.

### Exercicio 4
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
# Retorna um elemento da tabela em que o name começa com a letra A ou J e o salário é maior
# que 300k.

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
# Retorna um elemento em que o nome não começa com a letra A e o salario é maior que 350k.

SELECT * FROM Actor
WHERE (name LIKE "%G%" or name LIKE "%g%");
# Retorna os elementos em que tenha G ou g no seu nome.

SELECT * FROM Actor
WHERE (name LIKE "%A%" or name LIKE "%a%" or name LIKE "%G%" or name LIKE "%g%")
AND salary BETWEEN 350000 AND 900000;
# Retorna os elementos que tenham A, a, G ou g e recebam um salario entre 350k e 900k.

### Exercicio 5
CREATE TABLE Movies (
	id VARCHAR (255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    score INT
);
# Cria uma tabela com as colunas ID, name, synopsis, release date e score. Todas as colunas com exceção
# de score são obrigatorias, TEXT type reserva qualquer tipo de texto.

INSERT INTO Movies
VALUES (
	"001",
    "Se eu fosse você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
	Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
),(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
	A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
),(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. 
	A vida de abusos acaba por acarretar sua morte precoce",
    "2017-11-02",
    8
),(
	"004",
    "Tropa de Elite",
    "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. 
	Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. 
	Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
    "2007-10-05",
    9
);

### Exercicio 6
SELECT id, name, score FROM Movies WHERE id = "001";
# Retorna id name e score quando envia um id.

SELECT id, name, synopsis, release_date, score FROM Movies WHERE name = "Se eu fosse você";
# Retorna todos os dados de um filme especifico.

SELECT id, name, synopsis FROM Movies
WHERE score > 7;
# Retorna ID, name, synopsis dos filmes com score maior que 7.

### Exercicio 7
SELECT id, name, synopsis, release_date, score FROM Movies
WHERE name LIKE "%vida%";
# Retornas os filmes que contenham vida em seu titulo.

SELECT * FROM Movies
WHERE (name LIKE "%doce%" or synopsis LIKE "%vida%");
# Retorna os filmes que contenham "doce" em seus titulos, ou "vida" na synopsis.

SELECT * FROM Movies
WHERE release_date NOT LIKE "2021-05-24";
# Retorna os filmes que foram lançados antes do dia de amanha (lol).

SELECT * FROM Movies
WHERE (name LIKE "%tropa%" OR synopsis LIKE "%elite%") AND release_date NOT LIKE "2021-05-24" AND score > 7;
# Retorna um filme que ja tenha lançado, tenha score maior que 7 e o termo de busca esteja no titulo ou synopse.