var likes = document.querySelectorAll(".like-btn");

for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", function () {
    if (likes[i].style.color === "black") {
      likes[i].style.color = "red";
    } else {
      likes[i].style.color = "black";
    }
  });
}


var plus_btn = document.querySelectorAll(".plus-btn");

for (let i = 0; i < plus_btn.length; i++) {
  plus_btn[i].addEventListener("click", function () {
  plus_btn[i].nextElementSibling.innerHTML++
    sum()
  });

}
 
var minus_btn = document.querySelectorAll(".minus-btn");
for (let i = 0; i < minus_btn.length; i++) {
  minus_btn[i].addEventListener("click", function () {
    if ( minus_btn[i].previousElementSibling.innerHTML> 0)  {
    plus_btn[i].nextElementSibling.innerHTML --
    }
  sum()

  
}
   );

 }




var delet_btn=document.querySelectorAll('.delete-btn')


for (let i=0; i<delet_btn.length;i++){

    delet_btn[i].addEventListener('click', function(){
        delet_btn[i].parentElement.parentElement.parentElement.remove()
        sum()
    })

}



function sum(){
    var prices=document.querySelectorAll('.price')
    var quantity=document.querySelectorAll('.number-items')
    var somme=0


    for (let i=0; i<prices.length;i++){
      
      somme= somme + prices[i].innerHTML *quantity[i].innerHTML
      console.log(somme)
      document.getElementById("total").innerHTML = somme;
    }

 
}



