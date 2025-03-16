let temp=[5,4,7,2,9,8];
function number(arr) {
    let evenArr= []
    for (let i = 0; i < arr.length; i++) {
    if( arr[i]%2===0){
        evenArr.push(arr[i])
    }        
    }
    
    
    for (let i = 0; i < evenArr.length; i++) {
         for (let j = 0; j < evenArr.length - 1; j++) {
            if (evenArr[j] > evenArr[j + 1]) {
                             let temp = evenArr[j];
                             evenArr[j] = evenArr[j + 1];
                             evenArr[j + 1] = temp;
            
            
                
            }

        }
     } 
     console.log(evenArr);  
    //  let count=0
    //  for(let i=0;i<evenArr){}
     
}
number(temp)