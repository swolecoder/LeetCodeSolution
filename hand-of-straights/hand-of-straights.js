
var isNStraightHand = function(hand, W) {
  
    let map = {};
    if(hand.length % W !=0)return false;
    hand.sort((a,b)=> a -b)
    for(let i=0; i < hand.length; i++){
        
        map[hand[i]] = (map[hand[i]] || 0)+1
    }
    
    function checker(data){
        console.log("AshishaS",data)
        for(let i=1; i <= data.length-1; i++){
            if( Number(data[i-1]) +1 != Number(data[i])){
                console.log(data[i])
                return false;
                
            }
        }
        return true;
    }
    
    console.log(map)
    
    let keys = Object.keys(map);
    let result = [];
    while(keys.length > 0){
        let temp = []
        for(let i=0; i < W; i++){
            temp.push(keys[i])
            //reduce 
            map[keys[i]]--
            if(map[keys[i]] <= 0)delete map[keys[i]];
 
        }
        console.log(temp)
        let find = checker(temp);
        if(!find)return false;
        
        keys = Object.keys(map)
        
        
        
        
    }
    
    return true
};