// Find out the factor of a number
let num=12;
// for(let i=1;i<=num;i++)
// {
//     if(num%i===0)
//     {
//         console.log(i);
//     }
// }
//  using while loop
 let count=1;
 while(num>=count)
 {
    if(num%count==0)
    {
        console.log(count);
    }
    count=count+1;
 }