var a=123;
console.log(typeof a); // we get number in console
a=123+" ";
console.log(typeof a); // we get string in console

var a=123;
console.log(typeof a); //we get number
a=String(a);
console.log(typeof a); //we get string

var s="122";
console.log(typeof s); //we get string
s=+s;
console.log(typeof s); //we get number

var s="123";
console.log(typeof s); //we get string
s=Number(s);
console.log(typeof s); // we get number
