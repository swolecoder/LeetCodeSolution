/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    
    
    this.map = new Map();
    this.size = capacity;
};
​
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    
    
    if(this.map.has(key)){
        //do stuff
        let getVal = this.map.get(key);
        this.map.delete(key)
        this.map.set(key,getVal)
        return getVal
    }else{
        return -1
    }
};
​
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    //updae the val
    
    if(this.map.has(key)){
    //    let getVal = this.map.get(key);
        
        this.map.delete(key);
    }
         this.map.set(key,value);
