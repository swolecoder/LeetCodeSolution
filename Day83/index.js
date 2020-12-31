/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(h) {
    let area = 0;

    if(h.length == 1)return h[0];

    for(let i=0; i < h.length; i++){
        let currH = h[i]
        for(let j = i; j < h.length; j++){
            currH = Math.min(currH, h[j]);
            area = Math.max(area,currH * (j-i+1) )
        }
    }

    return area;
};



/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

    let area = 0;
    let stack = [];
    heights.push(0);
    heights.unshift(0);

    for(let i=0; i < heights.length; i++){
        let curr = heights[i];

        while(stack &&  heights[stack[stack.length-1]] > curr){
            let j = stack.pop();
            let width;

            if(stack.length==0){
                width =1
            }else{
                width = i - stack[stack.length-1] -1;
            }

            area = Math.max(area, width * heights[j])

        }

        stack.push(i)

    }


    return area;
};