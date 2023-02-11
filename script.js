let result  = document.getElementById("result"); //obter o elemento de resultado.

function input(num){
    let number = result.value;                   //Números de entrada pressionados por tecla
    result.value = number + num;
}

function calc(){
    if(result.value != ""){                      // Funcao calcular da Calculadora
        let result2  = result.value;             // Variavel que foi inserida caso nao seja vazio recebe o calculo segundo o parametro aplicado no html.
        result.value = eval(result2)
    } else{
        alert("Erro! Adicione valores válidos.")
    }
}
function reset(){                                // Funcao pare resetar a calculadora
    result.value = "";                           // Devolve a variavel com valor vazio
}

