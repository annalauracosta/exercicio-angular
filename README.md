# 📌 Exercício Angular - Gerenciador de Tarefas

Bem-vindo ao **Exercício Angular**! Este projeto foi desenvolvido para praticar conceitos do Angular 17 utilizando **Componentes Standalone** e **Módulos**.

## 🛠️ Pré-requisitos
Antes de executar o projeto, certifique-se de ter instalado:
- **Node.js** (versão recomendada: 18 ou superior)
- **Angular CLI** (versão 17):
  ```bash
  npm install -g @angular/cli@17
  ```
- **JSON Server** (para simular uma API REST):
  ```bash
  npm install -g json-server
  ```

## 🚀 Como Rodar o Projeto

1️⃣ **Clone o repositório:**
```bash
git clone https://github.com/GabrielRogerioMessias/angular-exercise.git
```

2️⃣ **Acesse a pasta do projeto:**
```bash
cd angular-exercise
```

3️⃣ **Instale as dependências:**
```bash
npm install
```

4️⃣ **Inicie a aplicação Angular:**
```bash
ng serve
```

5️⃣ **Inicie o servidor JSON (banco de dados fake):**
Abra outro terminal, navegue até a pasta `src/db` e execute:
```bash
json-server --watch db.json
```

Agora, o servidor estará rodando e pronto para armazenar suas tarefas! ✅

## ✨ Funcionalidades
✅ Listar todas as tarefas cadastradas  
✅ Criar novas tarefas  
✅ Uso do **Snackbar** para fornecer feedback ao usuário  
✅ **Validação de formulário** para garantir que os campos obrigatórios sejam preenchidos  
✅ Implementação de **Botões, Toolbar, Inputs, Model e Service**  

⚠ **Mensagem de Validação:** Caso os campos obrigatórios não sejam preenchidos ao criar uma nova tarefa, uma mensagem de aviso no Snackbar será exibida: **"Por favor, preencha todos os campos obrigatórios antes de continuar!"**

## 📂 Estrutura do Projeto
```
angular-exercise/
│── src/
│   ├── app/
│   │   ├── components/
│   │   ├── models/
│   │   ├── services/
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── db/
│   │   ├── db.json (banco de dados fake)
│   ├── index.html
│   ├── main.ts
│── package.json
│── angular.json
│── README.md
```

## 📝 Notas
Este é um projeto simples, com foco principal em **aprender e praticar Angular** usando Componentes Standalone e Módulos. Fique à vontade para contribuir ou tirar dúvidas! 😃

---
🔗 **Criado por:** [Gabriel Rogério Messias](https://github.com/GabrielRogerioMessias) e [Anna Laura Da Costa Polo] (https://github.com/annalauracosta)

