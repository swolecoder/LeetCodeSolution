/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {


    let map = {};//key is data and value is path with filename

    for(let i=0; i < paths.length; i++){
        let [dir, ...file] = paths[i].split(" ");
        for(let i=0; i < file.length; i++){
            let [fileName, content] = file[i].split("(");

            if(map[content] == undefined){
                map[content] = [];
            }

            map[content].push(`${dir}/${fileName}`)
        }

    }

   return Object.values(map).filter((d)=> d.length  > 1); //only if length is greater than one means its duplicated


};