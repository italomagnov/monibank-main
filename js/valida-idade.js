export default function isOfAge(campo) {
    const dataNascimento = new Date(campo.value);
    ageValidate(dataNascimento);

    console.log(ageValidate(dataNascimento));
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
