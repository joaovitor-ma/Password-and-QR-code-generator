# 🤖 Gerador de QR Code e Senhas

Este projeto tem como objetivo criar um programa capaz de gerar **QR Codes** e **senhas de uso único (One-Time Passwords - OTP)**.

Os QR Codes podem ser gerados de duas formas diferentes:

1. Modo padrão, que gera um QR Code maior e o exibe no terminal.
2. Modo otimizado para terminal, que gera uma versão menor em ASCII do QR Code e a exibe no terminal.

O gerador de senhas utiliza variáveis de ambiente. Portanto, é necessário criar um arquivo `.env` na pasta raiz da aplicação contendo as seguintes variáveis:

- `PASSWORD_LENGTH=integer`
- `PASSWORD_HAS_DIGITS=boolean`
- `PASSWORD_HAS_LOWERCASE=boolean`
- `PASSWORD_HAS_UPPERCASE=boolean`
- `PASSWORD_HAS_SPECIAL_CHARS=boolean`

A lista acima apresenta o nome de cada variável e o tipo de dado que ela deve receber.

# 👾 Executando a aplicação

Para executar a aplicação, abra o terminal e execute o seguinte comando:

```bash
npm run start:dev
```