let showlist = document.getElementById("list");
let lists = document.getElementById("showlist");
let showdata = document.getElementById("userinfo");

showlist.addEventListener('mouseover' , function(){
  let data = JSON.parse(localStorage.getItem('users'));
  showdata.innerHTML = "";
  data.forEach((user , index) => {
    let row = `
    <tr>
     <td>${index+1}</td>
     <td>${user.name}</td>
     <td>${user.password}</td>
    </tr>
    `;
         showdata.innerHTML += row;
  });
   lists.style.display  = "flex";
})

showlist.addEventListener("mouseleave" , function(){
    lists.style.display = "none";
})
