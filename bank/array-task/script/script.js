let courses = ["html", "css", "bootstap", "js"];
let user=prompt('which couse you want know its index?')
if(user!=""){
if(courses.includes(user))
    alert(courses.findIndex((item) => item == user));
else {
    courses.push(user);
    alert('couse added')
}
}
console.log(courses)