let name;


document.getElementById("btn").onclick = function(){
    name = document.getElementById("input").value;
    console.log(name,",You are gay!");
    document.getElementById("h1").innerHTML = name + ", You are gay!";
}