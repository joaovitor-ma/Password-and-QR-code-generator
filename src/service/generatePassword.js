import otpGenerator from "otp-generator";

export const generatePass = otpGenerator.generate(process.env.PASSWORD_LENGTH, {
    digits: process.env.PASSWORD_HAS_DIGITS,
    lowerCaseAlphabets: process.env.PASSWORD_HAS_LOWERCASE,
    upperCaseAlphabets: process.env.PASSWORD_HAS_UPPERCASE,
    specialChars: process.env.PASSWORD_HAS_SPECIAL_CHARS,
})