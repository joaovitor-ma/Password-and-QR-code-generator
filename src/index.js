import { rl } from "./service/readTerminal.js";
import { generatePass } from "./service/generatePassword.js";
import { generateQrCode } from "./service/generateQrCode.js";
import logSymbols from "log-symbols";
import chalk from "chalk";

function stopProgram() {
    console.log(logSymbols.error + chalk.red.bold(" Parando execução..."));
    rl.close();
}

function callGenerateQrCode() {
    const qrType = parseInt(await rl.question("Selecione o tipo de QR Code\n1-Normal   2-Terminal Friendly\n"));
    const qrContent = await rl.question("Insira um link para gerar o QR Code: ");
    const qrCode = generateQrCode(qrType, qrContent);
    console.log(qrCode);
    console.log(logSymbols.success + chalk.green.bold(" QR code gerado com sucesso\n"))
    main();
}

function callGeneratePassword() {
    const password = generatePass;
    console.log("Senha: " + password);
    console.log(logSymbols.success + chalk.green.bold(" Senha gerada com sucesso\n"))
    main();
}

function invalidOption() {
    console.log(logSymbols.warning + chalk.yellow.italic(" Opção inválida.\n"));
    main();
}

async function main() {
    const option = parseInt(await rl.question("Selecione a opção desejada\n0-Parar execução   1-Gerar QR Code   2-Gerar senha\n"));

    switch (option) {
        case 0:
            stopProgram();
            break;
        case 1:
            callGenerateQrCode();
            break;
        case 2:
            callGeneratePassword();
            break;
        default:
            invalidOption();
            break;
    }
}

main();