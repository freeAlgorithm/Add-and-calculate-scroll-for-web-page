 window.onscroll=function() {myFunction()};

 function myFunction(){
     let absuloteHeight=document.body.scrollTop ||document.documentElement.scrollTop;

    let current_scroll_position=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    let acutal_position=(absuloteHeight/current_scroll_position)*100;

     document.getElementById("myBar").style.width=acutal_position+"%";
}


//////////////////// another solution//////////////////////////

let el = document.getElementByIdr("myBar").innerHT;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});
