import encodeQR from "qr";

export function generateQrCode(type, content) {
    switch(type) {
        case 1:
            const terminalFriendly = encodeQR(content, "term");
            return terminalFriendly;
            break;
        case 2:
            const ascii = encodeQR(content, "ascii");
            return ascii;
            break;
        default:
            return "Opção inválida";
            break;
    }
}