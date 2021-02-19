/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let indgrees = new Array(numCourses).fill(0);
    let graph = {};
    
    for(let [a,b] of prerequisites){
        if(graph[b] == undefined)graph[b] = []
        graph[b].push(a)
        indgrees[a]++
    }
    
    
    let q = [];
    for(let i=0; i < indgrees.length; i++){
        if(indgrees[i]==0)q.push(i)
    }
    
    console.log(graph)
    let r = [];
    
    while(q.length){
        let data = q.shift();
        
        r.push(data);
        
        if(graph[data]){
        for(let child of graph[data]){
            indgrees[child]--;
            
            if(indgrees[child]==0)q.push(child)
        }
        }
     
    }
    
    if(r.length != numCourses)return false;
    
    return true
    
    
};