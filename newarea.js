//setTimeout(function() {
  //  document.getElementById("div8").innerHTML = "Temp is kind a hot but i can't wait for the next update !!";
  //  setTimeout(function(){
  //  console.log("Next update is going to be cool !!");
  //  window.location = "index.html";
//},3000);
//},5000);

var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
pet_x = 20;
pet_y = 20;
block_img_width = 50;
block_img_height = 50;
var player_object = "";
var pet_object = "";
var block_img_object = "";
const music = new Audio('Recording.m4a');
array_1 = ["Shift+m to decress the size of the block","Shift+p to incress the size of the block.","Y for yellow brick", "W for wall", "L for light green block","G for grass block.", "T for wood.", "R for red block","D for dark green.", "C for stone","U for light block.","I for ice block","for 2 check it by your self !!","for X check it by your self !!","for j check it by your self","S for pasta .","B for bat (Be carful with that cricket bat .).","Z for pizza","To remove something press delete or reload the page.","controls for the player is up arrow,down arrow,right arrow, left arrow keys.","WARNING: DON'T PRESS THE 'K' ON YOUR KEYBOARD WHILE PLAYING 2D CRAFT !!","To Get Your Pet Back Press 'M' on your keyboard.","N For Obi","Thanks For Playing 2D CRAFT."]

//fabric functions start here.//
function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}

function pet_update() {
    fabric.Image.fromURL("pet(1)..jpg",function(Img){
        pet_object = Img;
        pet_object.scaleToWidth(110);
        pet_object.scaleToHeight(100);
        pet_object.set({
            top:pet_y,
            left:pet_x
        });
        canvas.add(pet_object);

    });
}

function new_image(get_image) 
   {
    fabric.Image.fromURL(get_image, function(Img) { 
        block_img_object = Img; 
        block_img_object.scaleToWidth(block_img_width); 
        block_img_object.scaleToHeight(block_img_height); 
        block_img_object.set({ 
            top:player_y, 
            left:player_x 
        }); 
        canvas.add(block_img_object); 
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keycode;
    console.log(keyPressed)
    if(e.shiftKey == true && keyPressed == '80') {
        console.log("shift key & p pressed together.");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("Current_Width").innerHTML= block_img_width;
        document.getElementById("Current_Height").innerHTML= block_img_height;

    }
    if(e.shiftKey == true && keyPressed == '77') {
        console.log("shift key & m pressed together.");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("Current_Width").innerHTML= block_img_width;
        document.getElementById("Current_Height").innerHTML= block_img_height;
        
    }
    if(keyPressed == '38'){
        up();
        console.log("up");

    }
    if(keyPressed == '40'){
        down();
        console.log("down");
        
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
        
    } if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '87'){
      block + 1;
        new_image("wall.jpg");
        console.log("w");
        setTimeout(function(){
            div2.style.display = "none";
        }, 5000);
    }

}


//fabric function ends here.//