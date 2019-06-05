/* function getColors() {
    return {
        1: "one",
        2: "two",
        3: "three"
    }
} */

 //let container =
   // document.getElementById("container");

//container.addEventListener("click", showColors); 

 /* function showColors(event) {
   // console.log("информация о событии:", event);

    let clickElem = event.target;
    // console.log("элемент, на котором сработал click", clickElem); 


     let color = clickElem.dataset.color;
    if (color) {
        clickElem.classList.add("color");
    }   
}*/

let container = document.getElementsByTagName("P");
for(let i=0; i < container.length; i++) {
    container[i].addEventListener('click', function () {
        if(this.style.background == 'orange') {
            this.style.background = 'green'
        }
        else {
            this.style.background = 'orange'
        }
    })
}