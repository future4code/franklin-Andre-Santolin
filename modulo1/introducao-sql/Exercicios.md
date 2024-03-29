### Exercício 1
a) CREATE TABLE serve para criar a tabela Actor, VARCHAR determina o tipo da coluna como string, PRIMARY KEY determina aquela coluna como a chave principal da tabela, NOT NULL impede o campo de ser deixado em branco e DATE serve para definir uma data.

b) SHOW DATABASES mostra todas as databases disponíveis na sua conexão e SHOW TABLES mostra todas as tabelas criadas dentro daquela conexão.

c) Usando DESCRIBE Actor temos exatamente as mesmas informações que preenchemos sobre a base da tabela, detalhando cada um de seus campos, tipos, qual é a chave principal, etc.


### Exercício 2
a) A query é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b) A query é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Regina Duarte",
  500000,
  "1947-02-05", 
  "female"
);
```
O código de erro é:
```
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Entrada '002' duplicada na chave PRIMÁRIA
```
Ele não permite dois ids com o mesmo valor na chave primária da tabela.

c) O código de erro é:
```
Error Code: 1136. Column count doesn't match value count at row 1
A contagem de colunas não corresponde ao valor na linha 1
```
Na linha INSERT INFO estão faltando as informações de birth_date e gender.
A query corrigida fica:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) O código de erro é:
```
Error Code: 1364. Field 'name' doesn't have a default value
O campo 'name' não tem um valor padrão definido
```
O valor da linha nome é necessário mas não foi declarado.
A query corrigida fica: 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

e) O código de erro é:
```
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Valor incorreto na coluna 'birth_date' na linha 1
```
Estão faltando as aspas na data de nascimento para que ela seja uma string como é necessário.
A query corrigida fica:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

### Exercício 3
a) A query é:
```
SELECT * from Actor WHERE gender = "female";
```

b)  A query é:
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```

c) A query é:
```
SELECT * from Actor WHERE gender = "invalid";
```
Todas as informações de gênero estão corretas por isso essa query não retorna nada nesse caso.

d) A query é:
```
select id, name, salary from Actor where salary > 500000;
```

e) O código de erro é:
```
Error Code: 1054. Unknown column 'nome' in 'field list'
Coluna 'nome' desconhecida na 'lista de campos'
```
Nome em português está incorreto, é necessário trocar para o inglês 'name'.
A query corrigida fica:
```
SELECT id, name from Actor WHERE id = "002";
```

### Exercício 4
a) Selecione todos os que se aplicam da tabela ator onde o nome comece com A ou J e cujo salário seja maior que 300000

b) A query é:
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

c) A query é:
```
SELECT * FROM Actor
WHERE name LIKE "G%" or name like "%g%";
```

d) A query é:
```
SELECT * FROM Actor
WHERE (name LIKE "A%" or name like "%a%" or name like "G%" or name like "%g%") and salary between 350000 and 900000;
```

### Exercício 5

a) A query é:
```
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
```
CREATE TABLE serve para criar a tabela Movie, id é uma string do tipo VARCHAR com limite de 255 caracteres e é também a chave principal da tabela. title também é uma string do tipo VARCHAR com limite de 255 caracteres, que não pode ser null e obrigatoriamente tem que ser única. Synopsis é um texto, ou seja, sua capacidade de armazenar informações é maior que VARCHAR e não pode ser null. Release_date é uma data que não pode ser null e rating é um número inteiro que não pode ser null.

b) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
```

c) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
```

d) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
```

e) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "004", 
  "O Auto da Compadecida",
  "O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
  "2000-09-10", 
  9
);
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"005",
  "Deus é Brasileiro",
  "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
  "2003-01-31",
  9
);

### Exercício 6
a) A query é:
```
SELECT id, title, rating FROM Movie WHERE id = "004";
```

b) As query é:
```
SELECT * FROM Movie WHERE name = "Deus é Brasileiro";
```

c) A query é:
```
SELECT id, title, synopsis FROM Movie WHERE rating > 7;
```



### Exercício 7
a) A query é:
```
SELECT * FROM Movie
WHERE title LIKE "%vida%";
``` 

b) A query é:
```
SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";
```
c) A query é:
SELECT * FROM Movie
WHERE release_date < "2020-05-04";
```
d) A query é:
SELECT * FROM Movie
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;

*****
SELECT * FROM Movie
WHERE release_date < CURDATE() AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%");      
          
      

