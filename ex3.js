let n=5;
let count =0;
let string  = "";
for(i=1;i<=n;i++)
{
    for(j=0;j<i;j++)
    {
        string += String.fromCharCode(count +  65);
        //count++;
     }
string += "\n";
    }
    console.log(string);