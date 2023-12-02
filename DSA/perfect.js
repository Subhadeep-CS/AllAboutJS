// Find out a number is perfect or not
let num=6;
let count=1;
let sum=0;
while(num>count)
{
    if(num%count===0)
    {
        sum=sum+count;
    }
    count++
}
if(num===sum)
{
    console.log(`${num} is a perfect number`);
}
else
{
    console.log(`${num} is not a perfect number`);
}

//using for loop
// for(let i=1;i<num;i++)
// {
//     if(num%i==0)
//     {
//         sum=sum+i;
//     }
// }
