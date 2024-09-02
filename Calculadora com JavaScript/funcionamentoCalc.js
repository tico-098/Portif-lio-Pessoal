function operacao(ope){//declaração da função operação
    v1.value = res.value;
    op.value = ope;
    res.value = "0";
}

function separador(){//declaração da função separador
    if(res.value.indexOf(",") < 0){
        res.value = res.value + ",";
    }
}

function limpar(){//declaração da função limpar
    res.value = "0";
}

function String2Number(valor){//declaração da função para transformar strings em números
    valor = valor.replace(",", ".");
    return(parseFloat(valor));
}

function digito(dig){//declaração da função que limita o número máximo de dígitos e os atribui a dig
    if(res.value.length < 12){
        if(res.value != "0"){
            res.value = res.value + dig;
        }else{
            res.value = dig;
        }
    }
}

function total(){//declaração da função total que faz todas as operações numéricas
    if(op.value === "+"){
        res.value = parseFloat(v1.value) + parseFloat(res.value);
    }else if(op.value === "-"){
        res.value = parseFloat(v1.value) - parseFloat(res.value);
    }else if(op.value === "X"){
        res.value = parseFloat(v1.value) * parseFloat(res.value);
    }else if(op.value === "/"){
        if(res.value != 0){
            res.value = parseFloat(v1.value) / parseFloat(res.value);
        }else{
            res.value = "Erro!";
        }
    }
}