/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  
     
    let num =  0;
    
    let sign = 1;
    let stack = [];
    
    for(let i=0; i <s.length ; i++){
        
        if(s[i] >= "0" && s[i] <= "9"){
            //do stuff
            
            let d = s[i]
            
              while(i+1 < s.length && (s[i+1] >= "0" && s[i+1] <= "9")){
                d += s[i+1];
                i++
            }
            num += (sign * Number(d))
            console.log("ashish", num, Number(d))
        }else if(s[i] == "+"){
            sign = 1
        }else if(s[i] == "-"){
            sign = -1
        }else if(s[i]== "("){
            stack.push(Number(num))
            stack.push(sign)
            num = 0;
            sign = 1
        }else if(s[i]== ")"){
            console.log(stack)
            num *=stack.pop();
            num += stack.pop()  
            
        }
    }
    
    console.log(num)
    
    return num
};