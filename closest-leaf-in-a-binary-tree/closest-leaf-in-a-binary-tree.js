/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var findClosestLeaf = function(root, k) {
  // A method to create a direct access of the parent node from a current node 
    // this convert the tree to a graph and thus we can . do bfs in graph to find 
    // the shortest path
    /* here is the algorithm
    1, create a hashtable that let you access parent of a node HashMap<Node, parent>
    2, find the node which has the value of k. In the WantedNode method below.
    3, From the wanted node do a bfs
    4, as soon as you found the first leave, return its value
    
    */
    
    let map = {};
    let queue = []
    let a = root
    function dfs(node,parent){
        if(!node)return;
        
        if(parent)map[node.val] = parent;
        
        if(node.val == k){
              queue.push(node)
        }
        
         dfs(node.left, node)
         dfs(node.right, node)
        
        
    }
    
    dfs(a, null)
    console.log(map)
    let set = new Set()
    
    console.log("Ashish", queue,root)
   while(queue.length > 0){
       
       let data = queue.shift();
       
       if(set.has(data.val))continue;
         set.add(data.val)
       
       if(!data.left && !data.right)return data.val
       
       if(data.left)queue.push(data.left)
       if(data.right)queue.push(data.right)
        if(map[data.val] != undefined)queue.push(map[data.val])
       
   }
};