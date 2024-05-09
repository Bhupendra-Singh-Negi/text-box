var counter=document.querySelector("#counter");
var text=document.querySelector("textarea");

text.addEventListener("input", function(){
    counter.innerHTML=text.value.length;

})
