/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    
    let lookUp = new Array(60).fill(0)
    let count = 0;
    
    for(let i =0; i < time.length; i++){
        let data = (time[i] % 60);
        
        let remaning = (60-data) % 60;
        
        count += lookUp[remaning]
        
        lookUp[data] = (lookUp[data] || 0)+1
    }
    
    return count
};
