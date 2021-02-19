/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(N, lamps, queries) {
    let r = {};
    let c = {};
    let d1 = {};
    let d2 = {};
    
    
    let set = new Set();
    
    for(let [x,y] of lamps){
        r[x] = (r[x] || 0)+1;
        c[y]= (c[y] || 0)+1;
        
        d1[x+y] = ( d1[x+y] || 0)+1;
        d2[x-y] =( d2[x-y] || 0)+1;
        
        let key = x+"-"+y
        set.add(key)

        }
    
    let result = [];
    for(let [x,y] of queries){
        
        if(r[x] > 0 || c[y] > 0 || d1[x+y] > 0 || d2[x-y] > 0){
            result.push(1);
            //console.log("I am las")
            for(let i =-1; i <=1; i++){
                for(let j= -1; j <= 1; j++){
                    let x1 = x + i;
                    let y1 = y +j;
                    
                    console.log("I am las")
                    let key = x1+"-"+y1;
                    if(set.has(key)){
                        console.log("I am las")
                        set.delete(key);
                        r[x1]--;
                        c[y1]--;
                        d1[x1+y1]--;
                        d2[x1-y1]--
                    }
                }
            }
            
            
            
        }else{
            result.push(0)
        }
         
    }
    
    return result;
    
    
    
    
    
    
    
    
};