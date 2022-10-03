let buttom = document.querySelector("#calcular");

buttom.onclick = function()
{
    let imc=0;
    let peso = parseInt(document.querySelector("#Pesos").value);
    let estatura = parseInt(document.querySelector("#Estaturas").value);

    estatura=(estatura/100)

    imc = ((peso/(estatura*estatura)))

    document.querySelector("#resultado").innerHTML= imc;
}