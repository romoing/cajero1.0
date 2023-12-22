
let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", function (event) {
  localStorage.removeItem("loggedUser");  

  

  return (location.href = "./index.html");
  
});
console.log(loggedUser)
const usuariologueado= loggedUser.mail;
const saldologueado= loggedUser.saldo;
var saldocambiante=saldologueado;
const contenido= document.getElementById("numero");
const welcome= document.getElementById("welcome");

welcome.innerHTML = `<h5>  Bienvenido a BBVA: ${usuariologueado}</h5>`

numero.innerHTML = `<h1> tu saldo es : ${saldocambiante}</h1>`




console.log(usuariologueado);
console.log(saldocambiante);
alert("  iniciando sesion........... " + usuariologueado + "  welcome to BBVA ");



function  number() {
  const number1=parseInt(document.getElementById('cantidadtxt').value);
  if (number1+saldocambiante >= 991) {
    alert("no se puede tener mas de 990  revisa tu transaccion")

    document.getElementById("cantidadtxt").value=""
    document.getElementById("cantidadretiro").value="0"

    
  }
  if(number1+saldocambiante <= 990) {
      const total= number1+saldocambiante;
      alert("  deposito aplicado a " + usuariologueado + " depositaste la cantidad de "+ number1 + " tu saldo actual es " + total);

      document.getElementById("cantidadtxt").value=""
      document.getElementById("cantidadretiro").value="0"
      

      
      saldocambiante= total;
      numero.innerHTML = `<h1> tu saldo es : ${saldocambiante}</h1>`
      console.log(total);
      console.log(saldocambiante);
      


  }
  
    
}

function  number2() {
  const number2=parseInt(document.getElementById('cantidadretiro').value);
if (saldocambiante-number2 <10) {
  alert("no se puede tener menos de 10 en la cuenta  ingresa otra cantidad a retirar")

  document.getElementById("cantidadtxt").value=""
  document.getElementById("cantidadretiro").value="0"

} else {
  saldocambiante-number2 >=10;
  const total2= saldocambiante-number2;
  
  alert("Retiro aplicado a " + usuariologueado + " Retiraste la cantidad de "+ number2 + " tu saldo actual es " + total2);

 


numero.innerHTML = `<h1> tu saldo es : ${saldocambiante}</h1>` 
document.getElementById("cantidadtxt").value=""
document.getElementById("cantidadretiro").value="0"
  }

  
}

 function  number3() {
  const number3=parseInt(document.getElementById('cantidadretiro').value);
  
  alert(" BBVA siempre contigo " + usuariologueado + "  tu saldo actual es " + saldocambiante);

} 




