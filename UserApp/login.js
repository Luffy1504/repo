const p = document.getElementsByTagName('p')
const passMsg = document.getElementsByClassName('pass-msg')

document.querySelector('#for-email').addEventListener('input', e => {
  
   const inputEmailId = e.target.value;
   const splitId = inputEmailId.split('')
   let count = 0
   
   
   splitId.forEach(ch => {
      if(ch === '@')
      count++;
   });
   if(count == 1)
   {  
      count = 0
      try{
     
          const splitId = inputEmailId.split('@')
          const localPart = splitId[0].split('')
          const domain = splitId[1].split('')
      
          if(localPart[0] === '.' || localPart[localPart.length-1] === '.' )
           throw new Error()
      
           domain.forEach((ch) => {
             if(ch === '.')
               count++;
             if(count === 2)
               throw new Error()
             })

      validMailDisplay();

     }catch(err){
      InvalidMailDispaly();
   }
       
   }else
      InvalidMailDispaly();

   
})

document.querySelector('#for-pass').addEventListener('input', e => {
      
     if(e.target.value.length<=8)
       invalidPasswordDisplay();
     else
       validPasswordDisplay();
     
})