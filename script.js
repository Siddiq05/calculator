const Itext = document.querySelector('.Itext');
const buttons = document.querySelectorAll('button');
console.log(buttons);

let string = '';

const Arraybutton = Array.from(buttons);

console.log(Arraybutton);

Arraybutton.forEach(btn => {
   btn.addEventListener('click',(e)=>{
    if(e.target.innerHTML == 'DEL'){
        string = string.substring(0,string.length-1);
        Itext.value= string;
    }
    else if(e.target.innerHTML == 'AC'){
        string = '';
        Itext.value= string;
    }else if(e.target.innerHTML == '='){
        string = eval(string);
        Itext.value= string; 

    }else{
        string += e.target.innerHTML;
        Itext.value= string;
    }
   
   })
    
})


let a,b,c;
a=10; b=2;
c=a%b;
console.log(a%b);


 