


document.getElementById("userbtn").onclick = () => {
  window.location.href = "index.html";
};


function usermsg(msg) {
  document.getElementById("user").value = msg;
}
function pswdmsg(msg) {
  document.getElementById("pwd").value = msg;
}

let val = document.getElementById("pwd");
let show = document.getElementById("showpswd");
let hide = document.getElementById("hidepswd");
let userer = document.getElementById("erroruser");
let pswder = document.getElementById("errorpswd");

function mylogin() {
  let name = document.getElementById("user").value;
  let pswd = document.getElementById("pwd").value;
  let person = JSON.parse(localStorage.getItem('users')) || [];
  let admin = person.find(user => user.name === name && user.password === pswd)


  if (name.length === 0 || !admin) {
    userer.style.display = "inline";
    setTimeout(() => {
      userer.style.display = "none";
    }, 2000);
    return;
  }
   else if (pswd.length === 0 || !admin) {
       hide.style.display = "none";
       pswder.style.display = "inline";
    setTimeout(() => {
      pswder.style.display = "none";
      hide.style.display = "inline";
    }, 2000);
    return;
  }

  if (admin) {
    usermsg("");
    pswdmsg("");
    setTimeout(() => {
      usermsg("");
      pswdmsg("");
    }, 1000);
    window.location.href = "data.html";
  }
}

hide.addEventListener("click", function () {
  if (val.type === "password") {
    val.type = "text";
    hide.style.display = "none";
    show.style.display = "inline";
  }
});

show.addEventListener("click", function () {
  if (val.type === "text") {
    val.type = "password";
    show.style.display = "none";
    hide.style.display = "inline";
  }
});

function lostpassword() {
    window.location.href = "lostpswd.html";
  }

  window.addEventListener("load", function () {
    document.getElementById("user").value = "";
    document.getElementById("pwd").value = "";
    
  });
