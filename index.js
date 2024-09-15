document.getElementById("adminbtn").onclick = () => {
  window.location.href = "admin.html";
};

let usererror = document.getElementById("erroruser");
let pwderror = document.getElementById("errorpswd");
let showpwd = document.getElementById("showpswd");
let hidepwd = document.getElementById("hidepswd");

let users = JSON.parse(localStorage.getItem("users")) || [];

function mylogin() {
  let name = document.getElementById("user").value;
  let pswd = document.getElementById("pwd").value;
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let username = users.some((value) => value.name === name);
  if (name.length === 0 || name === username.name) {
    usererror.style.display = "inline";
    setTimeout(() => {
      usererror.style.display = "none";
    }, 2000);
  } else if (pswd.length === 0) {
    hidepwd.style.display = "none";
    pwderror.style.display = "inline";
    setTimeout(() => {
      pwderror.style.display = "none";
      hidepwd.style.display = "inline";
    }, 2000);
  } else {
    const userInfo = {
      name: name,
      password: pswd,
    };

    users.push(userInfo);
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("user").value = "";
    document.getElementById("pwd").value = "";

    window.location.href = "ansumnxcut.html";
  }
}

let pwd = document.getElementById("pwd");

hidepwd.addEventListener("click", function () {
  if (pwd.type === "password") {
    pwd.type = "text";
    hidepwd.style.display = "none";
    showpwd.style.display = "inline";
  }
});
showpwd.addEventListener("click", function () {
  if (pwd.type === "text") {
    pwd.type = "password";
    showpwd.style.display = "none";
    hidepwd.style.display = "inline";
  }
});

window.addEventListener("load", function () {
  document.getElementById("user").value = "";
  document.getElementById("pwd").value = "";
  
});
