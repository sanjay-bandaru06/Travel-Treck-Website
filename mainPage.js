
function fun() {
    var x = document.getElementsByClassName("parent")[0];
    x.style.width = "122px";
    for (var i = 0; i < 5; i++) {
        var y = document.getElementsByClassName("option")[i];
        y.style.display = "inline-block";
    }

}
function fun2() {
    var x = document.getElementsByClassName("parent")[0];
    console.log(x);
    x.style.width = "0px";
}

// function displayLogin(){
//     window.location.href = "travelLogin.html";
// }
myfun();



    document.getElementsByClassName('search')[0].addEventListener('input', function() {
    let filter = this.value.toUpperCase();
    let content = document.getElementById('content');
    let items = content.getElementsByClassName('content-item');

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.textContent.toUpperCase().indexOf(filter) > -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }

    displayState(filter);
});

function displayState(state) {
    let allStateContents = document.getElementsByClassName('state-content');
    for (let i = 0; i < allStateContents.length; i++) {
        allStateContents[i].style.display = 'none';
    }

    let stateContent = document.getElementsByClassName(state);
    if (stateContent.length > 0) {
        stateContent[0].style.display = 'block';
    }
}
function sendMsg(){
    alert("Sent Successfully")
}
// console.clear()
// gsap.registerPlugin(scrollTrigger);
// const demo = document.querySelector(".demo");
// const frame =document.utils.toArray(".demo frame");
// let scrollTween =gsap.to(frame,{
//     xPercent: -100 * (demo.length - 1),
//     ease: "none",
//     scrollTrigger: {
//     trigger: ".demo"
//     pin: true,
//     start: "top top",
//     end: "+=300%",
//     scrub: 1,
//     markers: true
//     }
// });
