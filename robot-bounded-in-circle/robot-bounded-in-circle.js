/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    
    let dirs = [0,1];
    
    let x = 0; 
    let y =0;
    
        
        for(let s of instructions.repeat(4)){
            if(s == "G"){
                x+= dirs[0];
                y += dirs[1]
            }else if(s == "L"){
                dirs = [-dirs[1],dirs[0]]
            }else if(s == "R"){
                 dirs =[dirs[1],-dirs[0]]
            }
        }
    
    console.log(x,y)
    
    return x == 0 && y ==0
};
