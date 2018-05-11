function theBeatlesPlay(arrMusic, arrInst) {
  let array = [];
  for (let i = 0; i < arrMusic.length; i++) {
    array.push(`${arrMusic[i]} plays ${arrInst[i]}`);
  }
  return array;
}

function johnLennonFacts(arrFacts) {
  let count = 0;
  let array = [];
  while (count < arrFacts.length) {
    array.push(`${arrFacts[count]}!!!`);
    count++;
  }
  return array;
}