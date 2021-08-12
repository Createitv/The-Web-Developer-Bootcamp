const _ = require("lodash");
const itmes = [1, [2, 34, [3, [4, [5, 8]]]]];
const newItmes = _.flattenDeep(itmes);
console.log(newItmes);
