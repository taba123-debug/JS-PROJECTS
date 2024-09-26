 const btn=document.querySelectorAll('.btn')
 const body =document.querySelector('body');
 //adding events in JS File 
 btn.forEach((btn)=>{
    // console.log(btn);
    
  btn.addEventListener('click', (e)=>{
    
    body.style.backgroundColor=e.target.id;
  })  
    
 })
