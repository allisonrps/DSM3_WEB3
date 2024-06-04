Iniciando com 'npm run dev'
Acesso: HTTP://localhost:3000

-------------------------------------------------------------

LISTANDO TODOS OS FUNCIONÁRIOS (GET):
localhost:3000/funcionario

RESPOSTA:

[
  {
    "_id": "665f9c0d5b69c91029d801db",
    "nome": "Gabriela Dumont",
    "cargo": "Gerente",
    "salario": 15000,
    "contratado": true,
    "__v": 0
  },
  {
    "_id": "665f9c345b69c91029d801dd",
    "nome": "Euclides Abilio",
    "cargo": "Diretor",
    "salario": 50000,
    "contratado": true,
    "__v": 0
  },
  {
    "_id": "665f9cac220be9caccfd8751",
    "nome": "Allison Rodrigues de Paula e Silva",
    "cargo": "Dev Full Stack",
    "salario": 30000,
    "contratado": true,
    "__v": 0
  }
]

-------------------------------------------------------------

DETALHANDO FUNCIONÁRIO ESPECÍFICO (GET):
localhost:3000/funcionario/665f9cac220be9caccfd8751

RESPOSTA:

{
  "_id": "665f9cac220be9caccfd8751",
  "nome": "Allison Rodrigues de Paula e Silva",
  "cargo": "Dev Full Stack",
  "salario": 30000,
  "contratado": true,
  "__v": 0
}

-------------------------------------------------------------

CADASTRO DE FUNCIONÁRIO (POST):
localhost:3000/funcionario

{
"nome":"Clemilda Quitéria",
"cargo":"Dev Back End",
"salario":"20000",
"contratado":true
}

RESPOSTA:

{
    "message": "Funcionário criado com sucesso!"
}

-------------------------------------------------------------

ATUALIZANDO FUNCIONÁRIO (PUT):
localhost:3000/funcionario/665f9cac220be9caccfd8751

  {
    "nome": "Allison Rodrigues de Paula e Silva",
    "cargo": "Dev Full Stack",
    "salario": 40000,
    "contratado": true,
  }

RESPOSTA:

  {
    "_id": "665f9cac220be9caccfd8751",
    "nome": "Allison Rodrigues de Paula e Silva",
    "cargo": "Dev Full Stack",
    "salario": 40000,
    "contratado": true,
    "__v": 0
  }

-------------------------------------------------------------

DELETAR FUNCIONÁRIO (DELETE):
localhost:3000/funcionario/665f9c0d5b69c91029d801db

RESPOSTA:

{
    "message": "Funcionário deletado com sucesso!"
}

-------------------------------------------------------------