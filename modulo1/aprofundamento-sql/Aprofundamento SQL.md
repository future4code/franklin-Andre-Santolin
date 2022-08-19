### Exercício 1

Leia os comandos abaixo e indique o que eles fazem. **Não** os rode nas tabelas desse projeto! Explique o que elas fariam **se fossem** rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder



a)

ALTER TABLE Actors DROP COLUMN salary;


_Resposta_: Remove a coluna `salary` da tabela Actors



b)

ALTER TABLE Actors CHANGE gender sex VARCHAR(6);


_Resposta_: Altera o nome da coluna `gender` para `sex`


c) 

ALTER TABLE Actors CHANGE gender gender VARCHAR(255);


_Resposta_: Altera o tipo da coluna `gender` para VARCHAR(255), mantendo o mesmo nome.



d) Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres*

_Resposta_:

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


### Exercício 2

 A query abaixo muda o nome do ator com id `123` para `Moacyr Franco`:

```sql
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123"
```


a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`

_Resposta_:
```sql
UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "2020-02-10"
WHERE id = "003";
```

b) Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.

_Resposta_:
```sql
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```

c) Escreva uma query que atualize todas as informações do ator com o id `005`

_Resposta_:
```sql
UPDATE Actor
SET 
	name = "Emma Watson",
	birth_date = "1990-04-15",
    salary = 15000000,
    gender = "female"
WHERE id = "005";
```

d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.

_Resposta_:
```sql
UPDATE Actor
SET name = "Testador"
WHERE id = "004"
```

Apareceu a seguinte mensagem: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Nada foi alterado na tabela, já que o id não existe.


### Exercício 3 

Por exemplo, se quisermos apagar o ator com o nome `Tony Ramos`

```sql
DELETE FROM Actor WHERE name = "Tony Ramos"
```

a) Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`

_Resposta_:
```sql
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro";
```

b) Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00

_Resposta_:
```sql
DELETE FROM Actor 
WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4

a) Escreva uma query que pegue o maior salário de todos os atores e atrizes

_Resposta_:
```sql
SELECT MAX(salary) FROM Actor
```

b) Escreva uma query que pegue o menor salário das atrizes

_Resposta_:
```sql
SELECT MIN(salary) 
FROM Actor
WHERE gender = "female";
```

c) Escreva uma query que pegue a quantidade de atrizes

_Resposta_:
```sql
SELECT COUNT(*) 
FROM Actor 
WHERE gender = "female";
```

d) Escreva uma query que pegue a soma de todos os salários

_Resposta_:
```sql
SELECT SUM(salary) 
FROM Actor;
```

### Exercício 5

a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

_Resposta_: A query agrupou as pessoas por gênero e contou quantos tinha em cada um.


b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética

_Resposta_:
```sql
SELECT id, name
FROM Actor
ORDER BY name DESC;
```

c) Faça uma query que retorne todos os atores ordenados pelo salário

_Resposta_:
```sql
SELECT *
FROM Actor
ORDER BY salary;
```

d) Faça uma query que retorne os atores com os três maiores salarios

_Resposta_:
```sql
SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e) Faça uma query que retorne a média de salário por gênero

_Resposta_:
```sql
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6

Você já pegou o padrão né? Primeiro fazemos algo guiado e depois deixamos você fazer a sós!

a) Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema. 

_Resposta_:
```sql
ALTER TABLE Movie
ADD playing_limit_date DATE;
```

b) Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.

_Resposta_:
```sql
ALTER TABLE Movie
CHANGE rating rating FLOAT;
```

c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído

_Resposta_:
```sql
UPDATE Movie
SET playing_limit_date = "2020-05-30"
WHERE id = "001";

UPDATE Movie
SET playing_limit_date = "2003-01-01"
WHERE id = "002";
```

d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

_Resposta_:
```sql
DELETE FROM Movie
WHERE id = "001";
```

Depois de deletar, se tento alterá-lo, dá a seguinte mensagem: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Não é possível alterar algo que não existe.


### Exercício 7

Agora para treinar as funções novamente, faça uma query para responder as perguntas abaixo:

a) Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?

_Resposta_: 4

```sql
SELECT COUNT(*)
FROM Movie
WHERE rating > 7.5;
```

b) Qual a média das avaliações dos filmes?

_Resposta_: 9

```sql
SELECT AVG(rating)
FROM Movie;
```

c) Qual a quantidade de filmes em cartaz?

_Resposta_: 0

```sql
SELECT COUNT(*)
FROM Movie
WHERE playing_limit_date > CURDATE();
```

d) Qual a quantidade de filmes que ainda irão lançar?

_Resposta_: 0

```sql
SELECT COUNT(*) 
FROM Movie 
WHERE release_date > CURDATE();
```

e) Qual a maior nota dos filmes?

_Resposta_: 10

```sql
SELECT MAX(rating) 
FROM Movie;
```

f) Qual a menor nota dos filmes?

_Resposta_: 8

```sql
SELECT MIN(rating) 
FROM Movie;
```

### Exercício 8

Escreva **uma** query que:

a) Retorne todos os filmes em ordem alfabética

_Resposta_: 
```sql
SELECT *
FROM Movie
ORDER BY title;
```

b) Retorne os 5 primerios filmes em ordem descrente alfabética 

_Resposta_: 
```sql
SELECT *
FROM Movie
ORDER BY title DESC
LIMIT 5;
```

c) Retorne os 3 filmes mais recentes em cartaz

_Resposta_: 
```sql
SELECT *
FROM Movie
WHERE release_date < CURDATE() 
ORDER BY release_date DESC
LIMIT 3;
```

d) Retorne os 3 filmes melhor avalidos

_Resposta_: 
```sql
SELECT *
FROM Movie
ORDER BY rating DESC
LIMIT 3;
```

