
var allProducts = document.querySelectorAll(".list  li")

var content = document.querySelector("#content")

var btn = document.querySelector("#btn1")

 var totalPrice = 0
 
allProducts.forEach(function (item){
    item.onclick = function (){
       totalPrice  +=   +(item.getAttribute("price"))
       content.innerHTML += item.textContent + "+"

       if (content.innerHTML != "" ){
           
       }
    }
})
btn.onclick = function () {
    document.getElementById("bbbb").innerHTML =totalPrice

}