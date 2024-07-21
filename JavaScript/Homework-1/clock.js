let name = prompt("Adınızı Giriniz:");

let myName = document.querySelector("#myName");
myName.innerHTML = name;

function updateClock(){
    let date = new Date().toLocaleString('tr-TR'); // tarih saati al
    document.getElementById("myClock").innerHTML = date; 
}

updateClock();
setInterval(updateClock,1000);
