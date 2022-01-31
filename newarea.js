setTimeout(function() {
    document.getElementById("div8").innerHTML = "Temp is kind a hot but i can't wait for the next update !!";
    setTimeout(function(){
    console.log("Next update is going to be cool !!");
    window.location = "index.html";
},3000);
},5000);