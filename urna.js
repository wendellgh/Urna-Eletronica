// Capturando os valores

function valor(numero){

    let num1 = document.querySelector("#es1").value
    let num2 =  document.querySelector("#es2").value
 
    if(num1 == ''){
     document.querySelector("#es1").value = numero
    }else if(num2 == ''){
     document.querySelector("#es2").value = numero
    }
         
 }

//  Função corrige

function corrigir(){
    document.querySelector("#es1").value = ""
    document.querySelector("#es2").value = ""
}

// Função voto Branco/Nulo

function branco(){
    var x = document.getElementById('es1').value
    var bran = document.getElementById('es2').value

    if ((x == "") && (bran == "") || (x == 0) && (bran == 0)){
        document.getElementById('resultado').innerHTML = "<h2>Você votou branco ou nulo.</h2>"
        
    }
    
}

// Função Confirma

function confirma(){
    let nmm1 = document.getElementById('es1').value
    let nmm2 = document.getElementById('es2').value

    if(nmm1 != "" && nmm2 != ""){
        document.getElementById('resultado').innerHTML = `
        <h2>Seu voto é ${nmm1}${nmm2}.</h2>`
                
    }

    document.getElementById('es1').value = ''
    document.getElementById('es2').value = ''  

}


