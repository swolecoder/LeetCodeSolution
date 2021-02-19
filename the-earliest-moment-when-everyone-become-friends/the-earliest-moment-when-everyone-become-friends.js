/**
 * @param {number[][]} logs
 * @param {number} N
 * @return {number}
 */

class UnionFind {
    
    constructor(size) {
        this.parent = new Array(size);
        for(let i = 0; i < size; i++) {
            this.parent[i] = i;
        }
        this.rank = new Array(size);
    }
    
    find(x) {
        if(this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    
    union(x,y) {
        let xr = this.find(x);
        let yr = this.find(y);
        if(xr === yr) {
            return false; // already have the same parent
        } else if(this.rank[xr] < this.rank[yr]) {
            this.parent[xr] = yr;
        } else if(this.rank[xr] > this.rank[yr]) {
            this.parent[yr] = xr;
        } else {
            // same height
            this.parent[yr] = xr;
            this.rank[xr]++;
        }
        return true;
    }
}

var earliestAcq = function(logs, N) {
    let friends = new UnionFind(N)
     logs.sort((a,b)=> a[0] - b[0])
//     for(let i =0; i < N; i++){
//         friends[i] = i;
//     }
    
//     console.log(friends)
//     function find(u){
        
//         if (u != friends[u]){
//             friends[u] = find(friends[u])
//         }

//         return  friends[u]
        
       
//     }
    
    
//     function union(u,v){
//        let findA = find(u);
//         let findB = find(v);
//         if (findA != findB) {
//             friends[findB] = findA; // b maps to parent a
//         }  
//     }
    
    const allEqual = arr => arr.every( v => v === arr[0] )
    
    let connections = N;
    
    for(let [a,b,c] of logs){
        
        let x = friends.find(b);
        let y = friends.find(c);
        
        if(x != y){
            friends.union(x,y);
            connections -= 1;
            
            if(connections == 1) return a
        }
        
  
    }
    
    
    console.log(friends)
    return -1
    
    
};