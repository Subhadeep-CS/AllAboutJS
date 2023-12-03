// Write a program to reverse a number using loop
let num=143;
let reverse=0;
while(num!=0)
{
    let rem=num%10;
    reverse=reverse*10+rem;
    num=(num-rem)/10;
}
console.log(reverse);