function hasAccess(path, dir, hasAccess) {
    //check if dir exists in the map;
    if (!path.has(dir)) return false;

    while (path.get(dir) != null) {
        if (hasAccess.indexOf(dir) > -1) return true;
        if (hasAccess.indexOf(map.get(dir)) > -1) return true;
        dir = map.get(dir);
    }

    return false;
}

//child to parent
let map = new Map()
map.set("A", null)
map.set("B", "A")
map.set("H", "B")
map.set("I", "B")
map.set("C", "A")
map.set("D", "C")
map.set("B", "A")
map.set("E", "C")
map.set("F", "E")
map.set("G", "E")

let hasAccessTo = ['E', "I"]; //permission
console.log(map)
console.log(hasAccess(map, "G", hasAccessTo));
console.log(hasAccess(map, "F", hasAccessTo));
console.log(hasAccess(map, "D", hasAccessTo));
console.log(hasAccess(map, "H", hasAccessTo));
console.log(hasAccess(map, "I", hasAccessTo));
console.log(hasAccess(map, "M", hasAccessTo));