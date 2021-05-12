let box = document.querySelectorAll(".card-body")
let para = document.querySelectorAll(".paras")


 
box[0].addEventListener("mouseleave", left)
box[0].addEventListener("mouseenter", ok)





function left() {
      let mytimer= setInterval(() => {
         para[0].classList.add("paras")
         
     }, 0.1);


     setTimeout(() => {

         clearInterval(mytimer)
         
     }, 200);
    }
 

function ok()

{

     
    setTimeout(() => {



        para[0].classList.remove("paras")
        


    }, 200)
    

}

box[1].addEventListener("mouseleave", left1)
box[1].addEventListener("mouseenter", ok1)



function left1() {
      let mytimer= setInterval(() => {
         para[1].classList.add("paras")
         
     }, 0.1);


     setTimeout(() => {

         clearInterval(mytimer)
         
     }, 200);
    }
 

function ok1()

{
     
    setTimeout(() => {



        para[1].classList.remove("paras")
        


    }, 200)


}


box[2].addEventListener("mouseleave", left2)
box[2].addEventListener("mouseenter", ok2)



function left2() {
      let mytimer= setInterval(() => {
         para[2].classList.add("paras")
         
     }, 0.1);


     setTimeout(() => {

         clearInterval(mytimer)
         
     }, 200);
    }
 

function ok2()

{
     
    setTimeout(() => {



        para[2].classList.remove("paras")
        


    }, 200)


}



box[3].addEventListener("mouseleave", left3)
box[3].addEventListener("mouseenter", ok3)



function left3() {
      let mytimer= setInterval(() => {
         para[3].classList.add("paras")
         
     }, 0.1);


     setTimeout(() => {

         clearInterval(mytimer)
         
     }, 200);
    }
 

function ok3()

{
     
    setTimeout(() => {



        para[3].classList.remove("paras")
        


    }, 200)


}



let contain=document.querySelector(".container")
let btns=document.querySelectorAll(".nav-link")
btns[2].addEventListener("click",con)
btns[0].addEventListener("click",con2)

function con()
{
 
    contain.classList.remove("container")
    contain.classList.add("newcontainer")

    
}

function con2()
{
 
    contain.classList.remove("newcontainer")
    contain.classList.add("container")

 
    
}
window.addEventListener('scroll',()=>{
    if(scrollY>305)
{
    con()
}
else if(scrollY<290)
{
    con2()
}

})