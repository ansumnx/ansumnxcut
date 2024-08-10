const USERNAME = "ansumnxcut";
const USERPSWD = "ansumnxcut3112";
  
  document.getElementById("adminbtn").onclick = () => {
    window.location.href = "admin.html";
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
function mylogin() {
  let name = document.getElementById("user").value;
  let pswd = document.getElementById("pwd").value;
  // let rem = document.getElementById("Remember");
  let userer = document.getElementById("erroruser");
  let pswder = document.getElementById("errorpswd");

  if (name.length === 0) {
    userer.style.display = "inline";
    setTimeout(() => {
      userer.style.display = "none";
    }, 2000);
    return;
  } else if (pswd.length === 0) {
    pswder.style.display = "inline";
    hide.style.display ="none";
    setTimeout(() => {
      pswder.style.display ="none";
      hide.style.display ="inline";

    }, 2000);
    return;
  }
  // info1.information={username:name , userpswd:pswd};

  if (name == USERNAME && pswd == USERPSWD) {
    // usermsg("");
    // pswdmsg("");
    // setTimeout(() => {
    //   usermsg("");
    //   pswdmsg("");
    // }, 1000);
    window.location.href = "ansumnxcut.html";
  } else {
    if (name !== USERNAME) {
      userer.style.display = "inline";
      setTimeout(() => {
        userer.style.display ="none";
      }, 2000);
    }
    if (pswd !== USERPSWD) {
      hide.style.display = "none";
      pswder.style.display = "inline";
      setTimeout(() => {
        
        pswder.style.display = "none";
        hide.style.display = "inline";
      }, 2000);
    }
  }
}

// window.onload = function(){
//     let storeusername = localStorage.getItem("username");
//     let storepassword = localStorage.getItem("userpswd");
//     if(storeusername){
//         document.getElementById("user").value = storeusername;
//     }
//     if(storepassword)
//     {
//         document.getElementById("pwd").value = storepassword;
//     }
// }

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

function lost(msg) {
  document.getElementById("para").innerHTML = msg;
}

function recover() {
  let name = document.getElementById("username").value;
  if (name.length === 0) {
    lost("Enter UserName!");
  } else {
    if (name == USERNAME) {
      lost(USERPSWD);
      setTimeout(() => {
        window.location.href = "login.html";
      }, 3000);
    } else {
      lost("Check your UserName!");
    }
  }
  setTimeout(() => {
    lost("");
    document.getElementById("username").value = "";
  }, 3000);
}