export default function isCpf(campo) {
    const cpf = campo.value.replace(/\.|-/g, '');
    if (
        validateRepeatNumbers(cpf) ||
        validateFirstDigit(cpf) ||
        validateSecondDigit(cpf)
    ) {
        console.log('esse cpf não existe');
    } else {
        console.log('exeste');
    }
}

function validateRepeatNumbers(cpf) {
    const repeatNumbers = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ];

    return repeatNumbers.includes(cpf);
}

function validateFirstDigit(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma === 10 || soma === 11) {
        soma = 0;
    }

    return soma != cpf[9];
}

function validateSecondDigit(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma === 10 || soma === 11) {
        soma = 0;
    }

    return soma != cpf[10];
}
