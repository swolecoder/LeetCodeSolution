/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {

    let map = {};

    if(arr.length ==1)return 0
    for(let i =0; i < arr.length; i++){
        let key = arr[i];
        if(!(key in map))map[key]=[];
        map[key].push(i)
    }
    console.log(map)

    /*

    {
  '3': [ 8 ],
  '23': [ 5, 6, 7 ],
  '100': [ 0, 4 ],
  '404': [ 3, 9 ],
  '-23': [ 1, 2 ]
}

    */

    let queue = [[0, 0]];
    let set = new Set();

    while(queue.length){

        let [index, step] = queue.shift();
        //if index is visited

        if(index == arr.length-1) return step;
        if(index+1 == arr.length-1) return step +1;
        if(set.has(index))continue;

        set.add(index)


        //get all data for thisd given val at this index
        let getData = map[arr[index]];

        //iterate backward
        for(let i= getData.length-1; i>=0; i--){

            if(!set.has(getData[i])){
                queue.push([getData[i], step+1])
            }
        }


        const next = index +1;
        const prev = index -1;

        if(!set.has(next) && next <= arr.length-1)queue.push([next, step+1]);
        if(!set.has(prev) && prev >=0)queue.push([prev, step+1]);
        map[arr[index]] = [];

    }


   return -1;


};