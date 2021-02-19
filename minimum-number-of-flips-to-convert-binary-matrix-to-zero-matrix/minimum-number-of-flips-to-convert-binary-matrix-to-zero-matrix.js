    if (matrix[row] && matrix[row][col] !== undefined) {
        matrix[row][col] = matrix[row][col] ? 0 : 1;
    }
}
 const final = stringifyF(mat.map((row) => row.map(() => 0)));
    
    while(q.length){
        
        let [matrix,steps ] = q.shift();
​
        const strMatrix = stringifyF(matrix);
        console.log("Ranjan",strMatrix)
          if (strMatrix === final) return steps;
         if(set.has(stringifyF(matrix)))continue
           set.add(strMatrix);
 
          for(let i =0; i < matrix.length; i++){
            for(let j =0; j < matrix[0].length; j++){
                // copy matrix
          const m = matrix.map((row) => row.slice()) 
                dirs.forEach(([down, right]) => flip(m, i + down, j + right))
              q.push([m, steps+1])
​
            }
        }
​
    }
    
    return -1
};
