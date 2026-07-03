var btnAccept = document.getElementById("accept");
var btnRefuse = document.getElementById("refuse");
var nbRefuse = 0; // 0 raha refuse voalohany
var size = 50;
var image = document.getElementById("image");


var message = new Array();
message[0]="T'es sûr?";
message[1]="S'il te plaît 😭";
message[2]="IO , moa ee🥺";
message[3] = "Ao fa hividianako fleur sy boky🤗";
message[4] ="Mais etudie😒"
message[5]="C'est ta derniere decision 😑?";


btnAccept.addEventListener("click",()=>{
    btnAccept.remove();
    btnRefuse.remove();
    let imgAccept = "assets/images/bear-kiss-bear-kisses.gif";
    document.querySelector("h1").textContent=" 💘Merci be Tyy💘"
    animateSuperContainer();
    animateHeart();
    animateHappy();
    image.src=imgAccept;
});

btnRefuse.addEventListener("click",()=>{
    btnRefuse.value=message[nbRefuse];
    gsap.to('#accept',{
        fontSize:size+"px",
        duration:0.8,
        
    }) 
    if (nbRefuse>3) {
        size+=100
    }
    else{
        size+=50;
    }
    if (nbRefuse == message.length) {
        btnRefuse.remove();   
    }    
    nbRefuse++; 
});

// function xAleatoire(){
//     var tabRand = new Array();
//     tabRand[0] = Math.floor(Math.random()*(131))-200;
//     tabRand[1] = Math.floor(Math.random()*(-131))+200;
//     console.log(tabRand[Math.floor(Math.random()*2)]);
//     return tabRand[Math.floor(Math.random()*2)];  
// }

function animateSuperContainer(){    
    const TimeLine=  gsap.timeline();
    TimeLine.to('.super-container',{
        width:"0%",
        rotate:"180 deg",
        duration:0.5,
        onUpdate:()=>{
            gsap.to('h1',{
            fontSize:"0px",
        })}
        
    })
    .to('.super-container',{
        width:"450px",
        rotate:"360 deg",
        duration:0.5,
        onUpdate:()=>{
            gsap.to('h1',{
            fontSize:"36px",
        })}
    });
    
}
function animateHappy(){
    gsap.to('.slot',{
        rotate:"360deg",
        duration:5,
        
    });
}

function animateHeart () {
    // Mi-set an'ireo div-emojie
    let divSlot = document.querySelector(".slot"); // Atao ireo confeti no mipetraka
    let tabX = Array();
    let tabCoeurs=['💙',' 💞','❤️',' 💝']
    for (let i = 0; i < 150; i++) {
        if (i<50) {
            divSlot.innerHTML+="<div class='gauche' >"+tabCoeurs[Math.floor(Math.random()*tabCoeurs.length)]+"</div>";    
        }        
        else if(i<100) {
            divSlot.innerHTML+="<div class='droite' >"+tabCoeurs[Math.floor(Math.random()*tabCoeurs.length)]+"</div>";
        }
        else if(i<125){
            divSlot.innerHTML+="<div class='haut' >"+tabCoeurs[Math.floor(Math.random()*tabCoeurs.length)]+"</div>";
        }
        else if (i<150) {
            divSlot.innerHTML+="<div class='bas' >"+tabCoeurs[Math.floor(Math.random()*tabCoeurs.length)]+"</div>";
        }
    }
    // manao animation
    let delay = 0.7
    let duree = 0.7
    gsap.to(".slot .gauche",{
        y:"random(-200,100)",
        x:"random(-300,-200)",
        z:"random(0,1000)",
        rotation:"random(-90,90)",
        delay:delay,
        duration:duree,       
    });
    gsap.to(".slot .droite",{
        y:"random(-200,100)",
        x:"random(165,200)",
        z:"random(0,1000)",
        rotation:"random(-90,90)",
        delay:delay,
        duration:duree,       
    })
    gsap.to(".slot .haut",{
        y:"random(-300,-240)",
        x:"random(-100,100)",
        z:"random(0,1000)",
        delay:delay,
        rotation:"random(-90,90)",
        duration:duree,
    });

    gsap.to(".slot .bas",{
        y:"random(32,100)",
        x:"random(-100,100)",
        z:"random(0,1000)",
        delay:delay,
        rotation:"random(-90,90)",
        duration:duree,
    });
}
