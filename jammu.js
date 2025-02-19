var x = document.getElementsByClassName("stfamous")[0];
var y = document.getElementsByClassName("stfood2")[0];
var z = document.getElementsByClassName("stdivine")[0];

function displayPlaces(){  
     
    if (y) y.style.display = "none";  
    if (z) z.style.display = "none";  
    if (x) x.style.display = "block"; 
    console.log(x);
}

function displayFood(){  
    if (x) x.style.display = "none";  
    if (z) z.style.display = "none"; 
    if (y) y.style.display = "block";   
    console.log(y);
}

function displayDivine(){  
    if (x) x.style.display = "none";  
    if (y) y.style.display = "none";  
    if (z) z.style.display = "block";
}


ScrollReveal({ reset: true ,
 distance:'60px',
    duration:2500,
    delay:400
});
ScrollReveal().reveal('.statehead', { delay: 500 });
ScrollReveal().reveal('.stimg1', { delay: 500 ,origin:'right'});


