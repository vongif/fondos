let introducir = prompt("Ingresar monto a invertir")
let saldo = document.getElementById("resul").innerHTML = introducir
let valorFondos = document.getElementById("valorFondo").innerHTML 
let calculo = document.getElementById("final").innerHTML 

let perfilInver = ["Conservador","Moderado","Arriesgado"]

function invertir(){
    if ( saldo >= 0 &&  saldo <= 10000){
       document.getElementById("perfilInversor").innerHTML = perfilInver[0]
    }else if(saldo > 10000 && saldo <= 50000){
       document.getElementById("perfilInversor").innerHTML = perfilInver[1]
    }else{
       document.getElementById("perfilInversor").innerHTML = perfilInver[2]
    }  
}    
invertir()


localStorage.setItem("resul",saldo)




    

/*
//----------------------------------------------------------------------------------------------------

var elegirFondo = prompt("Elegir un fondo del 1 al 4")

       fondoBonos1 = (Math.random() * (10 - 1) - 1).toFixed(3)
       fondoEquilibrado = (Math.random() * (10 - 1) - 1).toFixed(3)
       fondoArgenx = (Math.random() * (10 - 1) - 1).toFixed(3)
       fondoLeliq = (Math.random() * (10 - 1) - 1).toFixed(3)

      
       alert("1-" + "Cotizacion de hoy" + " " + "Bonos1" + " = " + fondos2[0])
       alert("2-" + "Cotizacion de hoy" + " " + "Fondo Equilibrado" + " = " + fondos2[1])
       alert("3-" + "Cotizacion de hoy" + " " + "Fondo Argenx" + " = " + fondos2[2])
       alert("4-" + "Cotizacion de hoy" + " " + "Fondo Leliq" + " = " + fondos2[3])
       

       var resultUno = (inversion * fondoBonos1) / 100
       var resultDos = (inversion * fondoEquilibrado) / 100
       var resultTres = (inversion * fondoArgenx) / 100
       var resultCuatro = (inversion * fondoLeliq) / 100



       if (elegirFondo == 1) {
              var saldo = resultUno + inversion
              alert("El resultado de su inversion fue" + "= $" + resultUno.toFixed(3))
       } else if (elegirFondo == 2) {
              var saldo = resultDos + inversion
              alert("El resultado de su inversion fue" + "= $" + resultDos.toFixed(3))
       } else if (elegirFondo == 3) {
              var saldo = saldo + inversion
              alert("El resultado de su inversion fue" + "= $" + resultTres.toFixed(3))
       } else if (elegirFondo == 4) {
              var saldo = resultCuatro + inversion
              alert("El resultado de su inversion fue" + "= $" + resultTres.toFixed(3))
       } else {
              alert("Elegir un fondo del 1 al 4")
       }

       //---------------------------------------------------------------------------------------------------

       console.log("Resultados de cotizacion de fondos de hoy" + " / " + fondoBonos1 + "/" + fondoEquilibrado + "/" + fondoArgenx + "/" + fondoLeliq)

      // alert("Saldo Actual" + " =" + saldo)



console.log("Su saldo es de " + " =" + saldo)

var deposito = prompt("Desea agregar capital a su inversion? Deposite un monto")
var nuevoSaldo = 0


function depositar() {

       if (deposito > 0) {
              nuevoSaldo = parseFloat(saldo) + parseFloat(deposito)
       } else {
              console.log("No se realizo deposito")
       }
       console.log("Saldo Actual" + "=" + parseFloat(nuevoSaldo))
       alert("Saldo Actual" + " =" + parseFloat(nuevoSaldo))

}
depositar()

//----------------------------------------------------------------------------

//var elegirFondo = prompt("Elegir un fondo del 1 al 4")

function infoFondos3() {

       const fondos2 = [fondoBonos1 = (Math.random() * (10 - 1) - 1).toFixed(3),
       fondoEquilibrado = (Math.random() * (10 - 1) - 1).toFixed(3),
       fondoArgenx = (Math.random() * (10 - 1) - 1).toFixed(3),
       fondoLeliq = (Math.random() * (10 - 1) - 1).toFixed(3)]


       
       alert("1-" + "Cotizacion de hoy" + " " + "Bonos1" + " = " + fondos2[0])
       alert("2-" + "Cotizacion de hoy" + " " + "Fondo Equilibrado" + " = " + fondos2[1])
       alert("3-" + "Cotizacion de hoy" + " " + "Fondo Argenx" + " = " + fondos2[2])
       alert("4-" + "Cotizacion de hoy" + " " + "Fondo Leliq" + " = " + fondos2[3])
       

       var resultUno = (inversion * fondoBonos1) / 100
       var resultDos = (inversion * fondoEquilibrado) / 100
       var resultTres = (inversion * fondoArgenx) / 100
       var resultCuatro = (inversion * fondoLeliq) / 100



       if (elegirFondo == 1) {
              nuevoSaldoUno = resultUno + nuevoSaldo
              //alert("El resultado de su inversion fue" + "= $" + resultUno.toFixed(3))
       } else if (elegirFondo == 2) {
              nuevoSaldoUno = resultDos + nuevoSaldo
              //alert("El resultado de su inversion fue" + "= $" + resultDos.toFixed(3))
       } else if (elegirFondo == 3) {
              nuevoSaldoUno = saldo + nuevoSaldo
              //alert("El resultado de su inversion fue" + "= $" + resultTres.toFixed(3))
       } else if (elegirFondo == 4) {
              nuevoSaldoUno = resultCuatro + nuevoSaldo
              //alert("El resultado de su inversion fue" + "= $" + resultTres.toFixed(3))
       } else {
              //alert("Elegir un fondo del 1 al 4")
       }


}
infoFondos3()

//---------------------------------------------------------------------------------------------------

console.log("Resultados de cotizacion de fondos de hoy" + " / " + fondoBonos1 + "/" + fondoEquilibrado + "/" + fondoArgenx + "/" + fondoLeliq)

//alert("Saldo Actual" + " =" + nuevoSaldoUno)


//var extraccion = prompt("Desea extraer capital? coloque monto o teclee el numero 0 en caso que no. ")
var nuevoSaldoDos = 0

function extraer() {

       if (extraccion <= nuevoSaldo) {
              nuevoSaldoDos = parseFloat(nuevoSaldoUno) - parseFloat(extraccion)
       } else if (extraccion == 0) {
              //alert("No retira capital")
       } else { console.log("error") }
}
extraer()

//alert("Su Saldo es de" + "=" + "$" + nuevoSaldoDos)
console.log("Su Saldo es de" + "=" + "$" + nuevoSaldoDos)
console.log("Su inversion fue de " + " = " + inversion)



var fondoBonos1 = document.getElementById("fondoBonos1").innerHTML = (Math.random() * (10 - 1)- 5).toFixed(3)        
var fondoEquilibrado = document.getElementById("fondoEquilibrado").innerHTML = (Math.random() * (10 - 1) - 5).toFixed(3)
var fondoLeliq =  document.getElementById("fondoLeliq").innerHTML = (Math.random() * (10 - 1) - 5).toFixed(3)
var fondoPatacon =  document.getElementById("fondoPatacon").innerHTML = (Math.random() * (10 - 1) - 5).toFixed(3)
var fondoArgenx =  document.getElementById("fondoArgenx").innerHTML = (Math.random() * (10 - 1) - 5).toFixed(3)
var fondoRoblox =  document.getElementById("fondoRoblox").innerHTML = (Math.random() * (10 - 1) - 5).toFixed(3)

function decidir(){
       let seleccion = document.querySelectorAll('input[name=fond]');
       let muestra   = document.getElementById('res').innerHTML
       
       if (seleccion[0].checked) {
         muestra.innerHTML = (fondoBonos1*saldo)/100
       } else if (seleccion[1].checked) {
         muestra.innerHTML = (fondoEquilibrado*saldo)/100
       } else if (seleccion[2].checked) {
              muestra.innerHTML = (fondoLeliq*saldo)/100
       }else if (seleccion[3].checked) {
              muestra.innerHTML = (fondoPatacon*saldo)/100
       }else if (seleccion[4].checked) {
              muestra.innerHTML = (fondoArgenx*saldo)/100
       }  else if (seleccion[5].checked) {
              muestra.innerHTML = (fondoRoblox*saldo)/100     
       }else {
              muestra.innerHTML = 'Ninguna opción elegida';
       }
}
decidir()


/*
function calc() {

       var value = document.getElementById("ingInversion").value;
   
      var saldo = document.getElementById("resul").innerHTML = value
       document.getElementById('resul').innerHTML = saldo;
       sessionStorage.setItem('saldo',saldo)
}
calc()
*/
