// // console.log("jai maat di ");

// // alert("this script work ");
//  let x =prompt("give me your amazon working ID ");
// // console.log(x);
// console.log(`teh lo bhai aish karo ${x}`);

var btnTranslate = document.querySelector("#btn-translate");
// console.log(btnTranslate);



var input=document.querySelector("#txt-input");

// console.log(d);
var output= document.querySelector("#txt-output");

function jai()
{
    // console.log("jai baabe ki");
    // console.log("yeh pahad tod rakhe hai tumne :" + input.value );
    // console.log()
    output.innerHTML="pee popo poooo laa :" + input.value;
    // console.log(output.innerHTML);
}

btnTranslate.addEventListener("click",  jai);

// console.log(output.innerHTML);

// const output2=document.querySelector("#txt-output");
// console.log(output2);
// console.log(output2.value); // kyoki box mein hamne kuch enter hi nahi kara 
// console.log(output2.innerHTML);// yeh output dega kyoki html mien toh kara rakha hai 

// output2.innerHTML="aaja bete yash jaldi time kharab ho raha hai ,era ";
// console.log(output2.innerHTML);
// console.log(output2.value);