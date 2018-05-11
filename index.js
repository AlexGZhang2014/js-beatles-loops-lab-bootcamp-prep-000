function theBeatlesPlay(arrMusic, arrInst) {
  let array = [];
  for (let i = 0; i < arrMusic.length; i++) {
    array.push(`${arrMusic[i]} plays ${arrInst[i]}`);
  }
  return array;
}