function sumar() {
    const a = parseInt(document.getElementById("numeroA").value);
    const b = parseInt(document.getElementById("numeroB").value);
    const resultado = a + b;
    document.getElementById("resultado").value = resultado;
};

const restar = () => {
    const a = parseInt(document.getElementById("numeroA").value);
    const b = parseInt(document.getElementById("numeroB").value);
    const resultado = a - b;
    document.getElementById("resultado").value = resultado;
};

function multiplicar() {
    const a = parseInt(document.getElementById("numeroA").value);
    const b = parseInt(document.getElementById("numeroB").value);
    const resultado = a * b;
    document.getElementById("resultado").value = resultado;
};
const dividir = () => {
    const a = parseInt(document.getElementById("numeroA").value);
    const b = parseInt(document.getElementById("numeroB").value);
    const resultado = a / b;
    document.getElementById("resultado").value = resultado;
};