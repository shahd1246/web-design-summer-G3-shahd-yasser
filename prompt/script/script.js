let degree=prompt("Enter Your Degree")
if (degree != null && degree != "")
  if (degree >= 90 && degree <= 100) alert("A");
  else if (degree >= 80 && degree <= 90) alert("B");
  else if (degree >= 70 && degree <= 80) alert("C");
  else if(degree<70) alert("F");
  else alert("invalid input");
else alert("invalid input");