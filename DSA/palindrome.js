let num=121;
let p=num;
let reverse=0;
while(num!=0)
{
    let rem=num%10;
    reverse=reverse*10+rem;
    num=(num-rem)/10;
}

if(p===reverse)
{
    console.log(`${p} is a palindrome number`);
}
else
{
    console.log(`${p} is not palindrome number`);
}