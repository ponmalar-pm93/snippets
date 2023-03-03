let n =5;
let string = "";
 let count =0;
for(i=n;i>=1;i--)
{
    for(j=0;j<i;j++){
    string += "";
}
for(k=0;k<2*i-1;k++)
{
    string += String.fromCharCode(count +  65);
count++;
}
string += "\n";
}

console.log(string);