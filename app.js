
let saldo ;
let calculo = document.getElementById("final").innerHTML 

let perfilInver = ["Conservador","Moderado","Arriesgado"]

function invertir(){

       saldo = document.getElementById("resul").value 
    if ( saldo >= 0 &&  saldo <= 10000){
       document.getElementById("perfilInversor").innerHTML = perfilInver[0]
    }else if(saldo > 10000 && saldo <= 50000){
       document.getElementById("perfilInversor").innerHTML = perfilInver[1]
    }else{
       document.getElementById("perfilInversor").innerHTML = perfilInver[2]
    }  
}    
invertir()


let billeteraTotal = 0
let billetera1 = 0
let billetera2 = 0
let billetera3 = 0
const chart = 0

function decidir() {
       
       let valorfondo = document.getElementById("valorFondo").innerHTML

       let fondoBonos1 = document.getElementById("fondoBonos1").innerHTML = (Math.random() * (10 - 1) - 5).toFixed(3)
       let fondoEquilibrado = document.getElementById("fondoEquilibrado").innerHTML = (Math.random() * (10 - 1) - 5).toFixed(3)
       let fondoLeliq = document.getElementById("fondoLeliq").innerHTML = (Math.random() * (10 - 1) - 5).toFixed(3)
       let fondoPatacon = document.getElementById("fondoPatacon").innerHTML = (Math.random() * (10 - 1) - 5).toFixed(3)
       let fondoArgenx = document.getElementById("fondoArgenx").innerHTML = (Math.random() * (10 - 1) - 5).toFixed(3)
       let fondoRoblox = document.getElementById("fondoRoblox").innerHTML = (Math.random() * (10 - 1) - 5).toFixed(3)
   
                   
           var fond = document.getElementById("tipo_fondo")
           var selected = fond.options[fond.selectedIndex].value
           document.getElementById("mensajeValor").innerHTML = selected
          
          
           if(selected == 1){document.getElementById("valorFondo").innerHTML = ((fondoBonos1 * saldo) / 100).toFixed(3)}
           else if(selected == 2){document.getElementById("valorFondo").innerHTML = ((fondoEquilibrado * saldo) / 100).toFixed(3)}
           else if(selected == 3){document.getElementById("valorFondo").innerHTML= ((fondoLeliq * saldo) / 100).toFixed(3)}
           else if(selected == 4){document.getElementById("valorFondo").innerHTML =((fondoPatacon * saldo) / 100).toFixed(3)}
           else if(selected == 5){document.getElementById("valorFondo").innerHTML = ((fondoArgenx * saldo) / 100).toFixed(3)}
           else if(selected == 6){document.getElementById("valorFondo").innerHTML = ((fondoRoblox * saldo) / 100).toFixed(3)}
           else{document.getElementById("valorFondo").innerText = "Selecciona un Fondo"}
         
      

       localStorage.setItem('saldo', saldo)
       localStorage.setItem('valorFondo',valorfondo)
       
       let billetera1 = Number(localStorage.getItem('saldo'))
       let billetera2 = localStorage.getItem('calculo')
       let billetera3 = Number(localStorage.getItem('valorFondo'))
       let sumas = Number(billetera1) + Number(billetera3)
       document.getElementById("final").innerHTML = sumas      
       localStorage.setItem('sumas',sumas)
                     


 
  
const labels = [
   'Bonos1','Equilibrado','Leliq','Patacon','Argenx','Roblox'];
   const data = {
      labels: labels,
      datasets: [{
        label: 'Cotizacion',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [fondoBonos1,fondoEquilibrado,fondoLeliq,fondoPatacon,fondoArgenx,fondoRoblox],
      }]
    }; 
    const config = {
      type: 'line',
      data: data,
      options: {}
    };
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );     
    


    }




   

let datosArray = localStorage.getItem('sumas')

let arreglo = JSON.parse(datosArray)

for (let index = 0; index < array.length; index++) {
 
      let array = []
      arreglo = arreglo.concat(array)
     
)

var nuevoArregloString = JSON.stringify(arreglo)
localStorage.setItem('sumas', nuevoArregloString)



