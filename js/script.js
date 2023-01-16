import isCpf from './valida-cpf.js';
import isOfAge from './valida-idade.js';
const camposDoFormulario = document.querySelectorAll('[required]');

camposDoFormulario.forEach((campo) => {
    campo.addEventListener('blur', () => verificaCampo(campo));
});

function verificaCampo(campo) {
    if (campo.name === 'cpf' && campo.value.length >= 11) {
        isCpf(campo);
    }
    if (campo.name === 'aniversario' && campo.value !== '') {
        isOfAge(campo);
    }
}
