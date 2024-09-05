function calcPreco(){
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const precoPunidade = parseFloat(document.getElementById("precoPunidade").value);
    const desconto = parseFloat(document.getElementById("desconto").value);

    if(isNaN(quantidade) || quantidade <= 0){
    alert("Por favor digite um valor válido.");
    return;
    }

    if(isNaN(precoPunidade) || precoPunidade <= 0){
        alert("Por favor digite um valor válido.");
        return;
    }

    if(isNaN(desconto) || desconto < 0 || desconto > 100){
        alert("Digite um valor de desconto entre(0%-100%).");
        return;
    }

    const precoTotal = quantidade*precoPunidade;
    const montanteDesc = (precoTotal* desconto)/100;
    const precoFinal = precoTotal - montanteDesc;

    document.getElementById("resultado").innerHTML = `
    <p>Quantidade: ${quantidade}</p>
    <p>Preço por Unidade: ${precoPunidade}</p>
    <p>Desconto: ${desconto}%</p>
    <p>Preço Final: ${precoFinal.toFixed(2)}</p>`;
}