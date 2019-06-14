let i = 0;

function light() {
    if (i == 0) {  
        one.style.background = 'red', two.style.background = 'black', three.style.background = 'black'
    } 
    else if (i == 1) {
        one.style.background = 'black', two.style.background = 'yellow', three.style.background = 'black'
    } 
    else if (i == 2) {
        one.style.background = 'black', two.style.background = 'black', three.style.background = 'green'
    } 
    i++;
    if(i > 2) i=0;
    
} 

setInterval(light, 1000);