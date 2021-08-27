console.log('JavaScript carregado');

//função para verificar se o cpf tem 11 digitos
function validaCPF(cpf) {
    //mostra no console a quantidade de num digitados
    // console.log(cpf.length)
    
    // != indica a condição de não querer nada diferente de 11 digitos
    // e também foi colocado outra expressão para verificar se existe números repetidos.
    if (cpf.length != 11 || !!cpf.match(/^(\d)\1{10}/g)) {
        return false;
    } else {

        //percorrer a cadeia de caracteres exibindo quais são os núm e dígitos
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        //% operador para capturar o resto da divisão
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
        //Validação do primeiro dígito
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        //

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //validação para segundo dígito
        if (resultado != digitos.charAt(1)) {
            return false;
        }
        // console.log(digitos.toString().chartAt(0)+ "é a primeira posição da variavel soma");
        // console.log('números do cpf' + numeros);
        // console.log('dígitos do cpf' + digitos);
        return true;
    }
}


//mostrando a mensagem de inicio da validação
function validacao() {
    console.log('Iniciando validação CPF');

    var cpf = document.getElementById('cpf_digitado').value;

    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var resultadoValidacao = validaCPF(cpf);

    //validação para exibir a mensagem de erro ou não
    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';

    } else {
        document.getElementById('error').style.display = 'block';
    }
}