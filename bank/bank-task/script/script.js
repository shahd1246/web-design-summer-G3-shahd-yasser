let users = [
  {
    id: 1,
    name: "shahd",
    balance: 1600,
  },
  {
    id: 2,
    name: "maryam",
    balance: 2000,
  },
  {
    id: 3,
    name: "nada",
    balance: 1000,
  },
];

localStorage.setItem("users", JSON.stringify(users));
let newUsers = JSON.parse(localStorage.getItem("users"));

function addUsers() {
  let UserId = Number(prompt("enter user id"));
  let existedId =newUsers.some((item) => item.id == UserId);
  if(existedId){
    alert('Existed id')
    return
  }
    let UserName = prompt("enter user name");
    let Userbalance = Number(prompt("enter user balance"));
    newUsers.push({
      id: UserId,
      name: UserName,
      balance: Userbalance,
    });
}
addUsers();
addUsers();
addUsers();
localStorage.setItem("users", JSON.stringify(newUsers));

function editUserBalance() {
  let editById = prompt("enter the id which you want edit its balance");
  let editedBalance =Number(prompt("enter the new balance"));

  let editUser = newUsers.findIndex((item) => item.id == editById);
   newUsers[editUser].balance = editedBalance;
}
editUserBalance();
localStorage.setItem("users", JSON.stringify(newUsers));


function transferBalance(){
    let fromId=Number(prompt('Enter the id you want transfer from'))
    let toId=Number(prompt('Enter the id you want transfer to'))
    let newBalance=Number(prompt('Enter the amount you want transfer'))
    let fromIndx=newUsers.findIndex(item=> item.id===fromId)
    let toIndx = newUsers.findIndex((item) => item.id === toId);
    newUsers[fromIndx].balance -= newBalance;
    newUsers[toIndx].balance += newBalance;
}
transferBalance()
localStorage.setItem("users", JSON.stringify(newUsers));


function deleteUser(){
    let deletedUser=Number(prompt('Inter users id who you want remove'))
    let deleteIndex = newUsers.findIndex((item) => item.id === deletedUser);
    newUsers.splice(deleteIndex, 1);
    
}
deleteUser()
localStorage.setItem("users", JSON.stringify(newUsers));


console.log(newUsers);
