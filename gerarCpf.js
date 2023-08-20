
/***
			 * 0 (RS)- 1 (DF GO MS MT TO)- 2 (AC AM AP PA RO RR)- 3 (CE MA PI)- 4 (AL PB PE
			 * RN)- 5 (BA SE)- 6 (MG)- 7 (ES RJ)- 8 (SP)- 9 (PR SC).
			 */

function gerarCpf(){
    var cpf = "";
    for(var i=0;i<8;i++){  
        cpf = cpf.concat(Math.floor(Math.random() * 10));
    }
    cpf = cpf.concat(geradorDigitoUF());
    cpf = cpf.concat(calcularDvUm(cpf));
    cpf = cpf.concat(calcularDvDois(cpf));
    document.getElementById("campoCpfFull").value =cpf;
}

// calcula o dígito da região fiscal
function geradorDigitoUF() {
    return Math.floor(Math.random() * 10);
}

function calcularDvUm(cpf) {
    var soma = 0;
    var resto;
    var multi = 1;
    var stringCpf = cpf;
    for (var i=0; i< cpf.length;i++) {
        soma += stringCpf.charAt(i)* multi;
        multi += 1;
    }
    resto = soma % 11;
    resto=verificaRestoZero(resto);
	return resto;
}

function calcularDvDois(cpf) {
    var soma = 0;
    var resto;
    var multi = 0;
    var stringCpf = cpf;
    for (var i=0; i< cpf.length;i++) {
        soma += stringCpf.charAt(i) * multi;
        multi += 1;
    }
    resto = soma % 11;
    resto=verificaRestoZero(resto);
    return resto;
}

function verificaRestoZero(resto) {
    if(resto==10) {
        return 0;
    }
    return resto;
}