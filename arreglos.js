// ejercicio Uno: FALTA PASAR VALORES TDD

function multiplicar(array, numero)
{ resultado = array.reduce(function(total, num){
    return total * num;
  }, numero);
 return resultado;
}
 
//console.log(multiplicar([10,20], 5))

// ejercicio dos

function numeroCelulares(celulares,codigoValido)
{ return celulares.filter(function (depurador){
  var tresPrimerosNumeros = depurador.toString().substr(0,3);
  var tresUltimosNumeros = depurador.toString().substr(-3);
  return (tresPrimerosNumeros == codigoValido || tresUltimosNumeros == codigoValido);
})
} 
    
//console.log(numeroCelulares([784123123,355676784,3423543554], 784));
//ejercicio tres// RUNN

function multiplica (arr, numero){
 var arry = [];
 arr.forEach(function(_multiplos){ 
     if(_multiplos % numero == 0){  
         arry.push(_multiplos); 
     }
    })
 return arry;
}
//console.log(multiplica([2,10],5));
// ejercicio cuatro RUNNN


function dobleMasUno(arr,elemento)
{ var dobleUno = function(elemento){
    return elemento * 2 + 1;
}
return arr.map(dobleUno);
}
//console.log(dobleMasUno([2,3],2));
// ejercicio cinco RUNNN!!!


function temperaturaFahrenheit (arr)
{ var fahrenheit = function(celcius){
    return celcius*(9/5)+32 + "°" + "F";
}
    return arr.map(fahrenheit)
}

//console.log(temperaturaFahrenheit([5,4]));
// ejercicio seis RUUNNNN!!!

function arrMultiplica (arr){
    var resultado = 1;
    for (i=0; i< arr.length; i++){
        resultado *= arr[i];
    };
    return resultado;
}
//console.log (arrMultiplica([3,6]));
//ejercicio siete
var edad = [20, 16, 89, 6];
var añoActual = 2017;

function mayorEdad(edad){
  return edad >= 18;
}
var mayoresEdad = edad.filter(mayorEdad);

function anioNacimientoMayoresEdad(edad){
  return añoActual - edad;
};


var anioNacimiento = mayoresEdad.map(anioNacimientoMayoresEdad);
console.log(anioNacimiento);