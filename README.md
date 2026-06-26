# 🤖 QR Code and Password Generator | Gerador de QR Code e Senhas
## 🇺🇸 English

This project aims to create a program capable of generating **QR Codes** and **One-Time Passwords (OTP)**.

QR Codes can be generated in two different ways:

1. **Standard mode**, which generates a larger QR Code and displays it in the terminal.
2. **Terminal-friendly mode**, which generates a smaller ASCII version of the QR Code and displays it in the terminal.

The password generator uses environment variables. Therefore, you must create a `.env` file in the project's root directory containing the following variables:

- `PASSWORD_LENGTH=integer`
- `PASSWORD_HAS_DIGITS=boolean`
- `PASSWORD_HAS_LOWERCASE=boolean`
- `PASSWORD_HAS_UPPERCASE=boolean`
- `PASSWORD_HAS_SPECIAL_CHARS=boolean`

The list above shows the name of each variable and the data type it must contain.

### 👾 Running the application

To run the application, open your terminal and execute:

```bash
npm run start:dev
```

---

## 🇧🇷 Português

Este projeto tem como objetivo criar um programa capaz de gerar **QR Codes** e **senhas de uso único (One-Time Passwords - OTP)**.

Os QR Codes podem ser gerados de duas formas diferentes:

1. **Modo padrão**, que gera um QR Code maior e o exibe no terminal.
2. **Modo otimizado para terminal**, que gera uma versão menor em ASCII do QR Code e a exibe no terminal.

O gerador de senhas utiliza variáveis de ambiente. Portanto, é necessário criar um arquivo `.env` na pasta raiz do projeto contendo as seguintes variáveis:

- `PASSWORD_LENGTH=integer`
- `PASSWORD_HAS_DIGITS=boolean`
- `PASSWORD_HAS_LOWERCASE=boolean`
- `PASSWORD_HAS_UPPERCASE=boolean`
- `PASSWORD_HAS_SPECIAL_CHARS=boolean`

A lista acima apresenta o nome de cada variável e o tipo de dado que ela deve receber.

### 👾 Executando a aplicação

Para executar a aplicação, abra o terminal e execute:

```bash
npm run start:dev
```