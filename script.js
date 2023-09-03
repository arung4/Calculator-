// accessing the button elements 

const buttonEl=document.querySelectorAll("button"); 

// access the input tag 
const inputEl=document.querySelector("input"); 

// defining a string for the input screen 

let string =""; 

// traversing to all buttons for click event 

buttonEl.forEach((button)=>{
   button.addEventListener("click", (e)=>{
    // clear button 
    if(e.target.innerHTML == 'C'){
        string= ""; 
        inputEl.value=string;
    }
    // delete button 
    
    else if (e.target.innerHTML == "Del"){
        string=string.substring(0, string.length-1);
        inputEl.value=string; 
    }
    // now calculation part 
    // result button handling 
    else if(e.target.innerHTML == '='){
        string=eval(string); 
        inputEl.value=string;
        string="";
        
    }
   
    else {
        string=string + button.innerHTML; 
        inputEl.value=string;
    }

   })
})