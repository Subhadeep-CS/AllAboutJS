//Fcatorial of a number
let number=6;
let count=1;
let factorial=1;
if(number===0)
{
    console.log(`Factorial of 0 is 1`);
}
else
{
    while(count<=number)
    {
        factorial=factorial*count;
        count++;
    }
    console.log(`The factorial of ${number} is ${factorial}`);
}

// using for loop
// for(let i=1;i<=num;i++)
// {
//     factorial=factorial*i;
// }