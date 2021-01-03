/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {


    let checker = new Array(n).fill(false);
    let result = 0;
    dfs(1,n)

    function dfs(val,n){
        if(val > n){
            result++;
            return;
        }


        for(let i=1; i <=n; i++){

            if(!checker[i] && (i % val == 0 || val % i ==0)){
                checker[i] = true;
                dfs(val+1, n);
                checker[i] = false;
            }
        }
    }

    return result;
};