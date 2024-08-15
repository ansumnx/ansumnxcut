function lost(msg) {
  document.getElementById("para").innerHTML = msg;
}
function recover() {
  let logo = document.getElementById("erroruser");
  let name = document.getElementById("username").value;
  let person = JSON.parse(localStorage.getItem("users")) || [];
  let username = person.find((user) => user.name === name);
  
  if (name.length === 0 || !username) {
    logo.style.display = "inline";
    lost("sign up!")
    setTimeout(() => {
      document.getElementById("username").value = "";
      logo.style.display = "none";
      lost("");
      window.location.href = "index.html";
    }, 2000);
  }
  if (username) {
    lost(`${username.password}`);
    document.getElementById("username").value = "";

    setTimeout(() => {
      lost("");
      window.location.href = "admin.html";
    }, 3000);
  }
}
