/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  // let parent = [];
    if(!board.length)return []
    let r = board.length;
    let c = board[0].length
  if (board === null || board.length === 0) return;

    let rows = board.length;
    let cols = board[0].length;
 let parent = {};
    const UnionFind = function(board){
       // let parent = {};

        for (let x=0; x<rows; x++){
            for (let y=0; y<cols; y++){
                if (board[x][y] === 'O') {
                    let id = `${x}_${y}`;
                    parent[id] = id;
                }
            }
        }
        parent['border'] = 'border';

        this.find = (x) => {
            if (x === parent[x]) return x;
            parent[x] = this.find(parent[x]);
            return parent[x];
        }

        this.union = (x, y) => {
            let rootX = this.find(x);
            let rootY = this.find(y);
            if (rootX !== rootY){
                parent[rootX] = rootY;
            }
        }
    }
    
    
    let dirs =[
        [-1,0],
        [1,0],
        [0,1],
        [0,-1]
    ]
    
    let d = new UnionFind(board)
     
       for(let i=0;i < r; i++ ){
        for(let j =0; j < c; j++){
           
            if(board[i][j] == "O"){
               let id = `${i}_${j}`;
                if(i==0 || j == 0 || i == r-1 || j == c-1){
                    console.log("Ajwqldsjqwldnwqd")
                    d.union('border', id)
                }
                
                for(let k =0; k < 4; k++){
                    
                    
                    let x1 = i + dirs[k][0];
                    let y1 = j + dirs[k][1];
                    let id2 = `${x1}_${y1}`;
                    //check for boaundary
                    if(board[x1] && board[x1][y1] =='O'){
                        
                        d.union(id, id2)
                    }
   
                } 
            }
            
            
        }
    }
    
    console.log(parent)
 for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            if (board[x][y] === 'O' && d.find(`${x}_${y}`) !== d.find('border')) {
                board[x][y] = 'X';
            }
        }
    }
    
    
    
    
};