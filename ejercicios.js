//ejercicio1: suma de 2 argumentos.

function sumar(a,b){    
    let resultado = a+b;
    console.log("la suma es :" +resultado);


}

sumar(5, 3);

/*--------------------------------*/

//ejercicio2: verify numero par o impar.

function esPar(num){

    if(num % 2 === 0){

        console.log(num+"es par.")

    } else {

        console.log(num + "es impar.")

    }

}

esPar (7)

/*--------------------------------*/

//ejercicio3: calcular el mayor de tres numeros

function mayorDeTres(a,b,c){

    let mayor = a;

    if (b > mayor ){

        mayor = b;
    }

    if (c > mayor ){

        mayor = c;
    }

    console.log("el mayor es: " + mayor);


}

mayorDeTres(5, 8, 3);

/*--------------------------------*/

//ejercicio4 : promedio de 4 examenes.

function promedio(examen1, examen2, examen3, examen4){
    
    let suma = examen1 + examen2 + examen3 + examen4;
    
    let promedio = suma / 4;
    
    console.log("El promedio es: " + promedio);

}

promedio(17, 18, 16, 20);   


/*--------------------------------*/

//ejercicio5 : calcular area de un rectangulo.

function areaRectangulo(base,altura){

    let area = base * altura;

    console.log("el area del rectangulo es : " +area);


}

areaRectangulo(5,7);

/*--------------------------------*/

//ejercicio6: calcular area de un triangulo

function areaTriangulo(base, altura){

    let area = base * altura / 2;

    console.log("el area del triangulo es : " +area);

}

    areaTriangulo(8,7);

/*--------------------------------*/


// ejercicio7: calcular el area de la circunferencia. (π = 3.14)
function areaCircunferencia(radio) {
    let area = 3.14 * radio * radio;
    console.log("El área de la circunferencia es: " + area);
}

    areaCircunferencia(4);

/*--------------------------------*/

// ejercicio8: crear un programa que al ingresar un número diga si es positivo, negativo o cero.
function determinarSigno(numero) {
    if (numero > 0) {
        console.log(numero + " es positivo.");
    } else if (numero < 0) {
        console.log(numero + " es negativo.");
    } else {
        console.log(numero + " es cero.");
    }
}

    determinarSigno(-5);
    
/*--------------------------------*/

// ejercicio9: solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.
function menorDeDos(a, b) {
    if (a < b) {
        console.log(a + " es menor que " + b);
    } else {
        console.log(b + " es menor que " + a);
    }
}

    menorDeDos(3, 7);

/*--------------------------------*/

// ejercicio10: solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario el mensaje si “x número es o no divisible entre 2” 

function divisibleEntreDos(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es divisible entre 2.");
    } else {
        console.log(numero + " no es divisible entre 2.");
    }
}

    divisibleEntreDos(8);

/*--------------------------------*/    

// ejercicio11: verificar si un día es fin de semana o día laborable.
function diaDeLaSemana(dia) {
    if (dia === "sábado" || dia === "domingo") {
        console.log(dia + " es fin de semana.");
    } else {
        console.log(dia + " es día laborable.");
    }
}

    diaDeLaSemana("lunes");

/*--------------------------------*/    

// ejercicio12: verificar si un número es divisible por 3 y por 5.
function divisiblePorTresYCinco(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log(numero + " es divisible por 3 y por 5.");
    } else {
        console.log(numero + " no es divisible por 3 y por 5.");
    }
}

    divisiblePorTresYCinco(15);

/*--------------------------------*/

// ejercicio13: determinar si un número es múltiplo de 2, 3 o ambos.
function multiploDeDosOTres(numero) {
    if (numero % 2 === 0 && numero % 3 === 0) {
        console.log(numero + " es múltiplo de 2 y de 3.");
    } else if (numero % 2 === 0) {
        console.log(numero + " es múltiplo de 2.");
    } else if (numero % 3 === 0) {
        console.log(numero + " es múltiplo de 3.");
    } else {
        console.log(numero + " no es múltiplo ni de 2 ni de 3.");
    }
}

    multiploDeDosOTres(6);

/*--------------------------------*/    

// ejercicio14: la empresa requiere determinar la edad de las personas que solicitan trabajo, al realizar la entrevista sólo se les pregunta el año en que nacieron.
function determinarEdad(anoNacimiento) {
    const anoActual = new Date().getFullYear();
    let edad = anoActual - anoNacimiento;
    console.log("La edad es: " + edad + " años.");
}

    determinarEdad(1990);

/*--------------------------------*/

// ejercicio15: se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. 

function calcularBono(anos) {
    let bono;

    if (anos >= 1 && anos <= 5) {
        bono = anos * 100;
    } else if (anos > 5) {
        bono = 1000;
    } else {
        bono = 0;
    }

    console.log("El bono es: $" + bono);
}

    calcularBono(3);

 

// ejercicio16: determinar si una persona puede votar con base en su edad en las próximas elecciones.
function puedeVotar(edad) {
    if (edad >= 18) {
        console.log("La persona puede votar.");
    } else {
        console.log("La persona no puede votar.");
    }
}

    puedeVotar(22);