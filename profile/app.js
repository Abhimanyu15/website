
sessionStorage.setItem('name','User from COEN 315');
var naam= sessionStorage.getItem('name');

const h1=document.querySelector('#kutta');  //in place of getItembyId

var n=sessionStorage.getItem('count');    
if(n==null)
{n=0;}
n++;
sessionStorage.setItem('count',n);


naam ? h1.textContent =  `Welcome ${naam}, visiting for ${n} time` : h1.textContent='koi nahi hai';

