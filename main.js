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
var block = "";
array_2 = ["Added New Blcoks","Added New Entities","And Many More things","And Many For Features Too.","Don't Forget To See The Instruction For Controls."]

//Fabric Functions Start Here.//

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

//Fabric Functions Ends Here.//

//KeyPressed Events Start Here.//

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

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
    if(keyPressed == '71'){
         block + 1;
        new_image("ground.png");
        console.log("g");
        setTimeout(function(){
            div2.style.display = "none";
        }, 5000);
    }
    if(keyPressed == '76'){
         block + 1;
        new_image("light_green.png");
        console.log("l");
        setTimeout(function(){
            div2.style.display = "none";
        }, 5000);
    }
    if(keyPressed == '84'){
       block + 1;
        new_image("trunk.jpg");
        console.log("t");
        setTimeout(function(){
            div2.style.display = "none";
        }, 5000);
    }
    if(keyPressed == '82'){
         block + 1;
        new_image("roof.jpg");
        console.log("r");
        setTimeout(function(){
            div2.style.display = "none";
        }, 5000);
    }
    if(keyPressed == '89'){
       block + 1;
        new_image("yellow_wall.png");
        console.log("y");
        setTimeout(function(){
            div2.style.display = "none";
        }, 5000);
    }
    if(keyPressed == '68'){
         block + 1;
        new_image("dark_green.png");
        console.log("d");
        setTimeout(function(){
            div2.style.display = "none";
        }, 5000); 
    }
    if(keyPressed == '67'){
         block + 1;
        new_image("cloud.jpg");
        console.log("c");
        setTimeout(function(){
            div2.style.display = "none";
        }, 5000);
    }
    if(keyPressed == '85'){
        block + 1;
        new_image("unique.png");
        console.log("u");
        setTimeout(function(){
            div2.style.display = "none";
        }, 5000);
    }
    if(keyPressed == '46') {
        canvas.remove(block_img_object);
    }
    if(keyPressed == '86') {
        block = block + 1;
        new_image("");
        console.log("v");
        setTimeout(function(){
            div2.style.display = "none";
        }, 5000);
    }
    if(keyPressed == '73'){
      block + 1;
        new_image("ice-cube-block-500x500.jpg");
        console.log("you pressed i , So its ice time !!")
        document.getElementById("div2").innerHTML="Cool Cool Ice .";
        div2.style.display= "block";
    }
    if(keyPressed == '88'){
      block + 1;
        canvas.remove(player_object);
        console.log("lol you got trolled !!");
        document.getElementById("div2").innerHTML="Your Eliminated (Get Trolled Hahahhaha).";
        setTimeout(function(){
            div2.style.display = "none";
        }, 5000);
        div2.style.display= "block";
     
    }
    if(keyPressed == '50'){
         block + 1;
        document.getElementById("div2").innerHTML="Share your ideas at 2dcraftis@gmail.com !!";
        setTimeout(function(){
            div2.style.display = "none";
        }, 10000);
        div2.style.display= "block";
        console.log("share your ideas at 2dcraftis@gmail.com!!")
    }
    if(keyPressed == '83'){
         block + 1;
        new_image("download (2).jpeg");
        document.getElementById("div2").innerHTML="Yummy Yummy in my tummy.";
        setTimeout(function(){
            div2.style.display = "none";
            canvas.remove(block_img_object);
        }, 3000);
        div2.style.display= "block";
        console.log("you  pressed p and its time for some pasta.")
    }
    if(keyPressed == '90') {
        block = block + 1;
        new_image("pizza..jpg");
        document.getElementById("div2").innerHTML="Yes Pizza, Yum Yum.";
        setTimeout(function(){
            div2.style.display = "none";
            canvas.remove(block_img_object);
        }, 3000);
        div2.style.display= "block";
        console.log("you pressed z and here is your pizza !!");
    }
    if(keyPressed == '66'){
      block + 1;
        canvas.remove(player_object);
        new_image("bat..jpeg");
        document.getElementById("div2").innerHTML="You Got Eliminated (Coz The Cricket Bat Hit You.)."
        console.log("you pressed b and here is a bat for you .")
        setTimeout(function(){
            div2.style.display = "none";
            canvas.remove(block_img_object);
        }, 5000);
        div2.style.display= "block";
    }

    if(keyPressed == '77'){
        music.play();
        document.getElementById("div2").innerHTML = "Jadoo: Here is your cute puppy.";
        pet_update();
        console.log("Jadoo gave you back your pet now try calling jadoo by pressing 'J'.")
        setTimeout(function(){
            div2.style.display = "none";
        }, 5000);
    }
    if(keyPressed == '70'){
        new_image("download (4).jpeg");
        document.getElementById("div2").innerHTML = "Your Pet Love The Food.";
        setTimeout(function(){
            div2.style.display = "none";
            canvas.remove(block_img_object);
        }, 3000);
        div2.style.display= "block";
    }
    if(keyPressed == '79'){
        new_image("dog_food..jpg");
        document.getElementById("div2").innerHTML = "Your Pet Love The Food.";
        setTimeout(function(){
            div2.style.display = "none";
            canvas.remove(block_img_object);
        }, 3000);
        div2.style.display= "block";
    }
    if(keyPressed == '78'){
        new_image("obi..png");
        document.getElementById("div2").innerHTML = "I am strong boy !!";
        setTimeout(function(){
            div2.style.display = "none";
        }, 5000);
        console.log("Obi is a strong boy but not in 2D CRAFT!!.");
    }
    if(keyPressed == '192'){
        block_img_height = 100;
        block_img_width = 100;
        new_image("Screenshot 11-01-2022 12_59_46 (2).png");
        document.getElementById("div2").innerHTML = "What Do You Think Cool Right ? (It Can Be Real Or I Can Be Fake.)."
        setTimeout(function(){
            canvas.remove(block_img_object);
            block_img_height = 50;
            block_img_width = 50;
            div2.style.display = "none";
        }, 3000);
        console.log("Real Or Fake ?");
    }
    if(keyPressed == '73') {
        img = ["","","","",""];
    }
}

//keyPressed Events Ends Here//

//Function Starts Here.//

function up() {
    if(player_y>=0){
        player_y = player_y - block_img_height;
        console.log("block image height ="+block_img_height);
        console.log("when up key is pressed, x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
        document.getElementById("div2").innerHTML="Thanks For Playing 2D CRAFT (I will try my best to make it more better).";
        setTimeout(function(){
            div2.style.display = "none";
        }, 10000);
        H_4.style.display = "none";
    }
    if(pet_y>= 0){
        pet_y = Math.floor(Math.random() * 450) + 1;
        canvas.remove(pet_object);
        pet_update();
    }
}

function down() {
    if(player_y<=500){
        player_y = player_y + block_img_height;
        console.log("block image height ="+block_img_height);
        console.log("when up key is pressed, x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
        document.getElementById("div2").innerHTML="Thanks For Playing 2D CRAFT (I will try my best to make it more better).";
        setTimeout(function(){
            div2.style.display = "none";
        }, 10000);
        H_4.style.display = "none";
    }
    if(pet_y<=500){
        pet_y = Math.floor(Math.random() * 450) + 1;
        canvas.remove(pet_object);
        pet_update();
    }
}

function left() {
    if(player_x>=0){
        player_x = player_x - block_img_height;
        console.log("block image height ="+block_img_height);
        console.log("when up key is pressed, x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
        document.getElementById("div2").innerHTML="Thanks For Playing 2D CRAFT (I will try my best to make it more better).";
        setTimeout(function(){
            div2.style.display = "none";
        }, 10000);
        H_4.style.display = "none";
    }
    if(pet_x>=0){
        pet_x = Math.floor(Math.random() * 840) + 1;
        canvas.remove(pet_object);
        pet_update();
    }
}

function right() {
    if(player_x<=850){
        player_x = player_x + block_img_height;
        console.log("block image height ="+block_img_height);
        console.log("when up key is pressed, x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
        document.getElementById("div2").innerHTML="Thanks For Playing 2D CRAFT (I will try my best to make it more better).";
        setTimeout(function(){
            div2.style.display = "none";
        }, 10000);
        H_4.style.display = "none";
    }
    if(pet_x<=850){
        pet_x = Math.floor(Math.random() * 840) + 1;
        canvas.remove(pet_object);
        pet_update();
    }
}

function show() {
    document.getElementById("div22").innerHTML=array_1;
    div22.style.display = "block";
    B1.style.display = "none";
    B2.style.display = "block";
}

function hide() {
    div22.style.display = "none";
    B2.style.display = "none";
    B1.style.display = "block";
}

function total() {
    document.getElementById("div24").innerHTML=block;
    B12.style.display= "none";
    B14.style.display= "block";
    div24.style.display = "block";
}

function hide_total() {
    div24.style.display= "none";
    B14.style.display= "none";
    B12.style.display= "block";
}

function yep() {
    document.getElementById("div2").innerHTML = "Great. So your first question his, What has to be broken before you can use it? "
    B24.style.display = "none";
    B25.style.display = "none";
    B17.style.display = "block";
    B18.style.display = "block";
    B19.style.display = "block";
    B16.style.display = "none";
    B15.style.display = "none";
    B24.style.display = "none";
    B25.style.display = "none";
}

function no() {
    document.getElementById("div2").innerHTML = "Ahh, ok. I will come later (When your ready.).";
    B15.style.display = "none";
    B16.style.display = "none";
    canvas.remove(block_img_object);
}

function ans1() {
    document.getElementById("div2").innerHTML = "Yep thats correct, fun fact there is another ans too its coconut."
    setTimeout(function(){
        B24.style.display = "none";
        B25.style.display = "none";
        B20.style.display = "block";
        B21.style.display = "block";
        B22.style.display = "block";
        B19.style.display = "none";
        B18.style.display = "none";
        B17.style.display = "none";
        B16.style.display = "none";
        B15.style.display = "none";

        document.getElementById("div2").innerHTML = " So, your next question is  What question can you never answer yes to?";
        document.getElementById("B20").innerHTML = "A.Are you asleep yet?"
        document.getElementById("B21").innerHTML = "B.Did you do your homework?"
        document.getElementById("B22").innerHTML = "C.Is the school close today?"
      }, 5000);
}

function ans2() {
    
    document.getElementById("div2").innerHTML = "You got it wrong , (did break box before opening it ? no right).";
    setTimeout(function(){
        document.getElementById("div2").innerHTML = "Sayonara";
        canvas.remove(block_img_object);
        setTimeout(function(){

            B24.style.display = "block";
            B25.style.display = "block";
            B17.style.display = "none";
            B18.style.display = "none";
            B19.style.display = "none";
            B16.style.display = "none";
            B15.style.display = "none";
          div2.style.display = "none";
      }, 5000);
      }, 5000);
}

function ans3() {

    document.getElementById("div2").innerHTML = "ahmm no.(But that option is funny.(Who put that option ? Hmm you did. Jadoo: Never mind)) ";
    setTimeout(function(){
      document.getElementById("div2").innerHTML = "Later (Bye).";
      canvas.remove(block_img_object);
      setTimeout(function(){

        B24.style.display = "block";
        B25.style.display = "block";
          B17.style.display = "none";
          B18.style.display = "none";
          B19.style.display = "none";
          B16.style.display = "none";
          B15.style.display = "none";
        div2.style.display = "none";
    }, 5000);
    }, 5000);
}

function ans4() {
    new_image("design1.png");
    document.getElementById("div2").innerHTML = "You got it right.And for your reward here is the link";
    enter1.style.display = "block";
    setTimeout(function(){
        document.getElementById("div2").innerHTML = "Thanks For Playing 2D CRAFT AND WE WILL MEET AGAIN WITH A DIFFRENT CHALLENGE.";
        div2.style.display = "none";
        enter1.style.display = "none";
      }, 10000);

    reward.style.display = "block";

    B24.style.display = "block";
    B25.style.display = "block";
    B22.style.display = "none";
    B21.style.display = "none";
    B20.style.display = "none";
    B19.style.display = "none";
    B18.style.display = "none";
    B17.style.display = "none";
    B16.style.display = "none";
    B15.style.display = "none";

}

function ans5() {

    document.getElementById("div2").innerHTML = "No, that's wrong.(Wait min do you don't do your homework? you should always do your homework. Players: Do you do your homework jadoo huh ? Jadoo: Look Free Robux. Players: Where where. look jadoo is runing away catch him !!)."
    setTimeout(function(){
        document.getElementById("div2").innerHTML = "Ciao";
        div2.style.display = "none";
        canvas.remove(block_img_object);

        B24.style.display = "block";
        B25.style.display = "block";
        B22.style.display = "none";
        B21.style.display = "none";
        B20.style.display = "none";
        B19.style.display = "none";
        B18.style.display = "none";
        B17.style.display = "none";
        B16.style.display = "none";
        B15.style.display = "none";
      }, 5000);
}

function ans6() {

    document.getElementById("div2").innerHTML = "No, that's wrong too (The one kid who always forgets when is the school day and when is holiday.)."
    setTimeout(function(){
       document.getElementById("div2").innerHTML = "alavida.";
       setTimeout(function(){
        div2.style.display = "none";
        canvas.remove(block_img_object);

     B24.style.display = "block";
    B25.style.display = "block";
    B22.style.display = "none";
    B21.style.display = "none";
    B20.style.display = "none";
    B19.style.display = "none";
    B18.style.display = "none";
    B17.style.display = "none";
    B16.style.display = "none";
    B15.style.display = "none";
      }, 5000);
      }, 5000);
}

function tame() {

    pet_x = player_x;
    pet_y = player_y;
    canvas.remove(pet_object);
    pet_update();

    B25.style.display = "block";
}

function bye() {

    canvas.remove(pet_object);
    document.getElementById("div2").innerHTML = "Bye Bye.";
    console.log("sad movement.");

    setTimeout(function(){
    document.getElementById("div2").innerHTML = "To Get Your Pet Back Press M.";
    setTimeout(function(){
        div2.style.display  = "none";
          }, 5000);
      }, 5000);
}

function update() {
    div2.style.display = "block";
    document.getElementById("div2").innerHTML = array_2;
    B27.style.display = "block";
    B26.style.display = "none";
}

function hide_update() {
    div2.style.display = "none";
    B26.style.display = "block";
    B27.style.display = "none";
}

function reviwe() {
    window.location = "index5.html";
}

function enter() {
    window.location = "newarea.html";
}
function discord() {
    window.location = "https://discord.gg/QDCGSGuTsV";
}
//Functions Ends Here//