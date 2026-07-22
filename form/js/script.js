let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let addUser = document.getElementById("addBtn");
let delUser = document.getElementById("delBtn");
let updateUser = document.getElementById("updateBtn");
let form = document.getElementById("Form");
let userContainer = document.getElementById("userContainer");
let text = document.getElementById("text");
let users = [];

Form.addEventListener("submit", function (e) {
  e.preventDefault();
  let user = {
    name: e.target[0].value,
    email: e.target[1].value,
  };
  if (user.name.trim() == "" || user.email.trim() == "") {
    alert("please fill inputs");
    return;
  }
  users.push(user);
  console.table(users);
  addDiv();

  userEmail.value = "";
  userName.value = "";
});
function addDiv() {
    userContainer.innerHTML = "";
    users.forEach((item, i) => {
        var div = document.createElement("div");
    div.classList.add(
      "bg-secondary-subtle",
      "p-3",
      "m-3",
      "border",
      "rounded-2",
    );
    let h5 = document.createElement("h5");
    h5.innerText = `Name : ${item.name}`;
    let p = document.createElement("p");
    p.innerText = `Email : ${item.email}`;
    div.appendChild(h5);
    div.appendChild(p);
    userContainer.append(div);
  });
}
delUser.addEventListener("click", () => {
     if (users.length === 0) {
       alert("No users");
       return;
     }

  users.pop();
  addDiv();
});

let isUpdating = false;

updateUser.addEventListener("click", () => {
  if (!isUpdating) {
    if (users.length === 0) {
      alert("No users");
      return;
    }

    userName.value = users[users.length - 1].name;
    userEmail.value = users[users.length - 1].email;

    isUpdating = true;
    updateBtn.innerText='save'
} else {
    users[users.length - 1].name = userName.value;
    users[users.length - 1].email = userEmail.value;
    isUpdating = false;
    updateBtn.innerText = "update user";
    addDiv();
    userEmail.value = "";
      userName.value = "";
  }
}
);
window.addEventListener('scroll',(e)=>{
    if (window.scrollY > 300) {
      text.classList.remove("text-success");
      text.classList.add("text-danger");
    }
    else{
         text.classList.add("text-success");
         text.classList.remove("text-danger");
    }

})
let h1 = document.querySelector(".text-primary");
let i=0
let setInt =setInterval(()=>{
    h1.innerHTML=i
    if(i==50){
        clearInterval(setInt);
    }
i++
},100)


