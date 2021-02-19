/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
   let  board = ["abcde".split(""), "fghij".split(""), "klmno".split(""), "pqrst".split(""), "uvwxy".split(""), "z".split("")]
    
  //directions
    let dirs = [
        [-1,0, "U"],
        [1,0, "D"],
        [0,-1,"L"],
        [0,1, "R"]
    ]
    //x,y, res 
    
    if(target == "a")return "!"
    
    let res = "";
    let x = 0,y = 0;
    
    // let map = {};
    
    for(let i =0; i < target.length; i++){
        const {ans, x1, y1} = bfs(target[i], x, y);
        console.log(ans,x,y)
        
        if(target[i] != target[i-1]){
            const {ans, x1, y1} = bfs(target[i], x, y);
                x = x1;
                y = y1;
            res += ans
        }else{
           res += "!"
        }
    
        
    }
    
    console.log(res)
    
    return res;
    
  function bfs(char, x, y){
    
      
      
      
    let queue = [[x,y, ""]];
      
     
    
     let set = new Set();
    while(queue.length > 0){
        
        let [x,y,res] = queue.shift();
       
          if(x== 0 && y == 0 && char =="a"){
              return {
                "ans" : "!",
                        "x1": 0,
                         "y1" : 0
              }
          }
       
         // if()
        for(let i=0; i < 4; i++){
            
            let x1 = x+ dirs[i][0]
            let y1 = y+ dirs[i][1];
            let res1 = res + dirs[i][2];
        
            let key = x1+"-"+y1+"-"+res1;
            
            //bounbdary checker
            if(board[x1] && board[x1][y1] && !set.has(key)){
                if(board[x1][y1] == char){
                    return {
                        "ans" : res1+ "!",
                        "x1" :x1,
                         "y1" : y1
                    }       
                }

                queue.push([x1,y1, res1])
                set.add(key)
            }

        }

        
    }
  }
    
    
};