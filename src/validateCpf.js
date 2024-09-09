"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCpf = void 0;
const CPF_VALID_LENGTH = 11;
const FIRST_DIGIT_FACTOR = 10;
const SECOND_DIGIT_FACTOR = 11;
function validateCpf(cpf) {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== CPF_VALID_LENGTH)
        return false;
    if (allDigitsTheSame(cpf))
        return false;
    const digit1 = calculateDigit(cpf, FIRST_DIGIT_FACTOR);
    const digit2 = calculateDigit(cpf, SECOND_DIGIT_FACTOR);
    return `${digit1}${digit2}` === extractDigit(cpf);
}
exports.validateCpf = validateCpf;
function allDigitsTheSame(cpf) {
    const [firstDigit] = cpf;
    return [...cpf].every(digit => digit === firstDigit);
}
function calculateDigit(cpf, factor) {
    let total = 0;
    for (const digit of cpf) {
        if (factor > 1)
            total += parseInt(digit) * factor--;
    }
    const remainder = total % 11;
    return (remainder < 2) ? 0 : 11 - remainder;
}
function extractDigit(cpf) {
    return cpf.slice(9);
}
//# sourceMappingURL=validateCpf.js.map