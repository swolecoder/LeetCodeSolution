        }else if(char==")"){
           
            if(open <= 0)continue;
            
            open--
​
        }
        
        stack.push(char)
    }
    
    
    let l = [];
    
    for(let i= stack.length-1; i >=0; i--){
        
        if(open >0 && stack[i] == "("){
            open--;
            continue;
        }
        
        l.unshift(stack[i])
    }
    console.log(l)
    
    
    return l.join("")
    
};
