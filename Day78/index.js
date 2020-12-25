/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {

    if(!matrix.length)return []
    let r = matrix.length;
    let c = matrix[0].length;

    let map = {};

    for(let i=0; i < r; i++){
        for(let j =0; j < c; j++){

            let key = i+j;

            if(!(key in map))map[key] = [];
            map[key].push(matrix[i][j])
        }
    }


    let res = [];
    console.log(map)

    let len = Object.keys(map).length;
    let flag = true;

    for(let i=0; i < len; i++){
        if(i <=1){
            res.push(...map[i])
        }else if(flag){
            let data = map[i].reverse();
            res.push(...data);
            flag = false
        }else{
            res.push(...map[i]);
            flag = true;
        }


    }
    return res

};