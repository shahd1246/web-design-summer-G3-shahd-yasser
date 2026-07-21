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

console.log(users)

function addUsers() {
  let UserId = Number(prompt("enter user id"));
  let existedId = users.some((item) => item.id == UserId);
  if(existedId){
    alert('Existed id')
    return
  }
    let UserName = prompt("enter user name");
    let Userbalance = Number(prompt("enter user balance"));
    users.push({
      id: UserId,
      name: UserName,
      balance: Userbalance,
    });
}
addUsers();
addUsers();
addUsers();

console.log(users);

function editUserBalance() {
  let editById = prompt("enter the id which you want edit its balance");
  let editedBalance =Number(prompt("enter the new balance"));

  let editUser = users.findIndex((item) => item.id == editById);
   users[editUser].balance = editedBalance;
}
editUserBalance();

console.log(users);

function transferBalance(){
    let fromId=Number(prompt('Enter the id you want transfer from'))
    let toId=Number(prompt('Enter the id you want transfer to'))
    let newBalance=Number(prompt('Enter the amount you want transfer'))
    let fromIndx=users.findIndex(item=> item.id===fromId)
    let toIndx=users.findIndex(item=> item.id===toId)
    users[fromIndx].balance-=newBalance
    users[toIndx].balance+=newBalance
}
transferBalance()
console.log(users)

function deleteUser(){
    let deletedUser=Number(prompt('Inter users id who you want remove'))
    let deleteIndex=users.findIndex(item=> item.id===deletedUser)
    users.splice(deleteIndex,1);
    
}
deleteUser()
console.log(users);
