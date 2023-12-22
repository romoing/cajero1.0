let oldUser = JSON.parse(localStorage.getItem("loggedUser"));
if (oldUser) {
  location.href = "./home.html";
}

const users = [
  { mail: "Mali", password: "123", saldo: 200 },
  { mail: "Gera", password: "123", saldo: 290 },
  { mail: "Maui", password: "123", saldo: 67 },
  { mail: "admin", password: "admin", saldo: 100 },

];

const user1 = { mail: "admin@gmail.com", password: "admin" };

const userInput = document.getElementById("user");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

/* Evento de escucha */
let loggedUser = null;
let userValue = "";
let passValue = "";

userInput.addEventListener("change", function (event) {
  userValue = event.target.value;
  console.log(userValue);
});

passwordInput.addEventListener("change", function (event) {
  passValue = event.target.value;
  console.log(passValue);
});



loginButton.addEventListener("click", function (event) {
  let foundUser = users.find(
    (user) => user.mail === userValue && user.password === passValue
  ); //{ mail: "lauta@gmail.com", password: "abc123" }

  console.log("foun user", foundUser);

  if (foundUser) {
    loggedUser = foundUser;

    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    
   /*  alert(" logueado correctamente"); */
   
    return (location.href = "./home.html");
    
   
    

  }else {
        alert(" Usuario o Contraseña  incorrecto");
        document.getElementById("user").value=""
       document.getElementById("password").value=""
      }
});
