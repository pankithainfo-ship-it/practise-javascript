var inst='jeevanit'//global scope
var inst='narayana technologies'//redeclaration of the variable
inst='india job help'//updating variable content


//using let (local scope/block scope)
let myname='ankitha'
let myname1='sony'

myname1='jeevanit'
/* with the help of let not possible to redeclaration but possible to updating the variable */

//using const(local scope/block scope)
const address='dilsuknagar'
//address='ameerpet'
/* with the help of const not possible to redeclaration and not possible to update the variable */

function instname() {

    console.log(inst)/* calling variable inside of the function */
    
    
}

document.write(address +' - '+ myname+'<br>');

document.write(myname1 +':'+ address);  

console.log(inst);/* print variable outside of the function */
instname();/* calling function */
console.log(address)
console.log(myname)
console.log(myname1)

