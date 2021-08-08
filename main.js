var array = ["all of us.jpeg", "me with papdu papdu.jpeg", "me with mmmmmmmmmmammmmmmma.jpeg", "Best Bro.best.jpeg", "Me!!!.jpeg"];
var names = ["Family!", "Bijender Singh", "Meena Singh", "Ansh Dedha", "Advit Dedha"];
var i = 0;
function next(){
    i++;
    if(i > 4){
        i = 0;
    }
    var current = array[i];
    var name = names[i];
    document.getElementById("img").src = current;
    document.getElementById("div").innerHTML = name;
}