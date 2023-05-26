//1
console.log(document.getElementById("age-table"));

//2
console.log(document.querySelectorAll("#age-table label"));

//3
console.log(document.getElementsByTagName("td")[0]);

//4
console.log(document.getElementsByName("search")[0]);

//5
console.log(document.getElementsByTagName("input")[0]);

//6
let inputs = document.getElementsByName("search")[0].querySelectorAll("input");
console.log(inputs[inputs.length - 1]);
