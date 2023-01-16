export default function isOfAge(campo) {
    const dataNascimento = new Date(campo.value);
    if (!ageValidate(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function ageValidate(data) {
    const dataAtual = new Date();
    const over18 = new Date(
        data.getUTCFullYear() + 18,
        data.getUTCMonth(),
        data.getUTCDate()
    );

    return dataAtual >= over18;
}
