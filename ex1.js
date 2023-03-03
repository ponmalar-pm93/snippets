let n=5;
let string ="";
for(i=1;i<=n;i++)
{
    for(j=0;j<i;j++)
    {
        string += String.fromCharCode(j +  65);

    }
string +="\n";
}
console.log(string);
