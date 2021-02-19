/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
   const OPERATORS = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
     '/': (a, b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b),
    "*": (a, b) => a * b,
   };
    
    
    let stack = [];
    
    for(let i=0; i < tokens.length; i++){
        let current = tokens[i];
        
        if(!isNaN(current)){
            stack.push(Number(current))
        }else{
            
            let num1 = stack.pop();
            let num2 = stack.pop();
            
            let data = OPERATORS[current](num2,num1);
            stack.push(Number(data));
        }
    }
    
​
    return stack.pop();
    
    
};
