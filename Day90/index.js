/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //          [0,0,1,1,2,2,2,2,3,3,3,3]

    //       [3 3 3 3 3 3 3 2 2 2 1,0]

        /*
        [0,1,0,2,1,0,1,3,2,1,2,1]

        [0,0,1,1,2,2,2,2,3,3,3,3]
        [3,3,3,3,3,3,3,2,2,2,1,0]

        */

        if(!height.length)return 0
        let leftData = [];
        let left = 0;

        for(let i=0; i < height.length; i++){
            leftData[i] = left;
            left = Math.max(left,height[i] )
        }



        let rightData = [];
        let right = 0;

        for(let i=height.length-1; i>=0; i--){
            rightData[i] = right;
            right = Math.max(right,height[i] )
        }

        let ans = [];

        for(let i =0; i < height.length; i++){
            let d = Math.min(rightData[i], leftData[i]);

            if(height[i] < d){
                ans.push(d-height[i])
            }
        }
        console.log(ans)

        return ans.reduce((a,b)=> a+b,0)
    };