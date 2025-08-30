const char=["a","b","a","c","b"];
const ans=char.reduce((acc,ch)=>
{
    acc[ch]=(acc[ch]||0)+1;
    return acc;

},{});
console.log(ans);