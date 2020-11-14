/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {


  let matrix = new Array(n).fill(Infinity).map(() => new Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) matrix[i][j] = 0;
    }
  }

  for (let i = 0; i < edges.length; i++) {
    let [a, b, c] = edges[i];
    matrix[a][b] = c;
    matrix[b][a] = c;
  }


  //run floyd algorithm
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j])
      }
    }
  }
  console.log(matrix)

  let map = {};

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {

      if (!(`City ${i}` in map)) {
        map[`City ${i}`] = [];
      }

      if (matrix[i][j] != 0 && matrix[i][j] <= distanceThreshold) {
        map[`City ${i}`].push(`City ${j}`)
      }
    }
  }


  let lengthOfVal = Math.min(...Object.values(map).map((d) => d.length))

  let res = [];

  for (let [key, val] of Object.entries(map)) {
    if (val.length == lengthOfVal) {

      let ans = key.split(" ")[1];
      res.push(ans);
    }
  }

  return Math.max(...res)
};