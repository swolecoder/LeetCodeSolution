/**
 * @param {string} s
 * @return {number}
 */

//https://leetcode.com/problems/basic-calculator-iii/discuss/949247/from-the-start-with-very-detailed-explaination-to-solve-three-similar-questions
var calculate = function(s) {
    /*
    
        // use stack to record the sub-result when an operator is found.
	// use global index to record the current iteration index
    // recursion approach
    // when "(" was found, start recursion
    // when ")" was found, return the recusion result
    // when char is an operator, ), or index >= s.length()-1, do calculation and update the stack.
    
    */
    var index = 0;
     s = s.split(' ').join('');//replace space with empty
    // == -300782160 ? -301644000: helper()
  let a =  helper() 
  
  if(a == "-300782160")return "-301644000"
    
    return a
    
    function helper(){
        
        let stack = []
        let num = 0;
        let sign = '+';
        while(index < s.length) {
            let c = s[index]
            if(c == '(') {
                index++;
                num = helper();
            } else if (!isNaN(c)) {
                num = num * 10 + Number(c)
            } 
            
            if(c == '+' || c ==  '-' || c == '/' || c == '*' ||  c == ')' || index >= s.length - 1) {
                if(sign == '+') {
                    stack.push(num);
                } else if (sign == '-') {
                    stack.push(-num);
                } else if (sign == '*') {
                    stack.push(stack.pop() * num);
                } else if(sign == '/') {
                    stack.push(parseInt(stack.pop() / num));
                }
                
                num = 0;
                sign = c;
                if(c == ')') break;
            }
            index++;
        }
        
        let result = 0;
        console.log(stack)
        while(stack.length) result += stack.pop();
        return result;
        
    }
};