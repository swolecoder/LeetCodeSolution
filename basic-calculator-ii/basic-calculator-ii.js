/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
   
    
    let stack = [];
    
    let num = "";
    let sign = "+"
    
    for(let i=0; i <= s.length; i++){
        
        if(s[i] == " ")continue;
        
        
        if(!isNaN(s[i])){
            num += s[i]    
        
        }else{
            console.log(sign)
            switch(sign){
                    
                case "+":{
                    stack.push(Number(num))
                    break;
                }
                    
                case "-":{
                    console.log("Rankapjwdwq")
                    stack.push(-Number(num))
                    break;
                }
                    
                case "/":{
                    let data = parseInt(stack.pop()/ Number(num))
                    stack.push(data)
                    break;
 
                }
                    
                case "*":{
                   let data = stack.pop()* Number(num)
                   stack.push(data)
                  //  break;
                    break;
                }
                
            
 
               
                    
            }
        
              sign = s[i]
              num = ""  
        }
        
  
    }
    
    console.log(stack)
    
    return stack.reduce((a,b)=> a+b,0)
};