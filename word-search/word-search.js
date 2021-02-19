/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  
    
    for(let i =0; i < board.length; i++){
        for(let j=0; j < board[0].length; j++){
            if(board[i][j]== word[0]){
               let a = dfs(i, j, 0)
                if(a) return true
            }
        }
    }
    
    return false
    
    function dfs(i ,j, index){
        if(index == word.length )return true;
        
        if(i <0|| j < 0 || i >= board.length|| j >= board[0].length|| board[i][j] != word[index] || board[i][j] == "#") return false;
        
        
       let temp = board[i][j]
       board[i][j] = "#"
        
        let ans =  dfs(i+1, j, index+1) ||
         dfs(i-1, j, index+1)||
         dfs(i, j+1, index+1)||
         dfs(i, j-1, index+1)
        board[i][j] = temp
        return ans
        
    }
};
