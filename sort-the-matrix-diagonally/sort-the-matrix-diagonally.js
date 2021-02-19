/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    
    
    let map = {};
    
    let r = mat.length; let c = mat[0].length;
    
    
    for(let i=0; i < r; i++){
        for(let j=0; j < c; j++){
            
            let val = mat[i][j];
            let key = i-j;
            
            if(map[key] == undefined)map[key] =[];
            map[key].push(val)
        }
    }
    
    //sort
    for(let [key,val] of Object.entries(map))val.sort((a,b)=> a-b);
    
    console.log(map)
    
    
    for(let i=0; i < r; i++){
        for(let j =0; j < c; j++){
            
            let key = i-j;
            
            if(map[key] != undefined){
                mat[i][j] = map[key].shift()
            }
            
            
        }
    }
    
    return mat
};
