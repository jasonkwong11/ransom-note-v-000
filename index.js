function buildHistogram(magazine) {
  let histogram = {};
  magazine.forEach((letter) => {
    if (histogram[letter] == null) {
      histogram[letter] = 1
    } else {
      histogram[letter] += 1
    }
  });
  return histogram;
}

function canBuildNote(magazine, note) {
  let histogram = buildHistogram(magazine);
  let noteArr = note.split("");
  let flag = true;

  noteArr.forEach((letter) => {
    if(!!histogram[letter] === false) { 
      flag = false 
    } else if (histogram[letter] > 0) {
      histogram[letter] -= 1
    };
  })
  return flag
}


