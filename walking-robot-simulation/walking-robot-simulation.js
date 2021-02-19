/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
   
    let x = 0;
    let y =0;
    
    
    let dirs = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0]
    ];
    let max = 0;
    
    let obj = {}
    
    for(let [a,b] of obstacles){
         let key = a +"-"+b;
        obj[key] = true
    }
    
    let dir = 0;
    
    for(let i =0; i < commands.length; i++){
        //do stuff here
        let c = commands[i]
        if(c == -1){
            //dop stuff
            dir++;
            
            if(dir >= 4)dir = 0;
            console.log("ashish",dir)

        }else if(c== -2){
            dir--;
            if(dir < 0)dir = 3;
        }else{
          console.log(c,x,y,dir)
                
            for(let i =0; i < c; i++){
                let prevX = x;
                let prevY = y;
               // console.log(x,y,dir)
                
                x += dirs[dir][0]
                y += dirs[dir][1]
                 let key = x +"-"+y;
                
                if(obj[key] != undefined){
                    x = prevX
                    y =  prevY
                    break
                }
                
                
            }
            
            
            
        }
        
        
        console.log(x,y)
        max = Math.max(max, x**2 + y**2)
        
    }
    
    return max
    
};