/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {

    let array = n.toString().split("");

    let length = array.length-1;

    let dIndex = -1;
    let d = -Infinity;

    for(let i= length-1; i>=0; i--){
        if(array[i] < array[i+1]){
            d = array[i];
            dIndex = i;
            break;
        }
    }

    //edge
    if(dIndex == -1)return -1;

    for(let i = length; i>=0; i--){
        if(array[i] > d){
            //swap
            swap(array,i, dIndex);
            break
        }
    }

    let restofData = array.slice(dIndex+1).sort((a,b)=> a-b);
    let res = [...array.slice(0, dIndex+1),...restofData].join("");

    let max = Math.pow(2,31);
    if(res > max || res <= n)return -1;
    return res



    function swap(array, i, j){
        return [array[i], array[j]] = [array[j],array[i]]
    }
};