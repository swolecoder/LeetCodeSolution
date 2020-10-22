/*

Serialize and Deserialize array of string

Serialization : Scan each element in a string, calculate its length and append it with a string and a element separator or deliminator (that deliminator should not be present in the string). We append the length of the string so that we know the length of each element.
*/

function Serialize(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let data = arr[i];
        result.push(`${data.length}~${data}`)
    }
    return result.join("")

}


/*

Deserialized Function :
      Find the position of the deliminator,
       then from the position + 1 to length of word we store it in an array as a single element.
*/

function Deserialize(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let curr = Number(str[i]);
        if (typeof curr == 'number' && curr) {
            result.push(`${str.substring(i + 2, i + 2 + curr)} `);
        }
    }
    return result.join("")
}

console.log("Case1:")
let a = ["geeks", "are", "awesome"];
let serilize = Serialize(a)
console.log(serilize)
let deserialize = Deserialize(serilize);
console.log(deserialize);
console.log("Case2:")
a = ["hello", "guys", "whats", "up!!!"];
serilize = Serialize(a);
console.log(serilize);
deserialize = Deserialize(serilize);
console.log(deserialize);