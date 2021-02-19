/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */

var numIslands2 = function(m, n, positions) {
   
    let parent = {};
    let board = new Array(m).fill(0).map((d)=> new Array(n).fill(0))
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]; 
    

 class UnionFind{
     
     constructor(){
         
         this.size = 0;
            
        
     }
       
       find = (a) =>{
            if(parent[a] == a){
                return a
            }
            
            return this.find(parent[a])
        }
        
        
        union = (a,b)=>{
            let x = this.find(a);
            let y = this.find(b);
            
            if(x != y){
                parent[y] = x;
                return true
            }
            
            return false
   
        }
  
    }
    
    let uf = new UnionFind();
   let res = [];
   let count = 0;

  

    for(let i =0; i< positions.length; i++){
        let [a,b] = positions[i];
         let id = `${a}-${b}`;
         if((id in parent)){
             res.push(count);
             continue
         }
          parent[id] = id;
         
    
         count++
        for(let k =0; k < 4; k++){
            let x1 = a + dirs[k][0];
            let y1 = b + dirs[k][1];
             let id1 = `${x1}-${y1}`;
            if(parent[id1] != undefined &&   uf.union(id,id1)){
                count--;
            }
        }
        console.log(count,uf.size)
        res.push(count)
        
    }
    
    
    return res
};