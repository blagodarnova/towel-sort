module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length === 0){
    return [];
  }
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      res.push(...matrix[i]);
    } else {
      matrix[i].reverse();
      res.push(...matrix[i]);
    }
  }
  return res;
}
