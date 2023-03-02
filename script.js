
function primeiro(){
    document.getElementById('dez')
    document.getElementById('dez2')
    document.getElementById('dez3')
    document.getElementById('dez4')
    pri.style.display='flex';
    pri.style.justifyContent='center';
    pri.style.margin='auto';
    vinte.style.display ='none';
    vinte2.style.display ='none';
    vinte3.style.display ='none';
    vinte4.style.display ='none';
    vinte5.style.display ='none';
}
function  segundo(){
    document.getElementById('vinte')
    document.getElementById('vinte2')
    document.getElementById('vinte3')
    document.getElementById('vinte4')
    document.getElementById('vinte5')
    pri.style.display='flex';
    pri.style.justifyContent='center'; 
    pri.style.minWhidth='100px';
    dez.style.display ='none';
    dez2.style.display ='none';
    dez3.style.display ='none';
    dez4.style.display ='none';
}

function Cerveja(){
    var Whis = document.getElementById('img>Whis')
    document.getElementById('cer')
    Whis.style.display='none';
  
}
/*
function preco(){
    var menor = document.getElementById('menor');
    var maior = document.getElementById('maior');
    var pri = document.getElementById('pri');
    var seg = document.getElementById('seg');


    if(menor.value.length == 0){
        window.alert('[Erro] Valor invalido')
}else{
     let men = Number(menor.value)
     let ma = Number(maior.value)
    if( men >= 1 && men <10 && ma <=10){
        document.getElementById('dez')
        document.getElementById('dez2')
        document.getElementById('dez3')
        pri.style.display='flex';
        pri.style.justifyContent='center';
        pri.style.margin='auto';
        pri.style.minWidth='50px';
        vinte.style.display ='none';
        vinte2.style.display ='none';
        vinte3.style.display ='none';
    } else if(men >= 11 &&men <=20){
        document.getElementById('vinte')
        document.getElementById('vinte2')
        document.getElementById('vinte3')
        pri.style.display='flex';
        seg.style.display='flex'
        pri.style.justifyContent='center'; 
        seg.style.justifyContent='center';
        seg.style.minWidth='50px';
        dez.style.display ='none';
        dez2.style.display ='none';
        dez3.style.display ='none';
    } else{;
        window.alert('erro')
    }
 }
}*/